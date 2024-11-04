package aj;
class prac<T>{
	T obj;
	prac(T obj){
		this.obj = obj;
	}
	
	 public T get(){
		 return obj;
	 }

	@Override
	public String toString() {
		return "prac [obj=" + obj + "]";
	}
}


public class Generic_class {
	public static void main(String args[]) {
		
		prac<Integer> obj1 = new prac<>(2);
		
		prac<String> obj2 = new prac<>("Ajay");
		
		System.out.println(obj1.get());
		System.out.println(obj2.get());
	}
}
