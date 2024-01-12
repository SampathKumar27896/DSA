package arrays.src.twoNumberSum;

import java.util.Arrays;
import java.util.HashSet;

public class TwoNumberSum {
    public static int[] findTwoNumberSumMethodOne(int[] array, int targetSum) {
        for(int i = 0; i < array.length; i++) {
            for(int j = i+1; j < array.length; j++) {
                if(array[i] + array[j] == targetSum) {
                    return new int[] {array[i], array[j]};
                }
            }
        }
        return new int[] {};
    }

    public static int[] findTwoNumberSumMethodTwo(int[] array, int targetSum) {
        HashSet<Integer> set= new HashSet<>();
        int potentialTarget = 0;
        for(int i = 0; i < array.length; i++) {
            potentialTarget = targetSum - array[i];
            if(set.contains(potentialTarget)) {
                return new int[] {array[i], potentialTarget};
            } else {
                set.add(array[i]);
            }
        }
        return new int[] {};
    }

    public static int[] findTwoNumberSumMethodThree(int[] array, int targetSum) {
        Arrays.sort(array);
        int leftPoninter = 0, rightPointer = array.length - 1, potentialTarget = 0;
        while(leftPoninter < rightPointer) {
            potentialTarget = array[leftPoninter] + array[rightPointer];
            if(potentialTarget == targetSum) {
                return new int[] {array[leftPoninter], array[rightPointer]};
            } else if(potentialTarget < targetSum) {
                leftPoninter++;
            } else {
                rightPointer++;
            }
        }
        return new int[] {};
    }
}
