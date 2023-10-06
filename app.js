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
})