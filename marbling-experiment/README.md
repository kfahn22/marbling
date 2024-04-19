This is attmept to port [Marbling Experiment](https://github.com/amandaghassaei/marbling-experiment/tree/main) by Amanda Ghassaei from typescript to javascript

-[Node doesn't have DOM](https://stackoverflow.com/questions/32126003/node-js-document-is-not-defined)

Two options mentioned in stackoverflow:

[Browserify](https://browserify.org)

`npm install -g browserify`

Not sure about this one. Have to add `runScripts: "dangerously"`??
[jsdom](https://github.com/jsdom/jsdom)

```javascript
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
```

To add DOM:

```javascript
GLOBAL.document = new JSDOM(html).window.document;
```

### Options from ChatGPT

- jsdom

```javascript
const { JSDOM } = require("jsdom");
const { document } = new JSDOM().window;
```

- Cheerio

`npm install cheerio`

```javascript
const cheerio = require("cheerio");
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
console.log($(".title").text());
```

- Domino

`npm install domino`

```javascript
const domino = require("domino");
const window = domino.createWindow(
  "<html><body><h1>Hello world</h1></body></html>"
);
const document = window.document;
console.log(document.querySelector("h1").textContent);
```

`
TODO: look into this more

[gpu-io](https://github.com/amandaghassaei/gpu-io)
