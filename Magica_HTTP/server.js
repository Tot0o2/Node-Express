const http = require("http");
const fs = require('fs');
const path = require('path');
const querystring = require('querystring')

const indexPath = path.join(__dirname, 'index.html')
const headerHtml = {'Conetent-Type': 'text/html; charset=utf8'}
const headerPlain = {'Conetent-Type': 'text/html; charset=utf8'}

const serverFile = (filePath, headers, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, headerPlain)
      res.end('Erreur serveur')
      return;
    }
    res.writeHead(200, headers);
    res.end(data);
  })
}

const postSubmit = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const parsedData = querystring.parse(body);
    const nom = parsedData.name;
    if (nom) {
      res.writeHead(200, headerPlain);
      res.end(`<h1>Bonjour bienvenue ${nom}<h1/>`);
    }
    else {
      res.writeHead(400, headerPlain);
      res.end(`<h1>Erreur<h1/>`);
    }
  })
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      if (req.method === "GET") {
        serverFile(indexPath, headerHtml, res)
      }
      break;
    }
    case "/about": {
      if (req.method === "GET") {
        res.writeHead(200, headerHtml);
        res.end("<h1>à propos de Magica!<h1/>");
      }
      break;
    }
    case "/old-page": {
      if (req.method === "GET") {
        res.writeHead(301, { Location: "/new-page" });
        res.end();
      }
    }
    case "/new-page": {
      if (req.method === "GET") {
        res.writeHead(200, headerHtml);
        res.end("<h1>Bienvenue sur la nouvelle page<h1/>");
      }
      break;
    }
    case "/api": {
      if (req.method == "GET") {
        const data = {
          message: 'Bienvenue à l\'API de Magica',
          timeStamp: new Date
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      }
      break;
    }

    case "/submit": {
      if (req.method === "POST") {
        postSubmit(req, res)
      }
      break;
    }
    default: {
      res.writeHead(404, headerHtml);
      res.end("<h1>404 - Page non trouvée</h1>");
    }
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
