---
id: 2023-01-11-insertion-sort
title: insertion sort
metaTitle: Insertion Sort | AnasCode
metaDescription: insertion sort | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/sort-algorithms
tags: ['sort-algorithms', 'insertion-sort']
---

# Insertion Sort

```java
void insertion_sort ( int A[ ] , int n)
{
     for( int i = 0 ;i < n ; i++ ) {
    /*storing current element whose left side is checked for its
             correct position .*/

      int temp = A[ i ];
      int j = i;

       /* check whether the adjacent element on the left side is greater or
            less than the current element. */

          while(  j > 0  && temp < A[ j -1]) {

           // moving the left side element to one position forward.
                A[ j ] = A[ j-1];
                j= j - 1;

           }
         // moving the current element to its correct position.
           A[ j ] = temp;
     }
}
```

## Running time

$$
O(n^2)
$$

- [Insertion Sort Animation](https://thumbs.gfycat.com/InsistentDesertedFly-mobile.mp4)
