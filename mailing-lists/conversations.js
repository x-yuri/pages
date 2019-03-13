
exports.conversations = {'localhost.localdomain': [
{user: "Pierre Machard", timestamp: '2005/09/24 17:35:08', ps:
    ["\"localdomain\" is not a registered top-level domain and hopefully never will be, so it is safe to use locally as it won't cause communication problems."]},
{user: "Bernd Eckenfels", timestamp: '2005/09/24 18:33:25', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\n\"localdomain\" is not a registered top-level domain and hopefully never will be, so it is safe to use locally as it won't cause communication problems.",
    "It is not safe to use unregistered domains. and I dont see a reason for .localdmain at all."]},
{user: "Pierre Machard", timestamp: '2005/10/06 07:10:56', url: 'http://lists.debian.org/debian-devel/2005/10/msg00194.html', ps:
    ["bq(with-author non-relevant).. Bernd Eckenfels"
    + "\n\nIt is not safe to use unregistered domains. and I dont see a reason for .localdmain at all.",
    "p(non-relevant). IIRC The main reason was described in \"#247734\":http://tinyurl.com/2an2ujy"]},
{user: "Klaus Ethgen", timestamp: '2005/10/06 07:52:04', url: 'http://lists.debian.org/debian-devel/2005/10/msg00198.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nIIRC The main reason was described in \"#247734\":http://tinyurl.com/2an2ujy",
    "p(non-relevant). The only reason I find is that RedHat use it. But RedHat shouldn't be debians requirement of quality. It should be other way around. RedHat is such a buggy distribution. And it gets more and more worse every upgrade.",
    "p(non-relevant). .localdomain is such a peace of shit which only makes troubles. So please hold the high quality of debian and do not polute it with such grab."]},
{user: "Marco d'Itri", timestamp: '2005/10/06 10:37:47', url: 'http://lists.debian.org/debian-devel/2005/10/msg00234.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\n.localdomain is such a peace of shit which only makes troubles. So",
    "p(non-relevant). Please explain which troubles."]},
{user: "Klaus Ethgen", timestamp: '2005/10/06 11:43:29', url: 'http://lists.debian.org/debian-devel/2005/10/msg00202.html', ps:
    ["bq(with-author non-relevant).. Marco d'Itri"
    + "\n\nPlease explain which troubles.",
    "p(non-relevant). I cannot specify it. But I remember that I did search for problemes in the past long time to find a error. And it was an entry of localhost.localdomain in a /etc/hosts. Maybe it was PVM or MySQL or other. I'm not sure.",
    "p(non-relevant). If you think for localhost you will never anticipate that it is called localhost.localdomain on one system. The Phrase \"localhost\" is for historical reasons such often used in scripts and programms. It whould create many manyears of troubleshooting putting this .localdomain on the end."]},
{user: "Marco d'Itri", timestamp: '2005/10/06 11:48:50', url: 'http://lists.debian.org/debian-devel/2005/10/msg00203.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nI cannot specify it. But I remember that I did search for problemes in",
    "p(non-relevant). In other words, you don't know and are just handwaving. Next?"]},
{user: "Klaus Ethgen", timestamp: '2005/10/06 12:04:44', url: 'http://lists.debian.org/debian-devel/2005/10/msg00205.html', ps:
    ["bq(with-author non-relevant).. Marco d'Itri"
    + "\n\nIn other words, you don't know and are just handwaving. Next?",
    "p(non-relevant). No, I just do not remember which software it was. I absolutely remember THAT it was a problem with localhost.localdomain and THAT it takes me long time to debug."]},
{user: "Marco d'Itri", timestamp: '2005/10/06 12:19:01', url: 'http://lists.debian.org/debian-devel/2005/10/msg00206.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nNo, I just do not remember which software it was. I absolutely remember THAT it was a problem with localhost.localdomain and THAT it takes me long time to debug.",
    "p(non-relevant). So you know about an unspecified issue with an unspecified program. It's not much to argue that the current behaviour is broken."]},
{user: "Wouter Verhelst", timestamp: '2005/10/06 12:22:02', url: 'http://lists.debian.org/debian-devel/2005/10/msg00207.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nNo, I just do not remember which software it was. I absolutely remember THAT it was a problem with localhost.localdomain and THAT it takes me long time to debug.",
    "p(non-relevant). That's not helpful.",
    "Problems can have many causes. One of them may be that localhost.localdomain is unexpected; another may be that the software you were using is buggy, or misconfigured. Also, it could be that the problem you experienced back then has been fixed in the mean time.",
    "p(non-relevant). There's only one way to be sure, and that is to examine the problem in detail. If it is clear from your example that localhost.localdomain does indeed cause many problems, we could consider not using it by default anymore. However, if we find that the problem is just a bug, it would be better to fix it rather than removing something which many people expect to be there.",
    "p(non-relevant). Since you're not providing details, however, this isn't possible, and the only sensible course of action is to ignore your claims."]},
{user: "Klaus Ethgen", timestamp: '2005/10/06 12:42:59', url: 'http://lists.debian.org/debian-devel/2005/10/msg00209.html', ps:
    ["bq(with-author non-relevant).. Wouter Verhelst"
    + "\n\nThat's not helpful.",
    "p(non-relevant). True. Thats the reason why I give more helpfull information too in the first mail.",
    "bq(with-author non-relevant).. Wouter Verhelst"
    + "\n\nindeed cause many problems, we could consider not using it by default anymore. However, if we find that the problem is just a bug, it would be better to fix it rather than removing something which many people expect to be there.",
    "p(non-relevant). But why changing \"localhost\" to \"localhost.localdomain\" only for the reason that RedHat doing it? There was everythink OK with the proven \"localhost\"-entry. No problemes was encounted with it. The problemes was at first encounted when changing this localhost entry. It is absolutely irrelevant if the problemes are exactely specified or not. The point is that localhost.localdomain MAKES problemes. And it is nothing what makes sense either.",
    "bq(with-author non-relevant).. Wouter Verhelst"
    + "\n\nSince you're not providing details, however, this isn't possible, and the only sensible course of action is to ignore your claims.",
    "p(non-relevant). Just do what you whant with it. I do not whant to fight. I know how to edit /etc/hosts. But why the hell should there be so many traps for users who do not know."]},
{user: "John Hasler", timestamp: '2005/10/06 13:06:10', url: 'http://lists.debian.org/debian-devel/2005/10/msg00216.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nThats the reason why I give more helpfull information too in the first mail.",
    "p(non-relevant). You haven't given enough information.",
    "bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nBut why changing \"localhost\" to \"localhost.localdomain\"...",
    "p(non-relevant). It wasn't changed.  \"localhost.localdomain\" was _added_.  \"localhost\" is still there.",
    "bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nThere was everythink OK with the proven \"localhost\"-entry. No problemes was encounted with it.",
    "p(non-relevant). There were problems that the addition of \"localhost.localdomain\" were intended to solve.  You may not have personally experienced them but many others did.",
    "bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nIt is absolutely irrelevant if the problemes are exactely specified or not.",
    "p(non-relevant). If the addition of \"localhost.localdomain\" caused you a problem we need to know exactly what it was so that we can fix it."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 13:35:49', url: 'http://lists.debian.org/debian-devel/2005/10/msg00221.html', ps:
    ["bq(with-author non-relevant).. John Hasler"
    + "\n\nIt wasn't changed.  \"localhost.localdomain\" was _added_.  \"localhost\" is still there.",
    "p(non-relevant). The first entry is the canonical name, and it is what the reverse maps to.  So yes, it WAS changed, and very much so.",
    "bq(with-author non-relevant).. John Hasler"
    + "\n\nThere were problems that the addition of \"localhost.localdomain\" were intended to solve.  You may not have personally experienced them but many others did.",
    "p(non-relevant). Now, that is interesting.  Which problems?  I honestly don't know of any."]},
{user: "John Hasler", timestamp: '2005/10/06 14:43:18', url: 'http://lists.debian.org/debian-devel/2005/10/msg00229.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nThe first entry is the canonical name, and it is what the reverse maps to.  So yes, it WAS changed, and very much so.",
    "p(non-relevant). The OP seemed to me to be implying that \"localhost\" had been deleted and replaced by \"localhost.localdomain\".",
    "bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nNow, that is interesting.  Which problems?  I honestly don't know of any.",
    "p(non-relevant). Read the discussion in the bug report.  I think \"localhost.localdomain\" is ugly, but adding it seems much more feasible than fixing all the broken software."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 15:26:31', url: 'http://lists.debian.org/debian-devel/2005/10/msg00232.html', ps:
    ["bq(with-author non-relevant).. John Hasler"
    + "\n\nRead the discussion in the bug report.  I think \"localhost.localdomain\" is",
    "p(non-relevant). I did. \"localhost.localdomain\" solved no problems, it was not even related to the problem they were trying to fix, and it certainly is not part of the best compromise solution (add another IP to loopback and use that for the canonical hostname)."]},
{user: "Steve Greenland", timestamp: '2005/10/06 12:31:37', url: 'http://lists.debian.org/debian-devel/2005/10/msg00211.html', ps:
    ["bq(with-author non-relevant).. Wouter Verhelst"
    + "\n\nProblems can have many causes. One of them may be that localhost.localdomain is unexpected; another may be that the software you were using is buggy, or misconfigured. Also, it could be that the problem you experienced back then has been fixed in the mean time.",
    "p(non-relevant). When proposing a variation from long-standing historical practice, shouldn't the onus be on the on making the change? What problem does 'localhost.localdomain' solve? Why is is better than just 'localhost', which has been common practice for oh, what, 20+ years?"]},
{user: "Gabor Gombas", timestamp: '2005/10/06 13:25:15', url: 'http://lists.debian.org/debian-devel/2005/10/msg00218.html', ps:
    ["bq(with-author non-relevant).. Steve Greenland"
    + "\n\nWhen proposing a variation from long-standing historical practice, shouldn't the onus be on the on making the change? What problem does 'localhost.localdomain' solve? Why is is better than just 'localhost', which has been common practice for oh, what, 20+ years?",
    "p(non-relevant). It's being long-standing does not mean it's correct. %(relevant)I started looking for any standards or RFCs that require that the address 127.0.0.1 should resolve to \"localhost\" but I could only find some recommendations for DNS administrators, and nothing about /etc/hosts.% Therefore I'd be inclined to say that if an application does not accept 127.0.0.1 being resolved to e.g. \"foo\" then it is is broken, and this is not changed by the fact that it has been broken for 20+ years.",
    "p(non-relevant). %(neutral)There are other long-standing misunderstanding in network setup (just think about the stupidity of \"@hostname --fqdn@\").% Let's fix the bugs in the applications instead of religiously following bad assumptions made in the past."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 13:33:03', url: 'http://lists.debian.org/debian-devel/2005/10/msg00220.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nIt's being long-standing does not mean it's correct. I started looking",
    "p(non-relevant). But it means it is a de-facto standard, which it *is*.  Every *nix system I have mucked around with in the last five years, with the exception of a few Linux distributions, uses plain \"localhost\".",
    "bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nDNS administrators, and _nothing_ about /etc/hosts. Therefore I'd be",
    "p(non-relevant). /etc/hosts is a local implementation detail, it won't make it to RFCs while there is still a bit of sanity in the world.  It is probably in a POSIX-like standard, though.",
    "bq(with-author non-relevant).. Gabor Gombas"
    + "\n\ninclined to say that if an application does not accept 127.0.0.1 being resolved to e.g. \"foo\" then it is is broken, and this is not changed by the fact that it has been broken for 20+ years.",
    "p(non-relevant). That is correct, yes."]},
{user: "Steve Greenland", timestamp: '2005/10/06 13:47:54', url: 'http://lists.debian.org/debian-devel/2005/10/msg00224.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nIt's being long-standing does not mean it's correct.",
    "p(non-relevant). No, but it doesn't make changing it correct, either.",
    "p(non-relevant). Again: what actual technical problem is solved by 'localhost.localdomain\"? Is solving that problem worth the potential breakage of existing code that assumes gethostbyaddr(127.0.0.1) == \"localhost\". Note that I'm not arguing such code is correct, but I don't see the need to pointlessly break it.",
    "p(non-relevant). There are lots of long-standing characteristics of Unix systems that are not required by RFCs or Posix standards, yet we don't go about arbitrarily changing them."]},
{user: "Lionel Elie Mamane", timestamp: '2005/10/07 06:12:38', url: 'http://lists.debian.org/debian-devel/2005/10/msg00285.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\n%(non-relevant)It's being long-standing does not mean it's correct.% I started looking for any standards or RFCs that require that the address 127.0.0.1 should resolve to \"localhost\" but I could only find some recommendations for DNS administrators, and _nothing_ about /etc/hosts.",
    "%(relevant)Having the DNS and /etc/hosts give different results is asking for trouble.% RFC 1912 says that this discussion was had in the past and the conclusion was \"localhost.\"."]},
{user: "Gabor Gombas", timestamp: '2005/10/07 11:54:39', url: 'http://lists.debian.org/debian-devel/2005/10/msg00306.html', ps:
    ["bq(with-author).. Lionel Elie Mamane"
    + "\n\nHaving the DNS and /etc/hosts give different results is asking for trouble. RFC 1912 says that this discussion was had in the past and the conclusion was \"localhost.\".",
    "Note that that discussion was about appending the local (i.e. a real, existing) domain to localhost, and that indeed is problematic (first of all, there is _no_ single \"local domain\" for multi-homed machines).",
    "Appending a non-existent TLD to localhost is somewhat different, and is not addressed in the RFC."]},
{user: "Stefano Zacchiroli", timestamp: '2005/10/06 13:17:53', url: 'http://lists.debian.org/debian-devel/2005/10/msg00215.html', ps:
    ["bq(with-author).. Klaus Ethgen"
    + "\n\nI cannot specify it. But I remember that I did search for problemes in the past long time to find a error. And it was an entry of localhost.localdomain in a /etc/hosts. Maybe it was PVM or MySQL or other. I'm not sure.",
    "IIRC leafnode complains about \"localhost.localdomain\" refusing to suck news unless you manually specify a domainname in its configuration file.  Maybe you remember that trouble?",
    "Still, I've ever considered that an issue with leafnode, not of \"localhost.localdomain\"."]},
{user: "Mark Brown", timestamp: '2005/10/06 20:38:03', url: 'http://lists.debian.org/debian-devel/2005/10/msg00259.html', ps:
    ["bq(with-author).. Stefano Zacchiroli"
    + "\n\nIIRC leafnode complains about \"localhost.localdomain\" refusing to suck news unless you manually specify a domainname in its configuration file.  Maybe you remember that trouble?"
    + "\n\nStill, I've ever considered that an issue with leafnode, not of \"localhost.localdomain\".",
    "It's complaining because upstream wishes to strongly encourage users to configure things so that they have a globally unique hostname part to message IDs that are generated by Leafnode in order to minimise the risk of collisions.  It will do the same thing for a few other things that look like default or incomplete configurations."]},
{user: "Stefano Zacchiroli", timestamp: '2005/10/06 20:41:13', url: 'http://lists.debian.org/debian-devel/2005/10/msg00261.html', ps:
    ["bq(with-author non-relevant).. Mark Brown"
    + "\n\nIt's complaining because upstream wishes to strongly encourage users to configure things so that they have a globally unique hostname part to message IDs that are generated by Leafnode in order to minimise the risk",
    "p(non-relevant). IMHO is too much to inhibit the use of the program as a whole just to minimize the collision risk, a warning would have been enough. But we are getting OT(hread) here ..."]},
{user: "Mark Brown", timestamp: '2005/10/06 21:07:50', url: 'http://lists.debian.org/debian-devel/2005/10/msg00263.html', ps:
    ["bq(with-author non-relevant).. Stefano Zacchiroli"
    + "\n\nIMHO is too much to inhibit the use of the program as a whole just to minimize the collision risk, a warning would have been enough. But we are getting OT(hread) here ...",
    "p(non-relevant). I don't believe I indicated anything except the views of upstream there."]},
{user: "John Hasler", timestamp: '2005/10/06 21:14:45', url: 'http://lists.debian.org/debian-devel/2005/10/msg00266.html', ps:
    ["bq(with-author).. Stefano Zacchiroli"
    + "\n\nIMHO is too much to inhibit the use of the program as a whole just to minimize the collision risk, a warning would have been enough.",
    "Particularly considering that there are better ways to assure the uniqueness of message-ids anyway."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 13:28:02', url: 'http://lists.debian.org/debian-devel/2005/10/msg00219.html', ps:
    ["bq(with-author).. Marco d'Itri"
    + "\n\nPlease explain which troubles.",
    "p(relevant). Some programs will try to solve the reverse for 127.0.0.1, during normal operations (not to verify WHAT 127.0.0.1 points to, but because it is doing reverse DNS for every connection, and one just came over lo).  ",
    "p(relevant). Some of these programs, due to utter braindamage, special-case the string \"localhost\".  Change that, and they break.  %(neutral)Mysql is the highest profile case, apparently.%",
    "p(non-relevant). Still, WHAT does a canonical name of localhost.localdomain. for 127.0.0.1 brings us?  It is completely useless, it adds no extra functionality over a plain canonical name of \"localhost\".  And it breaks badly designed applications.  While it pains me to say so (I absolutely *loathe* bad design), reverting that completely useless change looks like a very good idea to me."]},
{user: "Russ Allbery", timestamp: '2005/10/06 18:00:29', url: 'http://lists.debian.org/debian-devel/2005/10/msg00245.html', ps:
    ["bq(with-author).. Marco d'Itri"
    + "\n\nPlease explain which troubles.",
    "See the news.software.nntp traffic with people having strange problems with pathnames and message ID generation because of .localdomain.  There have been a few separate cases of that over the past year or so."]},
{user: "Marco d'Itri", timestamp: '2005/10/06 18:23:41', url: 'http://lists.debian.org/debian-devel/2005/10/msg00249.html', ps:
    ["bq(with-author).. Russ Allbery"
    + "\n\nSee the news.software.nntp traffic with people having strange problems with pathnames and message ID generation because of .localdomain.  There have been a few separate cases of that over the past year or so.",
    "Not relevant. They would have the same problems with 127.0.0.1 = localhost.",
    "(Not that I'm arguing either way, anyway.)"]},
{user: "Russ Allbery", timestamp: '2005/10/06 19:44:34', url: 'http://lists.debian.org/debian-devel/2005/10/msg00255.html', ps:
    ["bq(with-author).. Marco d'Itri"
    + "\n\nNot relevant. They would have the same problems with 127.0.0.1 = localhost.",
    "No, they won't, because INN ignores hostnames that do not contain a period for the purposes of generating external identifiers, specifically to keep from using things like localhost or other unqualified names that aren't globally unique.  Adding the pointless .localdomain thing breaks that sort of simple sanity check."]},
{user: "John Hasler", timestamp: '2005/10/06 21:12:39', url: 'http://lists.debian.org/debian-devel/2005/10/msg00265.html', ps:
    ["bq(with-author).. Russ Allbery"
    + "\n\nNo, they won't, because INN ignores hostnames that do not contain a period for the purposes of generating external identifiers, specifically to keep from using things like localhost or other unqualified names that aren't globally unique.",
    "Relying on hostnames either with or without periods for uniqueness is both broken and unnecessary."]},
{user: "Russ Allbery", timestamp: '2005/10/06 21:31:15', url: 'http://lists.debian.org/debian-devel/2005/10/msg00267.html', ps:
    ["bq(with-author).. John Hasler"
    + "\n\nRelying on hostnames either with or without periods for uniqueness is both broken and unnecessary.",
    "Would you like to propose an alternate approach that satisfies all of the constraints that INN is operating under?  Presumably, given that you feel capable of expressing this strong of an opinion, you already know what all of those constraints are and are already familiar with the issues."]},
{user: "Gabor Gombas", timestamp: '2005/10/07 12:02:13', url: 'http://lists.debian.org/debian-devel/2005/10/msg00309.html', ps:
    ["bq(with-author).. Russ Allbery"
    + "\n\nNo, they won't, because INN ignores hostnames that do not contain a period for the purposes of generating external identifiers, specifically to keep from using things like localhost or other unqualified names that aren't globally unique.  Adding the pointless .localdomain thing breaks that sort of simple sanity check.",
    "Hmm, how would INN react if it sees a \"normal-looking\" name (like foo.bar.com) that in turn resolves to 127.0.0.1? It's been a long time since I last run a news server and I used Diablo instead of INN so I'm not familiar with INN's internals. But it seems INN is relying on a broken heuristics..."]},
{user: "Russ Allbery", timestamp: '2005/10/07 18:18:57', url: 'http://lists.debian.org/debian-devel/2005/10/msg00326.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\nHmm, how would INN react if it sees a \"normal-looking\" name (like foo.bar.com) that in turn resolves to 127.0.0.1? It's been a long time since I last run a news server and I used Diablo instead of INN so I'm not familiar with INN's internals. But it seems INN is relying on a broken heuristics...",
    "INN applies the following heuristic to determine the Path header and the hostname for the message ID if not otherwise configured:",
     "* Obtain the system host name with gethostname()."
     + "\n* Look up an IP address for that host with gethostbyname()."
     + "\n* Look up the names associated with that address with gethostbyaddr()."
     + "\n* Walk the alias list of the result and find the first name containing a period.",
    "A simple line of:",
    "pre. 127.0.0.1  localhost localhost.localdomain",
    "by itself doesn't cause problems.  It does, however, make it much easier for a common misconfiguration to result.  That misconfiguration happens when users put the unqualified local hostname on the 127.0.0.1 line (a configuration that follows an old mistaken but common Unix practice, putting the unqualified hostname on every line of /etc/hosts).  Then, the above algorithm ends up returning localhost.localdomain rather than the actual system hostname if the standard practice of listing 127.0.0.1 first is followed.",
    "A user misconfiguration is needed *on top of* localhost.localdomain for this to be a problem, but that misconfiguration is not uncommon and (most tellingly) having localhost.localdomain there solves *no* actual real-world problems.  It's just a time bomb.",
    "You can see from the above that if the user puts their complete hostname on 127.0.0.1, INN does just fine *provided* that localhost.localdomain isn't listed before it.  It also does fine if the user explicitly configures this part of INN, but as with most software, it's best to figure out reasonable defaults where possible.  This code has worked reasonably well for 13 years, except on systems with localhost.localdomain and this misconfiguration.",
    "We could special-case localhost.localdomain, but why?  What purpose does it serve to have that name in /etc/hosts?"]},
{user: "Gabor Gombas", timestamp: '2005/10/20 13:56:47', url: 'http://lists.debian.org/debian-devel/2005/10/msg00756.html', ps:
    ["bq(with-author).. Russ Allbery"
    + "\n\n* Obtain the system host name with gethostname()."
    + "\n* Look up an IP address for that host with gethostbyname().",
    "The bug is here. This is completely wrong but sadly very common practice. It is common because it is portable and works with some simple configurations (namely, single-homed machines with static IP address).",
    "bq(with-author).. Russ Allbery"
    + "\n\n* Look up the names associated with that address with gethostbyaddr()."
    + "\n* Walk the alias list of the result and find the first name containing a period.",
    "The proper fix would be to enumerate all IP addresses of all network interfaces and select one that has an appropriate name. Unfortunately this is non-trivial and highly OS-dependent, although the libdumbnet1 package provides a platform-independent API for this (among other things)."]},
{user: "Olaf van der Spek", timestamp: '2005/10/20 14:16:40', url: 'http://lists.debian.org/debian-devel/2005/10/msg00759.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\nThe proper fix would be to enumerate all IP addresses of all network interfaces and select one that has an appropriate name. Unfortunately this is non-trivial and highly OS-dependent, although the libdumbnet1 package provides a platform-independent API for this (among other things).",
    "Wouldn't the proper fix be to not use source address based authentication?"]},
{user: "Gabor Gombas", timestamp: '2005/10/20 14:26:25', url: 'http://lists.debian.org/debian-devel/2005/10/msg00760.html', ps:
    ["bq(with-author).. Olaf van der Spek"
    + "\n\nWouldn't the proper fix be to not use source address based authentication?",
    "This is not authentication. INN just need a string to uniquely identify a host. Using a FQDN is OK, it's just the way of obtaining that FQDN that is problematic."]},
{user: "Olaf van der Spek", timestamp: '2005/10/20 14:29:40', url: 'http://lists.debian.org/debian-devel/2005/10/msg00761.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nThis is not authentication. INN just need a string to uniquely identify a host. Using a FQDN is OK, it's just the way of obtaining that FQDN that is problematic.",
    "p(non-relevant). Ah, I was thinking about the MySQL case."]},
{user: "Russ Allbery", timestamp: '2005/11/01 05:49:26', url: 'http://lists.debian.org/debian-devel/2005/10/msg01242.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\nThe bug is here. This is completely wrong but sadly very common practice. It is common because it is portable and works with some simple configurations (namely, single-homed machines with static IP address).",
    "Well, I don't really agree with the statement that it's completely wrong, but I do understand what you're saying about the semantic mismatch at work here.",
    "bq(with-author).. Gabor Gombas"
    + "\n\nThe proper fix would be to enumerate all IP addresses of all network interfaces and select one that has an appropriate name. Unfortunately this is non-trivial and highly OS-dependent, although the libdumbnet1 package provides a platform-independent API for this (among other things).",
    "You've pretty much covered in that paragraph the reasons why INN can't take that approach.  :)  I know how hard this is from watching MIT Kerberos try to solve this problem and don't want to touch this portability nightmare with a ten-foot pole."]},
{user: "Christoph Haas", timestamp: '2005/10/07 14:15:18', url: 'http://lists.debian.org/debian-devel/2005/10/msg00317.html', ps:
    ["bq(with-author non-relevant).. Marco d'Itri"
    + "\n\nPlease explain which troubles.",
    "p(non-relevant). Mine with MySQL. And the reason why I initiated this thread. :)",
    "p(non-relevant). MySQL definitely chokes on localhost.localdomain. And although MySQL will adopt to distributions using \"localhost.localdomain\" instead of \"localhost\" doesn't mean it's correct. MySQL by default expects \"localhost\" as the hostname assigned to the loopback interface. And there is difference between \"localhost\" (special meaning) and \"localhost.localdomain\" (some hostname) for MySQL.",
    "p(non-relevant). \"RedHat does it\" isn't a good argument for me either. Inheriting unneeded entries should be thought about. I don't think it's the right way to expect all the software to add hacks to detect \"localhost.localdomain\".",
    "p(non-relevant). So still I'm removing the localhost.localdomain after every installation.  Somehow I'm not happy about it.",
    "p(non-relevant). Apparently this discussion has been done a year ago already and nothing resulted from it. I hope we are getting somewhere this time. "]},
{user: "Joey Hess", timestamp: '2005/10/08 22:17:17', url: 'http://lists.debian.org/debian-devel/2005/10/msg00350.html', ps:
    ["bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nThe only reason I find is that RedHat use it. But RedHat shouldn't be debians requirement of quality. It should be other way around. RedHat is such a buggy distribution. And it gets more and more worse every upgrade.",
    "bq(with-author non-relevant).. Klaus Ethgen"
    + "\n\nBut why changing \"localhost\" to \"localhost.localdomain\" only for the reason that RedHat doing it? ",
    "bq(with-author non-relevant).. Christoph Haas"
    + "\n\n\"RedHat does it\" isn't a good argument for me either.",
    "p(non-relevant). I'd just like to point out that the whole idea that this was somehow influenced by Red Hat is a red er, herring. d-i is a thouroguhly NIH enterprise, we obviously don't follow the lead of Red Hat.",
    "p(non-relevant). In the future, please try to limit your posts to those that contain provable facts.jk"]},
{user: "Gabor Gombas", timestamp: '2005/10/20 14:01:15', url: 'http://lists.debian.org/debian-devel/2005/10/msg00757.html', ps:
    ["bq(with-author non-relevant).. Christoph Haas"
    + "\n\nMySQL definitely chokes on localhost.localdomain. And although MySQL will adopt to distributions using \"localhost.localdomain\" instead of \"localhost\" doesn't mean it's correct. MySQL by default expects \"localhost\" as the hostname assigned to the loopback interface.",
    "p(non-relevant). No, MySQL is happy to use whatever name the loopback interface has; it is the MySQL _documentation_ that stresses the \"localhost\" string without mentioning that it depends on the naming service configuration.",
    "p(non-relevant). So the bug is that the documentation does not describe what the code really does; you have to fix one or the other. Upstream went with modifying the code rather than the documentation, and I agree with them."]},
{user: "Christoph Haas", timestamp: '2005/10/20 14:58:52', url: 'http://lists.debian.org/debian-devel/2005/10/msg00763.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nNo, MySQL is happy to use whatever name the loopback interface has; it is the MySQL _documentation_ that stresses the \"localhost\" string without mentioning that it depends on the naming service configuration.",
    "p(non-relevant). Thanks for the clarification. Since I didn't feel like reading the source code of MySQL I relied on its documentation. And it was a bit confusing (not only to me). So MySQL is happy with whatever name is bound to the lo interface. Good to know."]},
{user: "Klaus Ethgen", timestamp: '2005/10/20 15:01:12', url: 'http://lists.debian.org/debian-devel/2005/10/msg00764.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\nNo, MySQL is happy to use whatever name the loopback interface has; it is the MySQL _documentation_ that stresses the \"localhost\" string without mentioning that it depends on the naming service configuration.",
    "Thats not completely true. MySQL use the name \"localhost\" to select a other connection methode (socket). If you use the ip or localhost.localdomain it tries to connect bei network which is much slower."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 15:24:12', url: 'http://lists.debian.org/debian-devel/2005/10/msg00231.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nIIRC The main reason was described in \"#247734\":http://tinyurl.com/2an2ujy",
    "p(non-relevant). ARGH!",
    "p(non-relevant). If that bug was the reason why the localhost entry in /etc/hosts was changed, then please fix it right back to what it was.",
    "p(non-relevant). The localhost.localdomain stuff appeared from nowhere in an email by Pierre Machard during the discursion, and stayed on all other examples while people tried to fix an issue (which has a fucking old proper solution, which is to use another loopback IP and if needed, another lo alias) that had nothing to do with it.",
    "p(non-relevant). Pierre, WHY do you need localhost.localdomain? That is NOT clear in the bug report.  And the rest of the bug report is about another issue completely, dealing with people not being able to grasp the idea that if you need a canonical hostname other than localhost, you need another interface (which can be \"lo\" just as well, but give it another IP)."]},
{user: "Pierre Machard", timestamp: '2005/10/06 17:44:42', url: 'http://lists.debian.org/debian-devel/2005/10/msg00242.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nARGH!"
    + "\n\nIf that bug was the reason why the localhost entry in /etc/hosts was changed, then please fix it right back to what it was."
    + "\n\nThe localhost.localdomain stuff appeared from nowhere in an email by Pierre Machard during the discursion, and stayed on all other examples while people tried to fix an issue (which has a fucking old proper solution, which is to use another loopback IP and if needed, another lo alias) that had nothing to do with it.",
    "p(non-relevant). I can not remember precisely. I think that at that time I was testing the debian-installer and I saw it was taken a long while to boot. I saw that my system had no FQDN (hostname -f). When you add .localdomain, the FQDN is complete and it helps to solve timeout in several application.",
    "p(non-relevant). Anyway I do not understand why this issue is a problem since we simply add an alias to localhost. Nobody say  that we will remove localhost and exchange it by localhost.localdomain."]},
{user: "Gabor Gombas", timestamp: '2005/10/06 18:18:36', url: 'http://lists.debian.org/debian-devel/2005/10/msg00247.html', ps:
    ["bq(with-author).. Pierre Machard"
    + "\n\nI can not remember precisely. I think that at that time I was testing the debian-installer and I saw it was taken a long while to boot. I saw that my system had no FQDN (hostname -f). When you add .localdomain, the FQDN is complete and it helps to solve timeout in several application.",
    "p(relevant). So it was just papering over a real bug, namely the existence of the \"-f\" option of hostname. \"hostname -f\" assumes that the hostname (as returned by gethostname(3)) has something to do with networking, which is false. It also assumes that the system has just one IP address with one FQDN which is also false.",
    "p(relevant). This is a perfect example of a long-standing assumption that was wrong from the start but tended to work in the past when the wast majority of computers had really just one network interface with one IP address, and the few machines having multiple NICs/multiple IP addresses had good sysadmins who could deal with the breakage caused by this assumption.",
    "p(relevant). Nowadays even desktop boards start to come with multiple NICs on-board so this \"one IP - one FQDN\" assumption must be stopped. \"hostname -f\" must be killed, and everything that uses it must be fixed. Well, it may take some time to sort out all the details, there are a _lot_ of broken programs out there...",
    "bq(with-author).. Pierre Machard"
    + "\n\nAnyway I do not understand why this issue is a problem since we simply add an alias to localhost. Nobody say  that we will remove localhost and exchange it by localhost.localdomain.",
    "Broken software compares reverse_lookup({127.0.0.1}) with the string \"localhost\" and is surprised when it gets FALSE due to the reverse lookup returning \"localhost.localdomain\" instead of just \"localhost\"."]},
{user: "Bernd Eckenfels", timestamp: '2005/10/07 02:45:24', url: 'http://lists.debian.org/debian-devel/2005/10/msg00282.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nSo it was just papering over a real bug, namely the existence of the \"-f\" option of hostname. \"hostname -f\" assumes that the hostname (as returned by gethostname(3)) has something to do with networking, which is false. It also assumes that the system has just one IP address with one FQDN which is also false.",
    "p(non-relevant). Those asumptions are not false, they are what they are: asumptions. If you dont want to configure your system that way, just dont use it."]},
{user: "Gabor Gombas", timestamp: '2005/10/07 12:04:44', url: 'http://lists.debian.org/debian-devel/2005/10/msg00310.html', ps:
    ["bq(with-author).. Bernd Eckenfels"
    + "\n\nThose asumptions are not false, they are what they are: asumptions. If you dont want to configure your system that way, just dont use it.",
    "That is what I say: every Debian package that uses \"hostname -f\" is bogus, because it relies on a certain system configuration."]},
{user: "Bernd Eckenfels", timestamp: '2005/10/07 17:54:47', url: 'http://lists.debian.org/debian-devel/2005/10/msg00325.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nThat is what I say: every Debian package that uses \"hostname -f\" is bogus, because it relies on a certain system configuration.",
    "p(non-relevant). Umm, I guess all debian packages relies on certain configurations."]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 18:23:45', url: 'http://lists.debian.org/debian-devel/2005/10/msg00248.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nAnyway I do not understand why this issue is a problem since we",
    "p(non-relevant). Because instead of doing this:",
    "pre(non-relevant). 127.0.0.1 localost localhost.localdomain",
    "p(non-relevant). It was done like this:",
    "pre(non-relevant). 127.0.0.1 localhost.localdomain localhost",
    "p(non-relevant). Thus changing the canonical name of the loopback interface.  PLEASE do not do this unless you have *extremely* good reasons to do so.  An untracked DNS timeout is definately not one.  If you can still reproduce the problem, we can work on tracking that thing down without the localhost.localdomain.",
    "p(non-relevant). Add a new loopback interface (say, 127.0.0.2) and name it however you want.  That will not break anything at all, and it allows you to name your system in whatever way you might want.  This is what d-i should be doing, it is the maximum compatibility path.",
    "p(non-relevant). You don't even need to add a new interface if you use iproute instead of outdated ifconfig crap, and you might get away without even that much (but I wouldn't try it, I don't think trying to bind a socket to an IP that is not local (even if it pings because of lo and the /8 netmask) is a very safe thing to do)."]},
{user: "Marco d'Itri", timestamp: '2005/10/06 18:26:48', url: 'http://lists.debian.org/debian-devel/2005/10/msg00250.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nBecause instead of doing this:"
    + "\n\n127.0.0.1 localost localhost.localdomain"
    + "\n\nIt was done like this:"
    + "\n\n127.0.0.1 localhost.localdomain localhost"
    + "\n\nThus changing the canonical name of the loopback interface.  PLEASE do not do this unless you have *extremely* good reasons to do so.  An untracked DNS",
    "p(non-relevant). Agreed.",
    "p(relevant). Another point is that it would be bad to have 127.0.0.1 resolve differently in /etc/hosts and DNS (we ship a 127.in-addr.arpa zone)."]},
{user: "Pierre Machard", timestamp: '2005/10/06 18:55:13', url: 'http://lists.debian.org/debian-devel/2005/10/msg00251.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nBecause instead of doing this:"
    + "\n\n127.0.0.1 localost localhost.localdomain"
    + "\n\nIt was done like this:"
    + "\n\n127.0.0.1 localhost.localdomain localhost"
    + "\n\nThus changing the canonical name of the loopback interface.  PLEASE do not do this unless you have *extremely* good reasons to do so.  An untracked DNS timeout is definately not one.  If you can still reproduce the problem, we can work on tracking that thing down without the localhost.localdomain.",
    "p(non-relevant). The fact is that nobody complained about that... and my bug was repported more than one year and a half ago. Plus It was disscussed on debian-devel. Please do not argue with me!",
    "p(non-relevant). I do not pretend that I know anything in name resolution, however I proposed something that worked on my system. It was widely discussed. I joined this current thread to show people who do not read -devel every day that we have already talk about it. Nothing more, nothing less.",
    "p(non-relevant). Please have a look at \"Subject: /etc/hosts: Two lines with the same IP address?\":http://lists.debian.org/debian-devel/2004/06/thrd2.html by Thomas Hood"]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 19:56:05', url: 'http://lists.debian.org/debian-devel/2005/10/msg00256.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nThe fact is that nobody complained about that... and my bug was",
    "p(non-relevant). Now we are :)",
    "bq(with-author non-relevant).. Pierre Machard"
    + "\n\nrepported more than one year and a half ago. Plus It was disscussed on debian-devel. Please do not argue with me!",
    "p(non-relevant). It is nothing personal... it is just that your email was the first one mentioning the .localdomain thing, I wanted to know why you needed it.",
    "p(non-relevant). Heck, I had never noticed that all my new sarge installs had this broken thing in them (but now I will have to quadruple-check mysql to make sure it is not doing something idiotic behind my back.  I am pleasantly surprised that it did not go up in flames, so maybe they fixed their localhost braindamage).",
    "bq(with-author non-relevant).. Pierre Machard"
    + "\n\nproposed something that worked on my system. It was widely discussed. I joined this current thread to show people who do not read -devel every day that we have already talk about it. Nothing more, nothing less.",
    "p(non-relevant). It was useful, at least now we know the history of the change, and thus we can deal better with it.  Thanks.",
    "bq(with-author non-relevant).. Pierre Machard"
    + "\n\nPlease have a look at \"Subject: /etc/hosts: Two lines with the same IP address?\":http://lists.debian.org/debian-devel/2004/06/thrd2.html by Thomas Hood",
    "p(non-relevant). With a subject line like that, I certain would never expect it to be related to 127.0.0.1 canonical naming... no wonder I never noticed the thread."]},
{user: "Joey Hess", timestamp: '2005/10/06 19:05:17', url: 'http://lists.debian.org/debian-devel/2005/10/msg00254.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nBecause instead of doing this:"
    + "\n\n127.0.0.1 localost localhost.localdomain"
    + "\n\nIt was done like this:"
    + "\n\n127.0.0.1 localhost.localdomain localhost"
    + "\n\nThus changing the canonical name of the loopback interface.  PLEASE do not do this unless you have *extremely* good reasons to do so.  An untracked DNS timeout is definately not one.  If you can still reproduce the problem, we can work on tracking that thing down without the localhost.localdomain.",
    "p(non-relevant). FWIW, it was done as a result of bug \"#247734\":http://tinyurl.com/2an2ujy, which includes details on how every possible choice seems to break something and the reasoning that led to the current choice."
    + "\n\nbq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nAdd a new loopback interface (say, 127.0.0.2) and name it however you want.  That will not break anything at all, and it allows you to name your system in whatever way you might want.  This is what d-i should be doing, it is the maximum compatibility path."
    + "\n\np(non-relevant). Already done:"
    + "\n\np(non-relevant). netcfg (1.13) unstable; urgency=low"
    + "\n\np(non-relevant). [ Thomas Hood ]"
    + "\n\n*(non-relevant) If there is no permanent IP address with which the system hostname (i.e., that which is returned by the \"hostname\" command) can be associated in /etc/hosts then associate it with address 127.0.1.1 rather than 127.0.0.1.  Associating the system hostname with the latter had the unwanted effect of making 'localhost.localdomain' the canonical hostname associated with the system hostname.  That is, 'hostname --fqdn' returned 'localhost.localdomain'."
    + "\n\np(non-relevant). (Closes: #316099)"
    + "\n\np(non-relevant). Programs that access local services at the IP address obtained by resolving the system hostname SHOULD NOT DO THIS, but those that do so will not be disappointed: most services that listen locally listen on all 127/8 addresses, not just on 127.0.0.1."
    + "\n\np(non-relevant). -- Frans Pop <fjp@debian.org>  Fri, 19 Aug 2005 21:08:39 +0200"]},
{user: "Henrique de Moraes Holschuh", timestamp: '2005/10/06 20:02:55', url: 'http://lists.debian.org/debian-devel/2005/10/msg00257.html', ps:
    ["bq(with-author non-relevant).. Joey Hess"
    + "\n\nFWIW, it was done as a result of bug \"#247734\":http://tinyurl.com/2an2ujy, which includes details on how every possible choice seems to break something and the reasoning that led to the current choice.",
    "p(non-relevant). I read that bug report VERY carefully. Twice. There is *nothing* there that seems to have been fixed/addressed by .localdomain, except maybe a DNS timeout in Pierre's machine.  Everything else deals with the hostname.",
    "p(non-relevant). Or am I getting confused and d-i uses localhost.localdomain as the default hostname, and say, if I had told it that my machine is named \"twerk\", domain \"foo.bar\" I would get a",
    "pre(non-relevant). 127.0.0.1 twerk.foo.bar twerk localhost",
    "p(non-relevant). entry in /etc/hosts?",
    "p(non-relevant). That would explain a lot...  but still make such a \"fix\" quite a bad idea.",
    "bq(with-author non-relevant).. Joey Hess"
    + "\n\nPrograms that access local services at the IP address obtained by resolving the system hostname SHOULD NOT DO THIS, but those that do so will not be disappointed: most services that listen locally listen on all 127/8 addresses, not just on 127.0.0.1.",
    "p(non-relevant). This could cause trouble that is easily avoided by actually adding an extra loopback address to lo (or a lo:1 alias if you have to use ifconfig) of 127.0.1.1.  This is harmless and could be added statically and unconditionally to /etc/network/interfaces."]},
{user: "Mark Brown", timestamp: '2005/10/06 20:46:42', url: 'http://lists.debian.org/debian-devel/2005/10/msg00262.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nOr am I getting confused and d-i uses localhost.localdomain as the default hostname, and say, if I had told it that my machine is named \"twerk\", domain \"foo.bar\" I would get a"
    + "\n\n127.0.0.1 twerk.foo.bar twerk localhost"
    + "\n\nentry in /etc/hosts?"
    + "\n\nThat would explain a lot...  but still make such a \"fix\" quite a bad idea.",
    "p(non-relevant). There was certainly a problem at one point where attempting to cannoicalise the hostname of a freshly installed system would result in a localhost address.  That was fixed prior to the sarge release and IIRC the localhost.localdomain thing was already there before this was fixed, though I've not checked."]},
{user: "Wesley J. Landaker", timestamp: '2005/10/06 23:39:04', url: 'http://lists.debian.org/debian-devel/2005/10/msg00270.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nI read that bug report VERY carefully. Twice. There is *nothing* there that seems to have been fixed/addressed by .localdomain, except maybe a DNS timeout in Pierre's machine.  Everything else deals with the hostname.",
    "p(non-relevant). FWIW, I completely agree with Henrique here (and pretty much in all past messages in this thread)--I also read that bug report VERY carefully, and I do not see how adding .localdomain had anything to do with the resolution of that bug.",
    "p(non-relevant). I believe that localhost.localdomain should be removed, as it is both unnecessary and arbitrary.",
    "bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nOr am I getting confused and d-i uses localhost.localdomain as the default hostname, and say, if I had told it that my machine is named \"twerk\", domain \"foo.bar\" I would get a"
    + "\n\n127.0.0.1 twerk.foo.bar twerk localhost"
    + "\n\nentry in /etc/hosts?"
    + "\n\nThat would explain a lot...  but still make such a \"fix\" quite a bad idea.",
    "p(non-relevant). No, on all of my sarge and sid machines the entry looked like:",
    "pre(non-relevant). 127.0.0.1 localhost.localdomain localhost foobar",
    "p(non-relevant). Where foobar was the name I gave during the install process."]},
{user: "Joey Hess", timestamp: '2005/10/08 22:53:28', url: 'http://lists.debian.org/debian-devel/2005/10/msg00352.html', ps:
    ["bq(with-author non-relevant).. Henrique de Moraes Holschuh"
    + "\n\nI read that bug report VERY carefully. Twice. There is *nothing* there that seems to have been fixed/addressed by .localdomain, except maybe a DNS timeout in Pierre's machine.  Everything else deals with the hostname.",
    "p(non-relevant). I don't have the stamina that you do, so I've only read random bits of it a half-dozen times. The localhost.localdomain does seems to kind of appear out of the blue half way through and looks very likely to have been glommed in with the rest of the changes by mistake. It's hard to tell looking back at the history.",
    "p(non-relevant). Anyway, please bear in mind that it's very easy for me to go in and change this line of code:",
    "pre(non-relevant). fprintf(fp, \"127.0.0.1\\tlocalhost.localdomain\\tlocalhost\\n\");",
    "p(non-relevant). To this:",
    "pre(non-relevant). fprintf(fp, \"127.0.0.1\\tlocalhost\\n\");",
    "p(non-relevant). But it's then very hard to see if this breaks anything. After all, the relevant change was made in netcfg in July of 2004. For an entire year, it was in every system installed, and nobody complained, although a few of us noticed it and thought it looked a bit strange. Debian released and for months after the release nobody apparently saw fit to complain or report any problems until this thread.",
    "p(non-relevant). If I make any changes, I don't want to have them pop up and result in another thread like this[1] in 1.5 years time when we're trying to release, or have just released, etch. Also, I don't pretend to be any kind of expert on the absurdly fragile and unintuitive behavior the system exhibits with different flavours of localhost entry in the /etc/hosts file. I'm just a guy who happens to know where the code is and how to change if it I get a clear explanation of why it's broken and why a given change is thuroughly correct.",
    "p(non-relevant). So far, this thread has not yeilded anything I can trust to that degree.",
    "p(non-relevant). Of course this change doesn't have to go through me. Joshua Kwan has maintained netcfg in less busy times in his life. Thomas Hood comes as close as any developer does to \"owning\" Debian's local resolver setup.  Pulling them into a discussion about this would be a very productive thing to do. They'd probably be a lot more willing to look at the issues in depth and quickly make an appropriate change.",
    "Oh yeah, I should point out that I've been seeing various programs in Debian not properly work with various /etc/hosts settings for at least ten years. I belive that the typical thing a sysadmin does when their current /etc/hosts setting breaks some program is to change it to somerthing else, wait for the next thing to break, and ignore the problem otherwise. So I don't think this is necessarily really a new problem, and I don't know that there is actually a fix that fixes all the problems, and I understand why we don't seem to get any feedback evne if it's broken. :-/"]},
{user: "Christoph Haas", timestamp: '2005/10/09 18:29:46', url: 'http://lists.debian.org/debian-devel/2005/10/msg00381.html', ps:
    ["bq(with-author).. Joey Hess"
    + "\n\nBut it's then very hard to see if this breaks anything. After all, the relevant change was made in netcfg in July of 2004. For an entire year, it was in every system installed, and nobody complained, although a few of us noticed it and thought it looked a bit strange.",
    "I had this problem since then because I use MySQL very intensively. But I just didn't ask here. That doesn't mean that I made this up. Sometimes bugs are reported long times after they appeared. The complaint is not about the \"strange looks\" but about interoperation problems.",
    "bq(with-author).. Joey Hess"
    + "\n\nIf I make any changes, I don't want to have them pop up and result in another thread like this[1] in 1.5 years time when we're trying to release, or have just released, etch.",
    "It is surely difficult to just remove it since newer applications may rely on it. But shouldn't we better announce that intended change to debian-devel-announce and ask for feedback if it breaks someone else's work?  Similar to library transitions.",
    "bq(with-author non-relevant).. Joey Hess"
    + "\n\nSo far, this thread has not yeilded anything I can trust to that degree.",
    "p(non-relevant). IIRC it yielded the fact that localhost.localdomain is has been added to fix applications without being aware that it may break other applications. That's a lot more than the first postings saying \"you are inventing things\", \"it's a known bug for MySQL\" or \"use localhost.localdomain in MySQL then\" which all weren't satisfying.",
    "bq(with-author non-relevant).. Joey Hess"
    + "\n\n[1] Especially not given the quantity of whining, hot air, uninformed comments, stupid comparisons to red hat, etc that have made portions of this thread such a positive joy to read.",
    "p(non-relevant). Why so rude? I asked for comments on the \"why\"s. And all we had were assumptions since nobody knew for sure. And even we now know how that entry appeared we can't figure out why it went there and if it's safe to remove it.  I would stop emitting \"hot air\" if it wouldn't break other applications. But it does. And this is not my workplace where my boss tells me \"it has always been like that\". Let's change it."]},
{user: "Peter Samuelson", timestamp: '2005/10/10 07:31:00', url: 'http://lists.debian.org/debian-devel/2005/10/msg00393.html', ps:
    ["bq(with-author non-relevant).. Christoph Haas"
    + "\n\nIIRC it yielded the fact that localhost.localdomain is has been added to fix applications",
    "p(non-relevant). Not that I've noticed.  Maybe I just missed it, but *what* applications or *what* problems does .localdomain fix?  I don't remember hearing so far that it does anything positive at all.",
    "p(non-relevant). If anybody knows anything at all about a problem .localdomain solves, I would love to hear about it.  Never mind the alleged applications that break, I'm more interested in whether there are even two sides to this story in the first place."]},
{user: "Thomas Hood", timestamp: '2005/10/13 14:02:15', url: 'http://lists.debian.org/debian-devel/2005/10/msg00554.html', ps:
    ["The change from 'localhost' to 'localhost.localdomain' was made in svn revision 16759.  The Debian changelog entry added at that time refers to bug report \"#247734\":http://tinyurl.com/2an2ujy.  Looking at \"#247734\":http://tinyurl.com/2an2ujy I see that 'localhost.localdomain' appeared without anyone either supporting its inclusion or objecting to it.  This wasn't what the conversation was about.",
    "p(non-relevant). I see no reason not to revert the change.  If the presence of 'localhost.localdomain' causes trouble and if standard practice is to have 'localhost' only then I think that that is reason enough to revert.",
    "p(non-relevant). However, I think that applications should work properly whether /etc/hosts contains",
    "pre(non-relevant). 127.0.0.1 localhost.localdomain localhost",
    "p(non-relevant). or",
    "pre(non-relevant). 127.0.0.1 localhost",
    "p(non-relevant). especially considering the fact that the sarge installer writes /etc/hosts with the former."]},
{user: "Jeff Stevens", timestamp: '2005/10/13 19:35:11', url: 'http://lists.debian.org/debian-devel/2005/10/msg00559.html', ps:
    ["bq(with-author non-relevant).. Thomas Hood"
    + "\n\nThe change from 'localhost' to 'localhost.localdomain' was made in svn revision 16759.  The Debian changelog entry added at that time refers to bug report \"#247734\":http://tinyurl.com/2an2ujy.  Looking at \"#247734\":http://tinyurl.com/2an2ujy I see that 'localhost.localdomain' appeared without anyone either supporting its inclusion or objecting to it.  This wasn't what the conversation was about."
    + "\n\nI see no reason not to revert the change.  If the presence of 'localhost.localdomain' causes trouble and if standard practice is to have 'localhost' only then I think that that is reason enough to revert."
    + "\n\nHowever, I think that applications should work properly whether /etc/hosts contains"
    + "\n\n127.0.0.1 localhost.localdomain localhost"
    + "\n\nor"
    + "\n\n127.0.0.1 localhost"
    + "\n\nespecially considering the fact that the sarge installer writes /etc/hosts with the former.",
    "p(non-relevant). Others on this list have pointed out that some applications expect 127.0.0.1 to resolve to localhost.  When the resolver uses /etc/hosts, it returns the first host in the list and the others are considered aliases.  In the first example above, localhost.localdomain would be returned when resolving 127.0.0.1; this is because it is listed before localhost.  If /etc/hosts were changed to:",
    "pre(non-relevant). 127.0.0.1 localhost localhost.localdomain",
    "p(non-relevant). Resolution of 127.0.0.1 would properly return localhost.  ",
    "p(relevant). I've been unable to find any specific reference to a required structure of a hosts file nor any specific requirement that a resolver should resolve 127.0.0.1 to localhost.  However, consider the following two points:",
    "#(non-relevant) %(relevant)When configuring DNS, 127.0.0.1 must resolve to localhost and vice versa [1].  Configuring an /etc/hosts file that resolves 127.0.0.1 to localhost.localdomain is inconsistent.  On the same host, resolving 127.0.0.1 by gethostbyname() and running nslookup will return two different answers (provided nsswitch.conf is configured with \"files dns\").  [1] RFC 1912 - http://www.ietf.org/rfc/rfc1912.txt%"
    + "\n# Virtually all systems with a hosts file read something like this:",
    "pre(oli non-relevant). 127.0.0.1 localhost <alias> <another alias> <...>",
    "p(oli non-relevant). There is a long historical precedent for listing localhost first, followed by other aliases.  This results in the resolver properly returning localhost when resolving 127.0.0.1.",
    "p(non-relevant). In summary: (1) It's reasonable to expect DNS and file based resolution to function the same in regard to 127.0.0.1/localhost (proper DNS resolution of 127.0.0.1 is documented in RFC 1912).  (2) There is a long historical precedent for localhost preceding all aliases of 127.0.0.1 in a hosts file."]},
{user: "Peter Samuelson", timestamp: '2005/10/14 08:25:53', url: 'http://lists.debian.org/debian-devel/2005/10/msg00569.html', ps:
    ["bq(with-author non-relevant).. Jeff Stevens"
    + "\n\nIf /etc/hosts were changed to:"
    + "\n\n127.0.0.1 localhost localhost.localdomain"
    + "\n\nResolution of 127.0.0.1 would properly return localhost.  ",
    "p(non-relevant). Yeah, but that's all beside the point.  There is no point in swapping the order of the two names unless there be any point in having \"localhost.localdomain\" in there at all.",
    "p(non-relevant). So far, I haven't heard any reason.",
    "p(non-relevant). In other words, rather than say \"here is how we could change the hosts file so that localhost.localdomain does not cause buggy apps to break\", we are (or should be) asking \"why should localhost.localdomain be in there at all?\"",
    "bq(with-author non-relevant).. Jeff Stevens"
    + "\n\n2. Virtually all systems with a hosts file read something like this:"
    + "\n\n127.0.0.1 localhost <alias> <another alias> <...>"
    + "\n\nThere is a long historical precedent for listing localhost first,",
    "p(non-relevant). Well, that's not quite true.  %(neutral)As someone else pointed out earlier, AIX lists \"loopback localhost\".  (He said AIX 5.1 or 5.2, but I first noticed it in 4.1.)  I always thought it was kind of strange and nonstandard ... but on the other hand, most everything in AIX is kind of strange and nonstandard.%"]},
{user: "Gabor Gombas", timestamp: '2005/10/20 14:30:12', url: 'http://lists.debian.org/debian-devel/2005/10/msg00762.html', ps:
    ["bq(with-author non-relevant).. Peter Samuelson"
    + "\n\nWell, that's not quite true.  As someone else pointed out earlier, AIX lists \"loopback localhost\".",
    "p(non-relevant). On a fresh OpenBSD 3.7 install:",
    "pre(non-relevant). ::1 localhost.home localhost"
    + "\n127.0.0.1 localhost.home localhost",
    "p(non-relevant). (\"home\" is the domain used on my vmware intranet). So \"localhost\" is not the first alias here either."]},
{user: "Miles Bader", timestamp: '2005/10/21 01:18:19', url: 'http://lists.debian.org/debian-devel/2005/10/msg00780.html', ps:
    ["bq(with-author).. Gabor Gombas"
    + "\n\nOn a fresh OpenBSD 3.7 install:"
    + "\n\n::1 localhost.home localhost"
    + "\n127.0.0.1 localhost.home localhost",
    "Heh, I'm just surprised it's not:",
    "pre. 127.0.0.1 OpenLocalHOST localhost"]},
{user: "Thomas Hood", timestamp: '2005/10/14 08:47:51', url: 'http://lists.debian.org/debian-devel/2005/10/msg00572.html', ps:
    ["p(relevant). OK, I have modified netcfg so that it writes",
    "pre(relevant). 127.0.0.1   localhost",
    "p(relevant). to /etc/hosts.",
    "p(relevant). From now on let's consider at least the following two phenomena to be bugs:",
    "*(relevant) The application expects to be able to resolve 'localhost.localdomain' to an IP address."
    + "\n* The application breaks if 'localhost.localdomain' is included on the 127.0.0.1 line in /etc/hosts."]},
{user: "Wesley J. Landaker", timestamp: '2005/10/14 14:08:23', url: 'http://lists.debian.org/debian-devel/2005/10/msg00579.html', ps:
    ["bq(with-author non-relevant).. Thomas Hood"
    + "\n\nOK, I have modified netcfg so that it writes"
    + "\n\n127.0.0.1 localhost"
    + "\n\nto /etc/hosts.",
    "p(non-relevant). Thank you! Yay for purging ugly non-standardness! =)",
    "bq(with-author non-relevant).. Thomas Hood"
    + "\n\nFrom now on let's consider at least the following two phenomena to be bugs:"
    + "\n\n* The application expects to be able to resolve 'localhost.localdomain' to an IP address."
    + "\n* The application breaks if 'localhost.localdomain' is included on the 127.0.0.1 line in /etc/hosts.",
    "p(non-relevant). Yes, I totally agree here. =)"]},
{user: "Jeff Stevens", timestamp: '2005/10/14 17:14:28', url: 'http://lists.debian.org/debian-devel/2005/10/msg00587.html', ps:
    ["bq(with-author non-relevant).. Thomas Hood"
    + "\n\nOK, I have modified netcfg so that it writes"
    + "\n\n127.0.0.1 localhost"
    + "\n\nto /etc/hosts."
    + "\n\nFrom now on let's consider at least the following two phenomena to be bugs:"
    + "\n\n* The application expects to be able to resolve 'localhost.localdomain' to an IP address."
    + "\n* The application breaks if 'localhost.localdomain' is included on the 127.0.0.1 line in /etc/hosts.",
    "p(non-relevant). Fantastic!  Might I add that it is *not* a bug for an application to expect resolution of 127.0.0.1 to return localhost?  That is, localhost shall precede any other aliases in /etc/hosts.",
    "p(non-relevant). Again, thank you.  Attention to detail is quite important; in this case detail is the location and/or existence of a mere 21 bytes."]},
{user: "Christoph Haas", timestamp: '2005/10/14 17:34:25', url: 'http://lists.debian.org/debian-devel/2005/10/msg00588.html', ps:
    ["bq(with-author non-relevant).. Thomas Hood"
    + "\n\nOK, I have modified netcfg so that it writes"
    + "\n\n127.0.0.1 localhost"
    + "\n\nto /etc/hosts.",
    "p(non-relevant). Thank you very much. My fellow sysadmins will appreciate that.  And of course I'm very glad that after a lot of global warming the thread finally got somewhere. :)"]},
{user: "Stig Sandbeck Mathisen", timestamp: '2005/10/14 17:18:21', url: 'http://lists.debian.org/debian-devel/2005/10/msg00589.html', ps:
    ["bq(with-author non-relevant).. Thomas Hood"
    + "\n\nOK, I have modified netcfg so that it writes"
    + "\n\n127.0.0.1    localhost"
    + "\n\nto /etc/hosts.",
    "p(non-relevant). Excellent.  Thank you.  :)"]},
{user: "Gabor Gombas", timestamp: '2005/10/20 14:09:13', url: 'http://lists.debian.org/debian-devel/2005/10/msg00758.html', ps:
    ["bq(with-author).. Jeff Stevens"
    + "\n\n1. When configuring DNS, 127.0.0.1 must resolve to localhost and vice versa [1].",
    "No, the RFC does not say \"must\", it only says \"should\" (and it is not even a \"SHOULD\").",
    "p(non-relevant). An regardless if localhost.localdomain is removed from /etc/hosts or not, finding & fixing applications that choke on it is a good thing."]},
{user: "Bernd Eckenfels", timestamp: '2005/10/06 18:36:13', url: 'http://lists.debian.org/debian-devel/2005/10/msg00252.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nI can not remember precisely. I think that at that time I was testing the debian-installer and I saw it was taken a long while to boot. I saw that my system had no FQDN (hostname -f). When you add .localdomain, the FQDN is complete and it helps to solve timeout in several application.",
    "p(non-relevant). Nope, hostname is not responsible for this.",
    "p(non-relevant). Yes you need to configure the FQDN in hosts, but not with the 127.0.0.1 entry. And hostname should also never return this stupid dummy FQDN (however it does not avoid to do so).",
    "bq(with-author non-relevant).. Pierre Machard"
    + "\n\nAnyway I do not understand why this issue is a problem since we simply add an alias to localhost.",
    "p(non-relevant). The problem is that it is the _first_ alias."]},
{user: "Stig Sandbeck Mathisen", timestamp: '2005/10/07 05:21:12', url: 'http://lists.debian.org/debian-devel/2005/10/msg00284.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nAnyway I do not understand why this issue is a problem since we simply add an alias to localhost. Nobody say that we will remove localhost and exchange it by localhost.localdomain.",
    "p(non-relevant). If what you wanted to do was to add an alias, you should have read the documentation on how to add an alias without changing the canonical hostname for 127.0.0.1.  This documentation is available in hosts(5).",
    "bq(non-relevant).. This manual page describes the format of the /etc/hosts file.  This file is a simple text file that associates IP addresses with hostnames, one line per IP address. For each host a single line should be present with the following information:"
    + "\n\nIP_address canonical_hostname aliases",
    "Changing the canonical hostname changes the output of everything that resolves IP address, including \"lsof\" and \"netstat\".",
    "Any script or program dependent on this output need to be checked and possibly changed if it is to behave as it should.  This includes local scripts created by our users.",
    "p(relevant). It should also be consistent with bind9, and I do _not_ think that changing bind is the correct way to do things.",
    "pre(relevant).. "
    + "iostat:~# getent hosts 127.0.0.1"
    + "\n127.0.0.1       localhost.localdomain localhost iostat"
    + "\niostat:~# dig -x 127.0.0.1 @localhost"
    + "\n; <<>> DiG 9.2.4 <<>> -x 127.0.0.1 @localhost"
    + "\n;; global options:  printcmd"
    + "\n;; Got answer:"
    + "\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 11671"
    + "\n;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 1"
    + "\n"
    + "\n;; QUESTION SECTION:"
    + "\n;1.0.0.127.in-addr.arpa.                IN      PTR"
    + "\n"
    + "\n;; ANSWER SECTION:"
    + "\n1.0.0.127.in-addr.arpa. 604800  IN      PTR     localhost."
    + "\n"
    + "\n;; AUTHORITY SECTION:"
    + "\n127.in-addr.arpa.       604800  IN      NS      localhost."
    + "\n"
    + "\n;; ADDITIONAL SECTION:"
    + "\nlocalhost.              604800  IN      A       127.0.0.1"
    + "\n"
    + "\n;; Query time: 3 msec"
    + "\n;; SERVER: 127.0.0.1#53(localhost)"
    + "\n;; WHEN: Fri Oct  7 07:19:19 2005"
    + "\n;; MSG SIZE  rcvd: 93"]},
{user: "Christoph Haas", timestamp: '2005/10/07 14:26:30', url: 'http://lists.debian.org/debian-devel/2005/10/msg00318.html', ps:
    ["bq(with-author non-relevant).. Pierre Machard"
    + "\n\nI can not remember precisely. I think that at that time I was testing the debian-installer and I saw it was taken a long while to boot. I saw that my system had no FQDN (hostname -f). When you add .localdomain, the FQDN is complete and it helps to solve timeout in several application."
    + "\n\nAnyway I do not understand why this issue is a problem since we simply add an alias to localhost. Nobody say  that we will remove localhost and exchange it by localhost.localdomain.",
    "p(non-relevant). The problem is probably that the \"localhost.localdomain\" stands before \"localhost\" in that line. So if you \"reverse resolve\" 127.0.0.1 you end up with \"localhost.localdomain\" which some applications don't understand."]},
{user: "Jeff Stevens", timestamp: '2005/10/08 20:07:43', url: 'http://lists.debian.org/debian-devel/2005/10/msg00387.html', ps:
    ["bq(with-author non-relevant).. Christoph Haas"
    + "\n\nThe problem is probably that the \"localhost.localdomain\" stands before \"localhost\" in that line. So if you \"reverse resolve\" 127.0.0.1 you end up with \"localhost.localdomain\" which some applications don't understand.",
    "p(non-relevant). Christopher hits the nail on the head.  There are two separate issues:",
    "#(non-relevant) Is there a reason to have localhost.localdomain"
    + "\n# If there is localhost.localdomain should *not* precede localhost!",
    "p(non-relevant). I'm not going to comment on the former but the latter is a *BIG* deal.  The current Debian /etc/hosts file is flat out wrong.  When a call to gethostbyname(3) or gethostbyaddr(3) and an IPV4 address of 127.0.0.1 is supplied, it should return \"localhost\".  Provided resolv.conf is configured to use files and then dns, gethostbyname/gethostbyaddr is going to query /etc/hosts.  In /etc/hosts multiple hostnames can be assigned to a single address, but when resolving an address to a hostname, the *first* hostname in the list is returned by gethostbyname/gethostbyaddr.",
    "Every sane implementation of IP returns \"localhost\" when querying 127.0.0.1.  It doesn't matter if the implementation uses /etc/hosts, /etc/inet/hosts, /boot/beos/etc/hosts, or (*gulp*) c:\\winnt\\system32\\drivers\\etc\\hosts.",
    "p(non-relevant). Of course, other systems ship with a default hosts file containing something in addition to \"localhost\" that resolves to 127.0.0.1.  The issue with Debian is that \"localhost.localdomain\" comes *before* \"localhost\".  A call to gethostbyname() to resolve localhost returns a struct referring to 127.0.0.1.  A call to gethostbyname() to resolve 127.0.01 returns a struct referring to localhost.localdomain.  This is *wrong*.",
    "p(non-relevant). This has been mentioned before, but I'll say it again.  This is solely because the Debian /etc/hosts reads:",
    "pre(non-relevant). 127.0.0.1       localhost.localdomain localhost",
    "p(non-relevant). \"localhost.localdomain\" and \"localhost\" must be swapped.  The first entry in the list of hosts *must* be \"localhost\".",
    "p(non-relevant). Just as a sanity check, Solaris ships with:",
    "pre(non-relevant). 127.0.0.1   localhost loghost",
    "p(non-relevant). FreeBSD ships with:",
    "pre(non-relevant). 127.0.0.1       localhost localhost.my.domain myname.my.domain",
    "p(non-relevant). I don't have access to AIX, HPUX or other major Unices, but I bet in the hosts file, 127.0.0.1 is immediately followed by localhost -- and other aliases follow localhost.  \"localhost\" *must* be first."]},
{user: "Russ Allbery", timestamp: '2005/10/08 20:30:26', url: 'http://lists.debian.org/debian-devel/2005/10/msg00344.html', ps:
    ["bq(with-author non-relevant).. Jeff Stevens"
    + "\n\nI don't have access to AIX, HPUX or other major Unices, but I bet in the hosts file, 127.0.0.1 is immediately followed by localhost -- and other aliases follow localhost.  \"localhost\" *must* be first.",
    "pre(non-relevant). AIX 5.2:      127.0.0.1 loopback localhost"
    + "\nHP-UX 11.00:  127.0.0.1 localhost loopback"
    + "\nIRIX 6.5:     127.0.0.1 localhost"
    + "\nTru64 4.0G:   127.0.0.1 localhost"]},
{user: "Frans Pop", timestamp: '2005/10/08 21:04:09', url: 'http://lists.debian.org/debian-devel/2005/10/msg00347.html', ps:
    ["bq(with-author non-relevant).. Jeff Stevens"
    + "\n\n\"localhost.localdomain\" and \"localhost\" must be swapped.  The first entry in the list of hosts *must* be \"localhost\".",
    "p(non-relevant). You make quite a lot of noise it this mail, but I fail to find any real arguments. (Unless you consider saying \"this should be so\" or \"this is wrong\" an argument.)",
    "p(non-relevant). You give nice explanations how things work, but fail to say anywhere why having localhost.localdomain first is so wrong.  What breaks? What standards (with reference please) are not honored?  What alternative solutions do you propose for the problems that led up to it being included?"]},
{user: "Marco d'Itri", timestamp: '2005/10/08 22:58:23', url: 'http://lists.debian.org/debian-devel/2005/10/msg00353.html', ps:
    ["bq(with-author).. Frans Pop"
    + "\n\nYou give nice explanations how things work, but fail to say anywhere why having localhost.localdomain first is so wrong.  What breaks? What standards (with reference please) are not honored?",
    "p(relevant). An obvious problem is that gethostbyaddr and DNS queries will now return a different answer.",
    "bq(with-author non-relevant).. Frans Pop"
    + "\n\nWhat alternative solutions do you propose for the problems that led up to it being included?",
    "p(non-relevant). It has already been explained that a better solution with no side effects would be to add an alias like 127.1.0.1"]},
{user: "Steve Langasek", timestamp: '2005/10/09 04:20:04', url: 'http://lists.debian.org/debian-devel/2005/10/msg00365.html', ps:
    ["bq(with-author).. Frans Pop"
    + "\n\nYou make quite a lot of noise it this mail, but I fail to find any real arguments. (Unless you consider saying \"this should be so\" or \"this is wrong\" an argument.)"
    + "\n\nYou give nice explanations how things work, but fail to say anywhere why having localhost.localdomain first is so wrong.  What breaks? What standards (with reference please) are not honored?",
    "Well, even if Jeff didn't provide anything helpful in this regard, the thread does show at least two specific packages that break when using localhost.localdomain as the canonical name for 127.0.0.1: mysql, and inn.  Yes, it is appropriate to fix both of these applications to be more robust; however,",
    "bq(with-author non-relevant).. Frans Pop"
    + "\n\nWhat alternative solutions do you propose for the problems that led up to it being included?",
    "p(non-relevant). I can't actually see anything in the bug log to indicate that localhost.localdomain *does* solve any of the issues that were raised."]},
{user: "Jeff Stevens", timestamp: '2005/10/09 06:10:05', url: 'http://lists.debian.org/debian-devel/2005/10/msg00366.html', ps:
    ["bq(with-author non-relevant).. Frans Pop"
    + "\n\nYou make quite a lot of noise it this mail, but I fail to find any real arguments. (Unless you consider saying \"this should be so\" or \"this is wrong\" an argument.)"
    + "\n\nYou give nice explanations how things work, but fail to say anywhere why having localhost.localdomain first is so wrong.  What breaks? What standards (with reference please) are not honored?  What alternative solutions do you propose for the problems that led up to it being included?",
    "p(relevant). You are correct that there probably are not any documented standards requiring \"127.0.0.1\" to resolve to \"localhost\" except when DNS is used.  That is, if DNS is queried to resolve \"127.0.0.1\" it is expected to resolve to \"localhost\" -- nothing else.  I don't believe such a written standard exists for resolution through /etc/hosts.",
    "p(non-relevant). I'm simply trying to illustrate that there are years of precedent.  It has been safe to assume that a resolver will resolve \"127.0.0.1\" to \"localhost\" -- even if resolution is completed by using a hosts file.",
    "p(non-relevant). Taking into consideration:",
    "*(non-relevant) DNS is expected to resolve \"127.0.0.1\" to \"localhost\""
    + "\n* Applications expect resolution of \"127.0.0.1\" to \"localhost\""
    + "\n* Consistent cross vendor resolution of \"127.0.0.1\" to \"localhost\"",
    "p(non-relevant). There may not be a written standard but a de facto standard certainly exists."]},
{user: "Stig Sandbeck Mathisen", timestamp: '2005/10/07 05:10:07', url: 'http://lists.debian.org/debian-devel/2005/10/msg00283.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nOk, after a quick googling I found that this bug has already been reported for MySQL: http://bugs.mysql.com/11822 and is fixed in MySQL 5.0.11. So if it bothers you, you should upgrade.",
    "p(non-relevant). Changing the canonical name of localhost is an arbitrary change that breaks more than MySQL. It also violates the principle of least astonishment.",
    "p(non-relevant). \"We've changed something, we're not sure why, but it breaks MySQL.  If it bothers you, you should upgrade MySQL\"",
    "p(non-relevant). Nah, I don't think that is what we want to tell our users."]},
{user: "Gabor Gombas", timestamp: '2005/10/07 12:20:35', url: 'http://lists.debian.org/debian-devel/2005/10/msg00311.html', ps:
    ["bq(with-author).. Stig Sandbeck Mathisen"
    + "\n\nChanging the canonical name of localhost is an arbitrary change that breaks more than MySQL. It also violates the principle of least astonishment.",
    "Then fix those other broken things as well. If you want localhost-style authentication, you _should_ do the comparison on the IP address rather than the resolved name for several reasons:",
    "* The IP address range for the loopback interface is standardized (127.0.0.0/8). The value returned by the reverse lookup is not.",
    "* Doing the reverse lookup may introduce an attack vector because it relies on the whole NSS being configured right. Avoiding the reverse lookup avoids this attack vector.",
    "* Doing the reverse lookup is just unneccessary, avoiding it saves CPU cycles (this may be important if you want to serve lots of connection attempts)"]},
{user: "Stig Sandbeck Mathisen", timestamp: '2005/10/08 22:43:58', url: 'http://lists.debian.org/debian-devel/2005/10/msg00354.html', ps:
    ["bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nThen fix those other broken things as well.",
    "p(non-relevant). Contrary to popular belief among our users, system administrators does not have access to every server on the internet. Therefore, I can not help you solve this issue in this way.",
    "p(non-relevant). Instead, I propose we return the content of the Debian /etc/hosts file to the way it was before the change.",
    "bq(with-author non-relevant).. Gabor Gombas"
    + "\n\nIf you want localhost-style authentication, you _should_ do the comparison on the IP address rather than the resolved name for several reasons:"
    + "\n\n[snip good reasons]",
    "p(non-relevant). I don't trust client address/name resolving for any authentication of clients. I resent the implication that I do."]}]};
