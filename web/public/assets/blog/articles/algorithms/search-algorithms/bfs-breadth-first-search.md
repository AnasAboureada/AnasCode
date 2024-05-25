---
id: 2023-01-11-bfs-breadth-first-search
title: BFS breadth first search
metaTitle: BFS - Breadth First Search | AnasCode
metaDescription: BFS breadth first search | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/search-algorithms
tags: ['search-algorithms', 'bfs-breadth-first-search']
---

# Bfs Breadth First search

## When to Use Bfs?

- To get the shortest path from A to B
- For graph of unknown or even infinite size, e.g. knight shortest path

## Bfs on Tree Template

We can implement BFS using a queue. Important things to remember:

- We need at least one element to kick start the process.
- Right after we dequeue an element, we'd want to enqueue its children if there are any.

```python
from collections import deque

def bfs_by_queue(root):
    queue = deque([root]) # at least one element in the queue to kick start bfs
    while len(queue) > 0: # as long as there is an element in the queue
        node = queue.popleft() # dequeue
        for child in node.children: # enqueue children
            if OK(child): # early return if problem condition met
                return FOUND(child)
            queue.append(child)
    return NOT_FOUND
```

## Bfs on Graph Template

The BFS template consists of two core functions:

1. `bfs`: uses a queue to keep track of the nodes to be visited.
2. `get_neighbors`: returns a node's neighbors. In an adjacency list representation, this would be returning the list of neighbors for the node. If the problem is about a matrix, this would be the surrounding valid cells as we will see in the [number of islands](https://www.educative.io/collection/page/5187571686572032/5949303171317760/5701561555615744) and [knight shortest path](https://www.educative.io/collection/page/5187571686572032/5949303171317760/6054014759206912). If the graph is implicit, we have to generate the neighbors as we traverse. We will see this in the [word ladder](https://www.educative.io/collection/page/5187571686572032/5949303171317760/6185495083089920).

```java
import java.util.*;

public void bfs(Node root) {
    ArrayDeque<Node> queue = new ArrayDeque<>();
    queue.add(root);
    Set<Node> visited = new HashSet<>();
    while (queue.size() > 0) {
        Node node = queue.pop();
        for (Node neighbor : getNeighbors(node)) {
            if (visited.contains(neighbor)) {
                continue;
            }
            queue.add(neighbor);
            visited.add(neighbor);
        }
    }
}
```

```python
from collections import deque

def bfs(root):
    queue = deque([root])
    visited = set()
    while len(queue) > 0:
        node = queue.popleft()
        for neighbor in get_neighbors(node):
            if neighbor in visited:
                continue
            queue.append(neighbor)
            visited.add(neighbor)
```

## Tracking levels/finding Distance

```java
import java.util.*;

public void bfs(Node root) {
    ArrayDeque<Node> queue = new ArrayDeque<>();
    queue.add(root);
    Set<Node> visited = new Hashset<>();
    int level = 0;
    while (queue.size() > 0) {
        int n = queue.size();  // get # of nodes in the current level
        for (int i = 0; i < n; i++) {
            Node node = queue.pop();
            for (Node neighbor : getNeighbors(node)) {
                if (visited.contains(neighbor)) {
                    continue;
                }
                queue.add(neighbor);
                visited.add(neighbor);
            }
        }
        // increment level after we have processed all nodes of the level
        level++;
    }
}
```

```python
from collections import deque

def bfs(root):
    queue = deque([root])
    visited = set()
    level = 0
    while len(queue) > 0:
        n = len(queue) # get # of nodes in the current level
        for _ in range(n):
            node = queue.popleft()
            for neighbor in get_neighbors(node):
                if neighbor in visited:
                    continue
                queue.append(neighbor)
                visited.add(neighbor)
        # increment level after we have processed all nodes of the level
        level += 1
```
