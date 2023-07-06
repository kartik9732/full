import java.util.*;
public class KeyWordCount {
    
    public static int countWord(String s,String word){
        int count=0;
        for(int i=0;i<s.length();i++){

        
        String sb="";
        
         while(i<s.length() && s.charAt(i)!=' '){
                sb+=s.charAt(i);
                i++;
                
            }
            if(sb.equals(word)){
                count++;
            }
        }
        
        return count;
        
    }
    
    public static void main(String[] args) {
        String s="Code hii CoDE hii CoDE";
        String word="hii";
        System.out.println(countWord(s,word));
    }
}
