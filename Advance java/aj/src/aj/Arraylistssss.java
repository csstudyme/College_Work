package aj;
import java.util.*;


public class Arraylistssss {
	
	public static void main(String[] args) {
	
	ArrayList<String>  a = new  ArrayList<String>();
	a.add("Ajay");
	a.add("datta");
	a.add("suda");
	a.add("aadi");
	a.add("atul");
	
	System.out.println(a);
	
	int count =3;
	
	for(String i : a) {
		if(count >= 1) {
			System.out.println(i);
			count = count-1;
		}
	}
}
}
