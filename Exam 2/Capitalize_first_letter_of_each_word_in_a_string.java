import java.util.*;
public class Capitalize_first_letter_of_each_word_in_a_string {
    public static String capital(String str){
        StringBuilder sb=new StringBuilder("");
        //for first letter
        char ch=Character.toUpperCase(str.charAt(0));
        sb.append(ch);
        for(int i=1;i<str.length();i++){    // first word already capital
            if(str.charAt(i)==' ' && i<str.length()-1){
                sb.append(str.charAt(i));
                i++;
                sb.append(Character.toUpperCase(str.charAt(i)));
            }
            else{
                sb.append(str.charAt(i));
            }
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        String str="hey i am kartik manna and you are";
        System.out.println(capital(str));
    }
}
//this is okk al right

