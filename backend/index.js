const nodes = [
    { id: 0, name: "Internet", parent: null },
    { id: 1, name: "HTTP/HTTPS", parent: 0 },
    { id: 2, name: "Hosting", parent: 0 },
    { id: 3, name: "DNS", parent: 0 },
    { id: 4, name: "HTML", parent: null},
    { id: 5, name: "CSS", parent: null},
    { id: 6, name: "JavaScript", parent: null},
    { id: 7, name: "Version control", parent: null},
    { id: 8, name: "Git", parent: 7},
    { id: 9, name: "GitHub/GitLab", parent: 7},
    { id: 10, name: "Package Managers", parent: null},
    { id: 11, name: "NPM", parent: 10},
    { id: 12, name: "PNPM", parent: 10},
    { id: 13, name: "VPS", parent: 2},
    { id: 14, name: "Static", parent: 2}
]

const express = require("express");
const app = express();

app.use(express.static("../frontend"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/api/nodes", (req, res) => {
    res.json(nodes);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});