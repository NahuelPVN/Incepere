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

function level(node) {
    if (node.parent === null) {
        return 0
    }
    else {
        const parent = nodes.find(n => n.id === node.parent);
        return(1 + level(parent));
    }
}

let tree = document.getElementById("tree-div");

function createList(node) {
    let sons = nodes.filter(n => n.parent === node.id);
    if (sons.length === 0) {
        return(`<li> ${node.name} </li>`);
    } else {
        let output = `<li> ${node.name} <ul>`;
        for (const son of sons) {
            output += createList(son);
        }
        output += `</ul> </li>`;
        return(output);
    }
}

let roots = nodes.filter(n => n.parent === null);

for (const root of roots) {
    tree.innerHTML += createList(root);
}