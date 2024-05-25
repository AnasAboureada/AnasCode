---
id: 2023-01-11-linear-search
title: linear search
metaTitle: Linear Search | AnasCode
metaDescription: linear search | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/search-algorithms
tags: ['search-algorithms', 'linear-search']
---

# Linear search

```java
public class LinearSearch {

  static int linearSearch(int[] a, int x) {
    for (int i = 0; i < a.length; i++) {
      if (a[i] == x) return i;
    }
    return -1;
  }
}
```
