package aj;

import java.util.ArrayList;
import java.util.List;

public class LowerBound {
	
	public static void addIntegers(List<? super Integer> list)
	{
	for(int i = 1; i < 5; i++)
	{

	list.add(i);
	}
	}
	
	public static void main(String[] args)
	{
	List<Object> list = new ArrayList<Object>(); 
	addIntegers(list);
	for(Object value : list)
	{
	System.out.print(value +" ");
	}
	}
	
}
