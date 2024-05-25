---
id: 2023-01-11-dfs-vs-bfs
title: dfs vs bfs
metaTitle: DFS Vs BFS | AnasCode
metaDescription: DFS vs BFS | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/search-algorithms
tags: ['search-algorithms', 'dfs-vs-bfs']
---

# DFS vs. BFS

A question naturally arises: which one should I use? Or more fundamentally, which tasks do they each excel at? Complexity-wise they are both O(N)_O_(_N_) since each node is visited once during the tree traversal. The differences come from the different order of traversal.

DFS is better at:

- Narrow but deep trees
- Finding nodes far away from the root

BFS is better for:

- Shallow but wide trees
- finding nodes close/closest to the root

## When Should You Use One over the Other?

If you just have to visit each node once without memory constraints (e.g. **number of islands** problem), then it doesn't really matter which one you use. It comes down to your personal preference for recursion/stack vs queue.

BFS is better at:

- Finding the **shortest distance** between two vertices
- Graph of unknown size, e.g. **word ladder**, or even infinite size, e.g. **knight shortest path**

DFS is better at:

- Using **less memory** than BFS for wide graphs since BFS has to keep all the nodes in the queue because this can be quite large for wide graphs;
- Finding nodes far away from the root, e.g. looking for an exit in a maze.
