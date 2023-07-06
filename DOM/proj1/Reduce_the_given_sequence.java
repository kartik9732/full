import java.util.*;
public class Reduce_the_given_sequence {

    public static int sequence(String s,char k){
        StringBuilder sb=new StringBuilder("");
for(int i=0;i<s.length();i++){
    if(s.charAt(i)!=k){
        sb.append(s.charAt(i));

    }
    if( s.charAt(i)!=s.length()-1 && s.charAt(i)==s.charAt(i+1) && s.charAt(i)==k ){


    }
}
    }
    public static void main(String[] args) {
        String s="aabbcdeaaaaaabd";     // abcdeabd
        char k='a';
        
    }
}
