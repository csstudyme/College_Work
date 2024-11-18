package aj;

import java.util.ArrayList;
import java.util.List;

public class UpperBound {
	
	public static void print(List<? extends Object> list) // LINE C
	{
	for(Object input : list)
	{
	System.out.print(input +" ");
	}
	}

	public static void main(String[] args) {
		List<Integer> integerList = new ArrayList<Integer>();
		integerList.add(1);
		integerList.add(2);
		integerList.add(3);
		print(integerList);
		
		System.out.println("\n----------");
		
		
		List<String> stringList = new ArrayList<String>();
		stringList.add("A");
		stringList.add("B");
		stringList.add("C");
		print(stringList);
		}
	}

