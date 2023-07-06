import java.util.*;
public class CheckEqualOrNot {
    public static boolean check(int n){
        int reminder=0;
        while(n>0){
            int r=n%10;
            reminder=reminder*10+r;
            
            n=n/10;
            

        }
        return (reminder==n);

    }
    public static void main(String[] args) {
        int n=1234;
        System.out.println(check(1234));
    }
}
