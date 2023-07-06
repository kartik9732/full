import java.util.*;
public class Find_occurrences_of_palindrome_words_in_a_string {
    
        public static int total(String str){
            int count =0;
            String word="";
            String rev="";
            for(int i=0;i<str.length();i++){
                char ch=str.charAt(i);
                if(ch!=' '){
                    word=word+ch;
                    rev=ch+rev;

                }
                //if there is any ' ' so the word is end 
                //we compare
                else{
                    if(word.equals(rev))
                        count++;
                        word="";
                        rev="";
                    
                }
            }
            return count;
        }
        public static void main(String[] args) {
            
        
        String str="mom and dad is my best";
        System.out.println(total(str));

    }
    
}
