const http = require('http');

const server = http.createServer((req, res) => {
  // Setting charset to utf-8 ensures correct interpretation
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Hello, World!</h1>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});