const { createServer: createHttpsServer } = require('https');
const { createServer: createHttpServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let serverOptions;

if (dev) {
  serverOptions = {
    key: fs.readFileSync('./certificates/localhost.key'),
    cert: fs.readFileSync('./certificates/localhost.crt'),
  };
}

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  if (dev && serverOptions) {
    createHttpsServer(serverOptions, (req, res) => {
      const parsedUrl = parse(req.url ? req.url : '', true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`> Server started on https://localhost:${port}`);
    });
  } else {
    createHttpServer((req, res) => {
      const parsedUrl = parse(req.url ? req.url : '', true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`> Server started on http://localhost:${port}`);
    });
  }
});
