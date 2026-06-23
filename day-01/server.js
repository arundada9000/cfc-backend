const http = require("http");

//create server
const server = http.createServer((request, response) => {
  response.end("This message is from Bootcamp Backend");
});

//Port assign
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

//HTTP methods
// GET -> "data fetching"
//POST-> "Create data "
//PUT-> "Replace data"
//PATCH-> "Update part of data"
//DELETE - > "Delete the data"


