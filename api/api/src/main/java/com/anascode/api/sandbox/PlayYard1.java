package com.anascode.api.sandbox;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class PlayYard1 {
    private static void playWithStreams() {
        Stream<Integer> intStream = Stream.of(1, 2, 3, 4, 5);
        System.out.print("intStream: ");
        intStream.forEach(System.out::print);
        System.out.println();

        List<String> list = Arrays.asList("a", "b", "c", "d", "e");
        list.forEach(System.out::print);
        System.out.println();
        list.stream().filter(s -> s.contains("b") || s.contains("e")).forEach(System.out::print);

    }

    private static void merge(int[] num1, int[] num2) {
//        num1 = Stream.of(num1, num2).sort().toArray();
        return;
    }


    public static void main(String[] args) {
        playWithStreams();

    }
}
