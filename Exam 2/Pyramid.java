public class Pyramid{
    public static void main(String[] args) {
        int n=5;
        for(int i=1;i<=n;i++){
            for(int j=i;j>0;i--){
                while(j==1){
                    j++;
                }
            }
        }
    }
}