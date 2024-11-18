package aj;

import java.util.ArrayList;
import java.util.List;

public class UnBound{
	
	public static void print(List<?> list)
	{
	for(Object input : list)
	{
	System.out.print(input +" ");
	}
	}

	public static void main(String[] args)
	{
	List<Integer> integerList = new ArrayList<Integer>();
	integerList.add(1);
	integerList.add(2);
	integerList.add(3);
	print(integerList);
	
		
	}
	

}
