async function main() {
    const nodes = await (await fetch("/api/nodes")).json();

    function level(node) {
    if (node.parent === null) {
        return 0
    }
    else {
        const parent = nodes.find(n => n.id === node.parent);
        return(1 + level(parent));
    }
    }

    function createList(node) {
        let sons = nodes.filter(n => n.parent === node.id);
        if (sons.length === 0) {
            return(`<li> ${node.name} </li>`);
        } else {
            let output = `<li class="parent-node"> ${node.name} <ul>`;
            for (const son of sons) {
                output += createList(son);
            }
            output += `</ul> </li>`;
            return(output);
        }
    }

    let tree = document.getElementById("tree-div");

    let roots = nodes.filter(n => n.parent === null);

    for (const root of roots) {
        tree.innerHTML += createList(root);
    }

}

main();