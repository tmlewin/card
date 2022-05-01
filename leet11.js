// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

// Input: graph = [[1,3],[0,2],[1,3],[0,2]]
// Output: true
// Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.

var isBipartite = function(graph) {
    let visited = new Array(graph.length).fill(false);
    let colors = new Array(graph.length).fill(0);
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            if (!dfs(graph, i, visited, colors)) {
                return false;
            }
        }
    }
    return true;
};


function dfs(graph, node, visited, colors) {
    visited[node] = true;
    let neighbors = graph[node];
    let color = colors[node] === 0 ? 1 : 0;
    for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!visited[neighbor]) {
            colors[neighbor] = color;
            if (!dfs(graph, neighbor, visited, colors)) {
                return false;
            }
        } else if (colors[neighbor] === colors[node]) {
            return false;
        }
    }
    return true;
}


console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]));
