const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the charset, the response may be interpreted incorrectly
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});