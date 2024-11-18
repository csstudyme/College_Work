package aj;

import java.util.HashMap;

public class HashMapS {

	public static void main(String[] args) {
	
		HashMap m = new HashMap();
		m.put(1, "Ajay");
		m.put(2, "Aditya");
		m.put(3, "Suda");
	
		m.remove(1);
		
		System.out.println(m);
		System.out.println(m.get(2));
		System.out.println(m.isEmpty());
		System.out.println(m.values());
		
		System.out.println(m.containsKey(2));
		System.out.println(m.containsValue("Suda"));
		
		
	}

}
