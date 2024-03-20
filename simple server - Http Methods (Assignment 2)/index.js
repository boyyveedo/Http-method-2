const http = require("http");

const PORT = 9000;

const behaviour = (req, res) => {
  console.log(req.method);
  console.log(req.url);

  // urL GET BOOKS
  if (req.method === "GET" && req.url === "/books") {
    res.write(
      JSON.stringify([
        { title: "Born to win", page: 1 },
        { title: "Serving in Lagos", page: 30 },
      ])
    );
    res.end();
  }

  // url PUT books
  if (req.method === "PUT" && req.url === "/books") {
    res.write("Add new book ");
    res.end();
  }

  // url DELETE books
  if (req.method === "DELETE" && req.url === "/books") {
    res.write(`Which book do you want to delete ?`);
    res.end();
  }

  // url GET books/author
  if (req.method === "GET" && req.url === "/books/author") {
    res.write(`Search for author`);
    res.end();
  }

  // url PUT books/author
  if (req.method === "PUT" && req.url === "/books/author") {
    res.write(`Enter new  author`);
    res.end();
  }

  // url POST books/author
  if (req.method === "POST" && req.url === "/books/author") {
    res.write(`Authors`);
    res.end();
  }
};

const server = http.createServer(behaviour);
server.listen(PORT, () => {
  console.log(`Sever is listening at ${PORT}`);
});
