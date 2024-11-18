package ajay;

import java.util.LinkedHashSet;
import java.util.Set;

public class Setsss2 {

	public static void main(String[] args) {
Set<String> set1 = new LinkedHashSet<String>();
		
	set1.add("Ajay");
	set1.add("Aditya");
	set1.add("Sudarshan");
	set1.add("Ashvini");
	set1.add("Datta");
	
	System.out.println(set1);
		
	Set<String> set2 = new LinkedHashSet<String>();	
	
	set2.add("Rupali");
	set2.add("Atul");
	
	set1.addAll(set2);
	
	System.out.println(set1);
	
	
	set1.remove("Rupali");
	
    System.out.println("After Remove: " + set1);
    
    System.out.println("Finding sudarsham ");
    System.out.println(("Sudarshan"));

	}

}
