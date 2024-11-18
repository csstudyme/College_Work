package ajay;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Listsss {
	
	public static void main(String args[]) {
		
		List<String> obj = new ArrayList<String>();
		
		obj.add("Ajay");
		obj.add("Aditya");
		obj.add("Sudarshan");
		obj.add("Ashvini");
		obj.add("Datta");
		
		ListIterator<String> iterator = obj.listIterator();
		while(iterator.hasNext()) {
			System.out.print(iterator.next() + " ");
		}
		
		System.out.print("\n-----------------------------------\n");
		
		while(iterator.hasPrevious()) {
			System.out.print(iterator.previous() + " ");
		}
	}

}
