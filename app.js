const http = require("http");

const server = http.createServer(function(request, response) {
  console.log(request.url)

  function docMaker(title, href, text) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      <a href="${href}">${text}</a>
    </body>
    </html>
    `;
  }
    if (request.url === "/") {
      let doc = docMaker("메인페이지", "/sub", "서브페이지로 이동!");
      response.writeHead(200, { "Content-Type": "text/html"});
      response.end(doc);
    }
    if (request.url === "/sub") {
      let doc = docMaker("서브페이지", "/", "메인페이지로 이동!");
      response.writeHead(200, { "Content-Type": "text/html"});
      response.end(doc);
    }
});
server.listen(1234);