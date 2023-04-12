import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.Arrays;
import java.util.List;
import java.util.Hashtable;
import java.util.Scanner;

public class Main
{
	public static void main(String[] args) {
		Hashtable <Character, Integer> letters = new Hashtable<>();
		
		int j=0;
		int sum=0;
		String stri = "VGXGPUAMKX";
		char[] str = stri.toCharArray();
		
		for (char ch = 'A'; ch <= 'Z'; ++ch){
            letters.put(Character.valueOf(ch), j);
            j++;
        }
        System.out.println(letters);
        
        sum = 0;
        int start = 0;
        
        for(int i=0; i<str.length; i++){
            int value = letters.get(str[i]) - start;
            start = letters.get(str[i]);
            
            if(value < 0){
                value = value * -1;
            }
            if(value>12){
                value = 26 - value;
            }
            System.out.println(value);
            
            sum = sum + value;
        }
        System.out.println(sum);
        
	}
}