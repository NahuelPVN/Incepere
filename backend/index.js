const express = require("express");
const app = express();

app.use(express.static("../frontend"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/api/nodes", (req, res) => {
    res.json(nodes);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});