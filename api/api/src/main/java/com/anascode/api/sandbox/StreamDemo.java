package com.anascode.api.sandbox;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class StreamDemo {

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < 100000000; i++) {
            list.add(i);
        }

        // Benchmark parallel stream
        long startTime = System.nanoTime();
        int totalSumParallel = list.parallelStream().reduce(0, Integer::sum);
        long endTime = System.nanoTime();

        long durationParallel = (endTime - startTime);  // Divide by 1000000 to get milliseconds.

        // Benchmark sequential stream
        startTime = System.nanoTime();
        int totalSumSequential = list.stream().reduce(0, Integer::sum);
        endTime = System.nanoTime();

        long durationSequential = (endTime - startTime);  // Divide by 1000000 to get milliseconds.

        System.out.println("Total Sum (Parallel Stream) is " + totalSumParallel);
        System.out.println("Time taken by Parallel Stream: " + durationParallel /  1000000 + " milliseconds");

        System.out.println("Total Sum (Sequential Stream) is " + totalSumSequential);
        System.out.println("Time taken by Sequential Stream: " + durationSequential / 1000000 + " milliseconds");
    }
}
