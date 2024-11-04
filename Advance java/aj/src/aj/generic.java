package aj;

class prac<T>{
	T obj;
	prac(T obj){
		this.obj = obj;
	}
	
	 public T get(){
		 return obj;
	 }
}

public class generic {

	public static void main(String[] args) {
		
		
		prac<Integer> obj1 = new prac<>(2);
		
		System.out.println(obj1.get());		

	}

}
