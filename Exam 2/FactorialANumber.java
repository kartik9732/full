import java.util.*;
public class FactorialANumber {
    public static int factorial(int n){
        if(n==0){
            return 1;
        }
        int sum=factorial(n-1);
        int total=n*sum;
        return total;

    }
    public static void main(String[] args) {
        int n=5;
        System.out.println(factorial(5));
    }
    
}
