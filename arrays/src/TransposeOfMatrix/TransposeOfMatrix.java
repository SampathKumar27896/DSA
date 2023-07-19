package arrays.src.TransposeOfMatrix;

public class TransposeOfMatrix {
    public static int[][] findTransposeOfMatrix(int[][] array) {
        int[][] newTransposeMatrix = new int[array[0].length][array.length];
        for(int i = 0; i < array.length; i++) {
            for(int j = 0; j < array[0].length; j++) {
                newTransposeMatrix[j][i] = array[i][j];
            }
        }
        return newTransposeMatrix;
    }
}
