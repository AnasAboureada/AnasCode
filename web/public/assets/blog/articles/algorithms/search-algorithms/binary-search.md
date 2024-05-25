---
id: 2023-01-11-binary-search
title: binary search
metaTitle: Binary Search | AnasCode
metaDescription: binary search | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/search-algorithms
tags: ['search-algorithms', 'binary-search']
---

# Binary search

- It's a divide and conquer algorithm.
- The runtime of binary search is **Θ(log n)**.

```java
public class BinarySearch {

  static int binarySearch(int[] a, int x) {
    int left = 0, right = a.length - 1;
    while (left <= right) {
      int middle = left + (right - left) / 2;
      if (a[middle] == x) return middle;
      if (a[middle] > x) right = middle - 1;
      if (a[middle] < x) left = middle + 1;
    }

    return -1;
  }
}
```

```java
public class BinarySearch {

  static int binarySearchRecursive(int[] a, int x, int left, int right) {
    if (left > right) {
      return -1;
    }

    int mid = left + (right - left) / 2;

    if (a[mid] == x) {
      return mid;
    }

    if (x > a[mid]) {
      left = mid + 1;
    }

    if (x < a[mid]) {
      right = mid - 1;
    }

    return binarySearchRecursive(a, x, left, right);
  }
```
