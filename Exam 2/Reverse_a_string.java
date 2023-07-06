import java.util.*;

public class Reverse_a_string {
    public static void rever(String str){
        String sb="";
        for(int i=str.length()-1;i>=0;i--){
            char ch=str.charAt(i);
            sb=sb+ch;
            
        }
        System.out.print(sb);
       
        
    }
    public static void main(String[] args) {
        String str="hello";
        rever(str);
    }
}
