const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  } else if (req.url === "/about") {
    res.end("about page");
  } else
    res.end(
      `<h1>Oops!</h1>
    <p>We con't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>`
    );
});

server.listen(5000);
