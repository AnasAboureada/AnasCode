---
id: 2023-01-11-selection-sort
title: selection sort
metaTitle: Selection Sort | AnasCode
metaDescription: selection sort | AnasCode
createdDate: 2023-01-11
updatedDate: 2023-01-18
weekNumber: 202302
category: algorithms/sort-algorithms
tags: ['sort-algorithms', 'selection-sort']
---

# Selection Sort

```java
import java.util.Arrays;

public class SelectionSort {

  private static void sortArr(int[] arr) {
    for (int i = 0; i < arr.length; i++) {

      int minIndex = i;

      for (int j = i; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      SelectionSort.swap(arr, i, minIndex);
    }
  }

  private static void swap(int[] arr, int oldIndex, int newIndex) {
    int tmp = arr[oldIndex];
    arr[oldIndex] = arr[newIndex];
    arr[newIndex] = tmp;
  }

  public static void main(String[] args) {
    int[] arr1 = new int[] {6, 3, 4, 6, 8, 9, 44, 12};
    SelectionSort.sortArr(arr1);
    System.out.println(Arrays.toString(arr1));
  }
}
```

```java
void selection_sort (int A[ ], int n) {
        // temporary variable to store the position of minimum element

        int minimum;
        // reduces the effective size of the array by one in each iteration.

        for(int i = 0; i < n-1 ; i++)  {

           // assuming the first element to be the minimum of the unsorted array.
             minimum = i ;

          // gives the effective size of the unsorted array.

            for(int j = i+1; j < n ; j++ ) {
                if(A[ j ] < A[ minimum ])  {                //finds the minimum element
                minimum = j ;
                }
             }
          // putting minimum element on its proper position.
          swap ( A[ minimum ], A[ i ]) ;
        }
   }
```

## Running time

$$
O(n^2)
$$

- Sorts in place, so space complexity is O(1)

![https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)
