---
id: 2023-01-11-dfs-depth-first-search
title: DFS depth first search
metaTitle: DFS Depth First Search | AnasCode
metaDescription: DFS depth first search | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/search-algorithms
tags: ['search-algorithms', 'dfs-depth-first-search']
---

# DFS Depth-first search

## Introduction

- We go **as deep as we can to look for a value**, and when there is nothing new to discover, we retrace our steps to find something new.
- To put it in a term we already know, the **pre-order traversal** of a tree is DFS.
- Let's look at a simple problem of searching for a node in a binary tree whose value is equal to the target.

```java
import java.util.Arrays;
import java.util.Iterator;
import java.util.Scanner;

class Node {
	int val;
	Node left, right;
	public Node(int val) {
		this.val = val;
	}
	public static Node buildTree(Iterator<String> iter) {
		String nxt = iter.next();
		if (nxt.equals("x")) return null;
		Node node = new Node(Integer.parseInt(nxt));
		node.left = buildTree(iter);
		node.right = buildTree(iter);
		return node;
	}
}

class Solution {
	public static Node dfs(Node root, int target) {
		if (root == null) {
			return null;
		}
		if (root.val == target) {
			return root;
		}
		// return non-null return value from the recursive calls
		Node left = dfs(root.left, target);
		if (left != null) {
			return left;
		}
		// at this point, we know left is null, and right could be null or non-null
		// we return right child's recursive call result directly because
		// - if it's non-null we should return it
		// - if it's null, then both left and right are null, we want to return null
		return dfs(root.right, target);
	}

	// Driver code

	public static void main(String[] args) {

		String[] inputs = {
			"5 4 3 x x 8 x x 6 x x", "-100 x -500 x -50 x x", "9 8 11 x x 20 x x 6 x x"
		};
		int[] target = { 8, -50, 11 };
		int[] expected_outputs = { 8, -50, 11 };
		for (int i = 0; i<inputs.length; i++) {
			Node root = Node.buildTree(Arrays.stream(inputs[i].split(" ")).iterator());
			System.out.println("DFS :" + Solution.dfs(root, target[i]).val);
		}
	}
}
```

The example above also introduces two other concepts:

1. **Backtracking**
   - The action of retracing steps is called **backtracking** (e.g. from `2` we first visited `3` depth-first and retraced back and visit the other child `4`).
   - _Backtracking and DFS are similar concepts_ and essentially _the same thing_ since in DFS you always “backtrack” after exploring a deeper node.
   - It's like saying I **program** computers by doing **coding**.
   - If we really want to make the distinction, then backtracking is the concept of retracing and DFS is the algorithm that implements it.
2. **Divide and conquer**
   - We have two recursive calls `dfs(root.left)` and `dfs(root.right)` and return based on results from the recursive calls.
   - This is also a **divide and conquer** algorithm, i.e. splitting into sub-problems of the same type (search in left and right children) until they are simple enough to be solved directly (null nodes or found target) and combining the results from these sub-problems (return non-null node).

## When to Use Dfs

### Tree

DFS is essentially pre-order tree traversal.

- Traverse and find/create/modify/delete node
- Traverse with return value (finding max subtree, detect balanced tree)

### Combinatorial Problems

DFS/backtracking and combinatorial problems are a match made in heaven (or silver bullet and werewolf 😅).

As we will see in the **[Combinatorial Search](https://www.educative.io/collection/page/5187571686572032/5949303171317760/5944628049084416)** module, combinatorial search problems boil down to searching in trees.

- How many ways are there to arrange something
- Find all possible combinations of …
- Find all solutions to a puzzle

### Graph

Trees are special graphs that have no cycle. We can still use DFS in graphs with cycles. We just have to record the nodes we have visited and avoid re-visiting them and going into an infinite loop.

- Find a path from point A to B
- Find connected components
- Detect cycles

## Dfs on a Tree

### Think like a Node

<aside>
⚖️ The key to solving tree problems using DFS is to think from the perspective of a node instead of looking at the whole tree.

</aside>

- This is in line with how recursion is written.
- Reason from a node's perspective, make sure you consider all the cases, and let recursion take care of the rest.
- Provided you have a good understanding of the problem at hand, there are two things you want to think about:
  1. **Return value**
     - What do we want to return after visiting a node?
     - For example, for the max depth problem, this is the max depth for the current node's subtree.
     - If we are looking for a node in the tree, we'd want to return that node if found, else return null.
     - **Use the return value to pass information from children to parent**.
  2. **Identify states**
     - What states do we need to maintain to compute the return value for the current node?
     - For example, to know if the current node's value is larger than its parent we have to maintain the parent's value as a state.
     - State becomes DFS's function arguments.
     - **Use states to pass information from parent to children**.

The common template for DFS on tree is:

```python
def dfs(root, state):
    if not root:
        ...
        return

    left = dfs(root.left, state)
    right = dfs(root.right, state)

        ...

    return ...
```

The **time complexity** of depth-first search on trees is **O(N)** since each node is visited once.

## Dfs on Graphs

Similar to BFS, we just have to add the `visited` variable to keep track of the visited nodes and use `get_neighbors` to get the next nodes to visit.

```python
public void dfs(Node root, Set<Node> visited) {

    if (visited.contains(root)) {
        continue;
    }

    for (Node child : node.children) {
        dfs(child);
        visited.add(child);
    }
}
```

### Complexity

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V| + |E|)` where `|V|` stands for the number of vertices and `|E|` stands for the number of edges. `V` is a set of vertices and in maths `|V|` means the size of a set.
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices *and edges*, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices *and edges*, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices *and edges*, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices *and edges*, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices *and edges*, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V
We only visit each vertex once in both BFS and DFS with `visited`. Since technically a graph is made of vertices _and edges_, the time complexity of BFS/DFS on graphs is normally expressed as `O(|V

## Cycle Detection

- One way to detect cycles is to **use DFS**.

### Normal Graph Dfs

- For normal graph DFS a node has two states:
  - `to be visited` and
  - `visited`.
- We traverse the graph and visit each node and mark it as `visited`.

### Cycle Detection Dfs

- In cycle detection, we need a **third state `visiting`**. We perform DFS on each node by:
  - marking a node as `visiting`
  - visiting each of its neighbors
- When we reach the end of the path, i.e. no more out edges from the last node in the path, we mark the node in the path as `visited`.
- If during the DFS we happen to come back to a node that is in the `visiting` state, we have a cycle.
