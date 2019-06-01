# <span style="color: gray;">Why doesn't it work?</span><br>`puma` fails to restart under `ruby-2.6.1`.

One of these days I've stumbled upon an issue, that can be reproduced like so:

`Gemfile`:

```rb
gem 'puma'
```

`1.ru`:

```rb
run lambda { |env| [200, {"Content-Type" => "text/plain"}, ["Hello World"]] }
```

```
$ ruby --version
ruby 2.6.1p33 (2019-01-30 revision 66950) [x86_64-linux]

$ gem list -ae bundler
*** LOCAL GEMS ***
bundler (2.0.1, default: 1.17.2)

$ bundle
$ bundle exec puma --version
puma version 3.12.0

$ bundle exec puma 1.ru &
[1] 1581
Puma starting in single mode...
* Version 3.12.0 (ruby 2.6.1-p33), codename: Llamas in Pajamas
* Min threads: 0, max threads: 16
* Environment: development
* Listening on tcp://0.0.0.0:9292
Use Ctrl-C to stop

$ kill -USR2 %1
* Restarting...
You must use Bundler 2 or greater with this lockfile.
[1]+  Exit 20                 bundle exec puma 1.ru
```

The message can be found in [`bundler/lockfile_parser.rb`][01]. And it's
produced by `bundler-2.x`.

[01]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/lockfile_parser.rb#L108

But let's take a step aside and talk about how ruby chooses which gem version
to use.

### How does `ruby` resolve files?

Let me quote [the documentation][17] here:

[17]: https://ruby-doc.org/core-2.6.1/Kernel.html#method-i-require

> If the filename does not resolve to an absolute path, it will be searched for
in the directories listed in $LOAD_PATH ($:).

Things are getting a little more involved when [gems][18] enter the scene:

[18]: https://github.com/rubygems/rubygems/blob/v3.0.1/lib/rubygems/core_ext/kernel_require.rb#L24-L29

> When you call require 'x', this is what happens:
>
> * If the file can be loaded from the existing Ruby loadpath, it is.
> * Otherwise, installed gems are searched for a file that matches. If it's
found in gem 'y', that gem is activated (added to the loadpath).

In other words, `rubygems` implementation of [`require` method][21] goes
along the lines of:

[21]: https://github.com/rubygems/rubygems/blob/v3.0.1/lib/rubygems/core_ext/kernel_require.rb#L34-L133

```rb
def require(path)
  return original_require(path)
rescue LoadError
  find_gem_by_path(path).activate
  return original_require(path)
end
```

But there are possibly multiple gems (multiple versions of gems) that has
the requested file. In such case `ruby` chooses the [latest version][19]
of the gem:

[19]: https://github.com/rubygems/rubygems/blob/v3.0.1/lib/rubygems/core_ext/kernel_gem.rb#L20-L21

> If you will be activating the latest version of a gem, there is no need to
call Kernel#gem, Kernel#require will do the right thing for you.

Or more precisely, the latest version of the [alphabetically first][11] gem
that has the file.
You can try and put the following file to the `lib` dir of two different gems:

[11]: https://github.com/rubygems/rubygems/blob/v3.0.1/lib/rubygems/specification.rb#L856-L862

`1.rb`:

```rb
puts __FILE__
```

Then `ruby -r1 -e ''` (or `ruby -e 'require "1"'`) will give you the path to the
one that comes first alphabetically.

At this point it must be clear that getting the error above from `bundler-2.x`
is nothing unusual. What is a mystery is why `bundler-2.x` complains about
not using `bundler-2.x`.

To understand that we've got to know what are default gems. Since, as you might
have
seen from the `gem list` output above, `bundler` is now a [default gem][03].

So, there are [two types of gems][02]
that come with `ruby`: bundled and default.
Bundled are not much different from those you install yourself, save you
don't need to install them. Unless you want a newer version. In other words, bundled
gems are basically preinstalled gems.

[02]: https://stdgems.org/
[03]: https://stdgems.org/compare/

Default gems are much more tightly incorporated into the language. They are
like bundled gems, but with some extra particularities.
Default gems are maintained by language developers.
Their files (the ones that are normally located in gem's `lib` dir)
reside in the standard library dir
(`~/.rubies/ruby-<version>/lib/ruby/<version>`).
Not in a separate dir like with bundled
(`~/.rubies/ruby-<version>/lib/ruby/gems/<version>/gems`),
or installed gems
(`~/.gems/ruby/<version>/gems`).
And you can't delete them, as opposed to the other types of gems.

But if they are part of the standard library, installing a newer version won't
have any effect, right?
Since the first `original_require()` would succeed for any file that belongs to
a default gem.
Not really, for that there's an extra twist in `require` method:

```rb
def require(path)
  if gem = find_default_gem_by_path(path)
    gem.activate
  end
  return original_require(path)
rescue LoadError
  find_gem_by_path(path).activate
  return original_require(path)
end
```

So, before the first `original_require()` it checks whether there's a default gem
that provides the file to be required. If so, it finds the latest
version available of the gem and activates it.

Actually even if there were no special handling of default gems, you could make
use of their newer versions, but in a more involved way:

```
$ ruby -e 'require "bundler/version"; puts Bundler::VERSION'                                       
1.17.2

$ ruby -e 'gem "bundler", "~> 2.0"; require "bundler/version"; puts Bundler::VERSION'              
2.0.1
```

Does that ring a bell? That's the syntax from `Gemfile`. You can use it
outside of `Gemfile`, like [others][04] sometimes do.

[04]: https://github.com/rails/rails/blob/v5.2.3/activerecord/lib/active_record/connection_adapters/postgresql_adapter.rb#L4

The other thing that you might have noticed is that
by default the chosen version was `1.17.2`,
not `2.0.1`. And that is a [known bug][15] (fixed in `ruby-2.6.2`).
For one reason or another, specification of the default gem `bundler-1.17.2`
(at `~/.rubies/ruby-<version>/lib/ruby/gems/<version>/specifications/default`)
states that `bundler` gem is composed of only `bundler.rb`, `exe/bundle` and
`exe/bundler`. And it's the specification that `ruby` uses to check if
a default gem contains the file to be required.

[15]: https://bugs.ruby-lang.org/issues/15582

You can compare it to `rdoc`:

```
$ gem list -ea rdoc
*** LOCAL GEMS ***
rdoc (6.1.1, default: 6.1.0, 4.3.0, 4.2.0)

$ ruby -e 'require "rdoc/version"; puts RDoc::VERSION'
6.1.1

$ ruby -e 'gem "rdoc", "6.1.0"; require "rdoc/version"; puts RDoc::VERSION'
6.1.0
```

But if just 3 files are considered to be part of the gem, can you picture what
might happen when `bundler` is required? Meaning, 
at some point it will inevitably stumble upon `bundler.rb`. What happens next?

```
$ touch Gemfile && ruby -rbundler/setup -e ''
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/gem_helpers.rb:5: warning: already initialized constant Bundler::GemHelpers::GENERIC_CACHE
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/gem_helpers.rb:5: warning: previous definition of GENERIC_CACHE was here
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/gem_helpers.rb:6: warning: already initialized constant Bundler::GemHelpers::GENERICS
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/gem_helpers.rb:6: warning: previous definition of GENERICS was here
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/gem_helpers.rb:52: warning: already initialized constant Bundler::GemHelpers::PlatformMatch
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/gem_helpers.rb:52: warning: previous definition of PlatformMatch was here
Traceback (most recent call last):
        9: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        8: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        7: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/setup.rb:10:in `<top (required)>'
        6: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler.rb:107:in `setup'
        5: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:26:in `setup'
        4: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:26:in `map'
        3: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/spec_set.rb:148:in `each'
        2: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/spec_set.rb:148:in `each'
        1: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:31:in `block in setup'
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:319:in `check_for_activated_spec!': You have already activated bundler 2.0.1, but your Gemfile requires bundler 1.17.2. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```

Here you are, at [line 10][12] of `bundler/setup` from `bundler-1.x`
`ruby` switched to
`bundler-2.x`. Or rather a couple of lines earlier, when requiring `bundler`.
We can confirm that by adding the following line before [raising
the exception][16]:

[16]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/runtime.rb#L319

```rb
$LOADED_FEATURES.grep(/bundler/).each { |f| puts f }
```

[12]: https://github.com/bundler/bundler/blob/v1.17.2/lib/bundler/setup.rb#L10

```
$ ruby -rbundler/setup -e ''
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/version.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/compatibility_guard.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/constants.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/rubygems_integration.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/current_ruby.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/shared_helpers.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/fileutils/lib/fileutils.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendored_fileutils.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/errors.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/environment_preserver.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/plugin/api.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/plugin.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/gem_helpers.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/match_platform.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/rubygems_ext.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/build_metadata.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/settings.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/feature_flag.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source/path.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source/git.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source/rubygems.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/lockfile_parser.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/definition.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/dependency.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/ruby_dsl.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/dsl.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source_list.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/source/metadata.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/spec_set.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/compatibility.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/gem_metadata.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/delegates/specification_provider.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/errors.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/action.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/add_edge_no_circular.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/add_vertex.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/delete_edge.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/detach_vertex_named.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/set_payload.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/tag.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/log.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph/vertex.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/dependency_graph.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/state.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/modules/specification_provider.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/delegates/resolution_state.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/resolution.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/resolver.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo/modules/ui.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendor/molinillo/lib/molinillo.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/vendored_molinillo.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/resolver/spec_group.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/resolver.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/index.rb
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/ui.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/ui/silent.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/ui/rg_proxy.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/ruby_version.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/dep_proxy.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/remote_specification.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/stub_specification.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/gem_version_promoter.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/gem_helpers.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/match_platform.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/lazy_specification.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/endpoint_specification.rb
/home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/source/gemspec.rb
Traceback (most recent call last):
        9: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        8: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        7: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/setup.rb:10:in `<top (required)>'
        6: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler.rb:107:in `setup'
        5: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:26:in `setup'
        4: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:26:in `map'
        3: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/spec_set.rb:148:in `each'
        2: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/spec_set.rb:148:in `each'
        1: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:31:in `block in setup'
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/runtime.rb:321:in `check_for_activated_spec!': You have already activated bundler 2.0.1, but your Gemfile requires bundler 1.17.2. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```

It turns out there's a bit more to it than that. At some point `bundler` 
[cleans the load path][14] for some reason. Which switches it back
to `bundler-1.x`.

[14]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/runtime.rb#L18

Anyways, now one can probably understand why it said that `bundler-2.0.1` was already activated.
That happened the moment it did `require 'bundler'`. Since that is one of the
few files that are in the spec.

But what is that thing about `Gemfile`, that requires `bundler-1.17.2`? Where
did
that come from? Well, at some point `bundler` realizes that it's not in the
list of
the dependencies, therefore it [adds][13] itself. But since `bundler/version` has
resolved
to
that of `bundler-1.17.2`, it adds `bundler-1.17.2`, not `bundler-2.0.1`.
Hence the message.

[13]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/definition.rb#L180-L183

But that doesn't happen when `Gemfile.lock` exists (after running `bundle`).
So let's cut `bundler` some
slack, and pretend that it's okay.

```
$ bundler
$ ruby -rbundler/setup -e ''
You must use Bundler 2 or greater with this lockfile.
```

And now we get the message as [in the beginning][01]. Here it compares
`Bundler::VERSION` (which comes from `bundler-1.x`, see `$LOADED_FEATURES`) with
the version from `Gemfile.lock` (`BUNDLED WITH` clause). That is, `bundler-2.x`
thinks that it's `bundler-1.x` and complains about using `bundler` version,
that is incompatible with the `Gemfile.lock`.

This `BUNDLED WITH` clause explains why `bundler` added itself as a
dependency in the previous case, where `Gemfile.lock` didn't exist.
`BUNDLED WITH`
is basically an implicit `gem 'bundler', '=> x', '< x + 1'`, where `x` is a major
version of `bundler` that generated the lock file.

You might as well run into another variation of the message:

```
$ ruby -rbundler/setup -e '' | cat
Traceback (most recent call last):
        12: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        11: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        10: from /home/yuri/.rubies/ruby-2.6.1/lib/ruby/2.6.0/bundler/setup.rb:20:in `<top (required)>'
         9: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler.rb:101:in `setup'
         8: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler.rb:135:in `definition'
         7: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/definition.rb:34:in `build'
         6: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/dsl.rb:13:in `evaluate'
         5: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/dsl.rb:234:in `to_definition'
         4: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/dsl.rb:234:in `new'
         3: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/definition.rb:83:in `initialize'
         2: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/definition.rb:83:in `new'
         1: from /home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/lockfile_parser.rb:95:in `initialize'
/home/yuri/.gem/ruby/2.6.1/gems/bundler-2.0.1/lib/bundler/lockfile_parser.rb:108:in `warn_for_outdated_bundler_version': You must use Bundler 2 or greater with this lockfile. (Bundler::LockfileError)
```

When `stdout` is not a tty, `bundler` doesn't [bother][20] itself with
prettifying the error.

[20]: https://github.com/bundler/bundler/blob/v1.17.2/lib/bundler/setup.rb#L8-L21

But with all this switching back and forth, it seems to work sometimes.
At least the `bundle` command above have succeeded.
And that is because binstubs basically go like [this][05]:

```rb
find_gem_by_path(path).activate
load path
```

[05]: https://github.com/rubygems/rubygems/blob/v3.0.1/lib/rubygems/installer.rb#L762

In this case `path` (`== 'bundler'`) is listed in the specification, as such the gem gets
activated
right away (before requiring the first file). Not in the middle like before.

Also, that explains why it generated `Gemfile.lock` with `BUNDLED WITH 2.0.1`.

And the last piece of the puzzle needed to understand what makes `puma` crash is...

### How does `bundler` persist across processes?

Consider the following scripts:

`1.rb`:

```rb
puts "#{$0}: #{Bundler::VERSION}"
puts `ruby 2.rb`
```

`2.rb`:

```rb
puts "#{$0}: #{Bundler::VERSION}"
```

Then:

```
$ touch Gemfile && bundle exec ruby 1.rb
1.rb: 2.0.1
2.rb: 2.0.1
```

To tell you the truth, by default `bundler exec` cheats and [doesn't fork][06].
But that makes not much difference here.
The answer lies in `RUBYOPT` and `RUBYLIB` environment
variables. Let me quote [the Pick-axe Book][07]:

[06]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/cli/exec.rb#L28
[07]: https://ruby-doc.com/docs/ProgrammingRuby/html/rubyworld.html#S3

> RUBYOPT Additional command-line options to Ruby; examined after real command-line options are parsed ($SAFE must be 0).
>
> RUBYLIB Additional search path for Ruby programs ($SAFE must be 0).

`bundler` adds `-rbundler/setup` to [`RUBYOPT`][08], which makes the child
require
`bundler/setup` before executing the script. And adds `bundler`'s `lib` dir to
[`RUBYLIB`][09], which is equivalent to adding the dir to `$LOAD_PATH` or
activating the gem.

[08]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/shared_helpers.rb#L336
[09]: https://github.com/bundler/bundler/blob/v2.0.1/lib/bundler/shared_helpers.rb#L343

What that out of the way...

### So, what makes `puma` crash in the end?

Here's a simplified version of `puma`'s [`run` method][10]:

[10]: https://github.com/puma/puma/blob/v3.12.0/lib/puma/launcher.rb#L166-L199

```rb
class Puma::Launcher
    def run   # source
        previous_env = Bundler::ORIGINAL_ENV
        previous_env['RUBYOPT'] = '-rbundler/setup ' + previous_env['RUBYOPT']
        @runner.run   # returns when puma receives restart signal
        case @status
        when :restart
            ENV.replace(previous_env)
            restart!
        ...
        end
    end
end
```

`Bundler::ORIGINAL_ENV` is, as one might guess, the environment without changes
made
by `bundler`. So, basically before restart `puma` undoes changes made to
`RUBYLIB`
variable. The child requires `bundler-1.x`. In the middle of it it switches to
`bundler-2.x`. But it still thinks it's `bundler-1.x`. Which makes it complain
about using incompatible `bundler` version.
