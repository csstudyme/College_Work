package ajay;

import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;

public class Setsss {
	
	public static void main(String args[]) {
		
		Set<String> obj = new LinkedHashSet<String>();
		
		obj.add("Ajay");
		obj.add("Aditya");
		obj.add("Sudarshan");
		obj.add("Ashvini");
		obj.add("Datta");
		
		Iterator<String> iterator = obj.iterator();
		while(iterator.hasNext()) {
			System.out.print(iterator.next() + " ");
		}
		
		System.out.print("\n-----------------------------------\n");
		
		Object[] array = obj.toArray();
		for (int i = array.length - 1; i >= 0; i--) {
			System.out.print(array[i] + " ");
		}
	}
}
