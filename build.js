const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js');
const marked = require('marked');
const jsdom = require('jsdom');
const jquery = require('jquery');
const glob = require('glob');

marked.setOptions({
    highlight: function(code, lang) {
        if (lang) {
            const html = hljs.highlight(lang, code).value;
            const d = new jsdom.JSDOM(html);
            const $ = jquery(d.window);
            $('.hljs-comment').each((i, el) => {
                if (el.textContent.startsWith('# source:')) {
                    const url = el.textContent.replace(/# source:\s+/, '');
                    $(el).replaceWith('<a class="hljs-comment" href="'
                        + url
                    + '"># source</a>');
                }
            });
            return d.serialize();
        } else {
            return code;
        }
    }
});

function getHeading(html) {
    const d = new jsdom.JSDOM(html);
    const $ = jquery(d.window);
    return $('h1')[0];
}

function splitHeading(h) {
    const before = h.ownerDocument.createElement('div');
    const after = h.ownerDocument.createElement('div');
    let found = false;
    h.childNodes.forEach(c => {
        if (found) {
            after.appendChild(c.cloneNode(true));
        } else if (c.tagName == 'BR') {
            found = true;
        } else {
            before.appendChild(c.cloneNode(true));
        }
    })
    return after.childNodes.length ? [before, after] : [before];
}

const frameworks = {
    // mini: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css" />',
    milligram: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css',
    // materialize: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">',
    // pure: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css">',
    skeleton: 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css',
};

const template = (framework, linkUrls, title, content) =>
    '<!doctype html>'
    + '<html>'
    + '<head>'
        + `<title>${title}</title>`
        + linkUrls.map(u => `<link rel="stylesheet" href="${u}">`).join('')
        + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css">'
        + '<style>'
            + 'body {'
                + 'max-width: 50em;'
                + 'margin: 50px auto;'
                + (framework == 'milligram' ?
                    'color: black;'
                : '')
            + '}'
            + '.page-content {'
                + 'padding: 0 50px;'
            + '}'
            + (framework == 'milligram' ?
                'a.hljs-comment {'
                    + 'color: #9b4dca;'
                + '}'
                + 'a.hljs-comment:hover {'
                    + 'color: #606c76;'
                + '}'
            : '')
            + (framework == 'skeleton' ?
                'a.hljs-comment {'
                    + 'color: #1EAEDB;'
                + '}'
                + 'a.hljs-comment:hover {'
                    + 'color: #0FA0CE;'
                + '}'
            : '')
        + '</style>'
    + '</head>'
    + '<body>'
        + '<div class="page-content">' + content + '</div>'
        + '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'
        + '<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.6.1/marked.min.js"></script>'
        + '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>'
    + '</body>'
    + '</html>';

function renderTemplate(md, framework) {
    const content = marked(md);
    const heading = getHeading(content);
    const headingParts = splitHeading(heading).map(el => el.textContent.trim());
    const title = headingParts.length > 1
        ? `${headingParts[1]} - ${headingParts[0]}`
        : headingParts[0];
    return template(framework, [frameworks[framework]], title, content);
}

glob.sync('*.md', {ignore: 'README.md'}).forEach(ifile => {
    const md = fs.readFileSync(ifile, 'utf8');
    Object.keys(frameworks).forEach(f => {
        const fname = `${path.basename(ifile, '.md')}-${f}.html`;
        fs.writeFileSync(fname, renderTemplate(md, f));
    });
    const fname = `${path.basename(ifile, '.md')}.html`;
    fs.writeFileSync(fname, renderTemplate(md, 'milligram'));
});
