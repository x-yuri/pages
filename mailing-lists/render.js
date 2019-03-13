
var dust = require('dustjs-linkedin'),
    textile = require('textilejs'),
    fs = require('fs'),
    conversations = require('./conversations').conversations;
dust.helper = require('dustjs-helpers');
var compiled = dust.compile(
    fs.readFileSync(__dirname + '/conversation.dust', 'utf8'),
    'conversation');
dust.loadSource(compiled);
dust.filters.textile = function(value) {
    return textile(value);
};
for (var name in conversations) {
    var conversation = conversations[name];
        /* .sort(function(a, b) {
            a = /(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/.exec(a.timestamp);
            a = new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6]));
            b = /(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/.exec(b.timestamp);
            b = new Date(Date.UTC(b[1], b[2] - 1, b[3], b[4], b[5], b[6]));
            return a.getTime() - b.getTime();
        }); */
    dust.render('conversation', {messages: conversation}, function(err, out) {
        fs.writeFileSync(__dirname + '/' + name + '.html', out, 'utf8');
    });
}
