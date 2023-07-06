import java.util.*;
public class Detect_cycle {
    public static class Node{
        int data;
        Node next;
        public Node(int data){
            this.data=data;
            this.next=null;
        }
    }
    public static Node head;
    public static Node tail;
    public static boolean isCycle(){
        Node slow=head;
        Node fast=head;
        while(fast!=null && fast.next!=null){
            slow=slow.next;     //+1;
            fast=fast.next.next;     //+2
            if(fast==slow){
                return true;
        }
        
        }
        return false;

    }
    // //remove cycle
    // public static void removeCycle(){
    //     //detect cycle
    //     Node slow=head;
    //     Node fast=head;
    //     int exits=0;    // loop not exit
    //     while(fast!=null && fast.next!=null){
    //         slow=slow.next;
    //         fast=fast.next.next;
    //         if(slow==fast){
    //             exits++; //loop is exit
    //             break;
    //         }

    //     }
    //     if(exits==0){
    //         return;
    //     }
    //     //meeting point
    //     slow=head;
    //     Node prev=null;
    //     while(slow!=fast){
    //         prev=fast;
    //         slow=slow.next;
    //         fast=fast.next;
    //     }
    //     //prev.next=null
    //     prev.next=null;
    // }

    public static void main(String[] args) {
        head=new Node(1);
        head.next=new Node(2);
        head.next.next=new Node(3);
        head.next.next.next=head;
        System.out.println(isCycle());
    }
}
