---
id: 2023-01-11-bubble-sort
title: bubble sort
metaTitle: Bubble Sort | AnasCode
metaDescription: bubble sort | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/sort-algorithms
tags: ['sort-algorithms', 'bubble-sort']
---

# Bubble Sort

```java
void bubble_sort( int A[ ], int n ) {
    int temp;
    for(int k = 0; k< n-1; k++) {
        // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations

        for(int i = 0; i < n-k-1; i++) {
            if(A[ i ] > A[ i+1] ) {
                // here swapping of positions is being done.
                temp = A[ i ];
                A[ i ] = A[ i+1 ];
                A[ i + 1] = temp;
            }
        }
    }
}
```

## Complexity Analysis

$$
O(n^2)
$$
