import java.util.*;
public class MaximumElement {
    public int maximum(int arr[]){
        int max=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            max=Math.max(arr[i],max);
            
        }
        return max;
        
    }
   public static void main(String[] args) {
    int arr[]={20,30,93,71,18,82,66};
System.out.println();
    
   } 
}
