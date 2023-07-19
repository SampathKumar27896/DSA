import arrays.src.SortedSquaredArrays.SortedSquaredArrays;
import arrays.src.TransposeOfMatrix.TransposeOfMatrix;

public class JavaDSA {
    public static void main(String[] args) {
        int[][] matrix = new int[][] {
                {1, 2},
                {3, 4},
                {5, 6}
        };
        int[][] transponseMatrix = TransposeOfMatrix.findTransposeOfMatrix(matrix);
        System.out.format("The numbers are %d %d %d",transponseMatrix[1][0], transponseMatrix[1][1], transponseMatrix[1][2]);
    }
}
