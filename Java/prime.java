//  Problem: To determine if a number is prime or not prime
     
   import java.util.Scanner;
   
   class Solution{
       static String primality(int n) {
        
        int flag = 0;
        
        int half = n/2;
        
        if(n == 0 || n == 1){
            // If it is 0 or 1 then the number is not prime
            System.out.println("Not prime");
        }else{
            for(int i=2; i<=half; i++){
                if(n % i == 0){
                    System.out.println("Not prime");
                    flag = 1;
                    break;
                }
            }
        }
        
        if(flag == 0)
            System.out.println("Prime");

    }

   }     
        