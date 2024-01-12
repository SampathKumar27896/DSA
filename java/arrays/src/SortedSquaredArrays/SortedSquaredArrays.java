package arrays.src.SortedSquaredArrays;

import java.util.Arrays;

public class SortedSquaredArrays {
    public static int[] sortedSquaredArrays(int[] array) {
        int[] sortedArrayList = new int[array.length];
        for(int i = 0; i < array.length; i++) {
            sortedArrayList[i] = array[i] * array[i];
        }
        Arrays.sort(sortedArrayList);
        return sortedArrayList;
    }

    public static int[] sortedSquaredArraysMethodTwo(int[] array) {
        int[] sortedArrayList = new int[array.length];
        int leftIndex = 0, rightIndex = array.length - 1;
        for(int i = array.length - 1; i >= 0; i--) {
            if(Math.abs(array[leftIndex]) > Math.abs(array[rightIndex])) {
                sortedArrayList[i] = array[leftIndex] * array[leftIndex];
                leftIndex++;
            } else {
                sortedArrayList[i] = array[rightIndex] * array[rightIndex];
                rightIndex--;
            }
            System.out.println(sortedArrayList[i]);
        }
        return  sortedArrayList;
    }
}
