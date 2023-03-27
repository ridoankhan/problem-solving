import java.util.*;

public class Solution {

    public static int fibonacci(int n) {
        // Complete the function.

        if(n == 0) return 0;
        if(n<=2) return 1;

        int fiboTerm = fibonacci(n-1) + fibonacci(n-2);

      return fiboTerm;  
      
    }

    

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.close();
        System.out.println(fibonacci(n));
    }
}