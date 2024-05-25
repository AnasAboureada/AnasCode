---
id: 2023-01-11-heap-sort
title: heap sort
metaTitle: Heap Sort | AnasCode
metaDescription: heap sort | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/sort-algorithms
tags: ['sort-algorithms', 'heap-sort']
---

# Heap Sort

- Using a heap sort, you can **_solve find k largest element in a linear time_** if k is small ( k ≤ sqrt(n) )

```bash
HeapSort(A[1 : n])
create an empty priority queuefor i from 1 to n:
	 Insert(A[i])
for i from n downto 1:A[i]
   ExtractMax()
```

- The resulting algorithm is comparison-based and has running time O(n log n) (hence, asymptotically optimal!).
- A natural generalization of selection sort:
  - instead of simply scanning the rest of the array to find the maximum value, use a smart data structure.
- Not in-place: uses additional space to store the priority queue.

## Partial Sorting

Input: An array A[1 … n], an integer 1 ≤ k ≤ n.
Output: The last k elements of a sorted version of A.
Can be solved in O(n) if k = O( $n / log n$)!
