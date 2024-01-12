package arrays.src.ValidateSubSequence;

import java.util.List;

public class ValidateSubSequence {
    public static boolean validateSubSequence(List<Integer> array, List<Integer> subSequence) {
        /*
            List methods used here
            equals(Object o)
            Compares the specified object with this list for equality.

            get(int index)
            Returns the element at the specified position in this list.

         */
        int subSequenceIndex = 0;
        for(int i = 0; i < array.size(); i++) {
            if(subSequence.get(subSequenceIndex).equals(array.get(i))) {
                subSequenceIndex++;
            }
        }
        return subSequenceIndex == subSequence.size();
    }
}
