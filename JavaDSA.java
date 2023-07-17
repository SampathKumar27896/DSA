import arrays.src.twoNumberSum.TwoNumberSum;
public class JavaDSA {
    public static void main(String[] args) {
        int[] array = {3, 5, -4, 8, 11, 1, -1, 6};
        int targetSum = 10;
        int[] result = TwoNumberSum.findTwoNumberSumMethodThree(array,targetSum);
        System.out.format("The numbers are {%d} , {%d}",result[0], result[1]);
    }
}
