import java.util.*;
public class CheckVowelOrConsonent {
    public static void check(char s){
        if(s=='a'|| s=='e' || s=='i' ||s=='o' || s=='u'){
            System.out.println("vowel");
        }
        else{
            System.out.println("consonant");
        }
    }
    public static void main(String[] args) {
        //char s='a';
        char s='b';

        check('b');

    }
}
