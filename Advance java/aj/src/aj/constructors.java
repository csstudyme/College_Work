package aj;

/**
 * 
 */
public class constructors {

	private int id;
	private String name;

	constructors() {
		System.out.println("This is simple constructor");
	}

	constructors(int a) {
		this.id = a;
	}

	constructors(int a, String b) {
		this.id = a;
		this.name = b;
	}
	
	public int geId() {
		return id;
	}
	
	public String getName() {
		return name;
	}

	public String toString() {
		return "constructors [id=" + id + ", name=" + name + "]";
	}
	
	public static void main(String args[]) {
		constructors c= new constructors(1, "Ajay");
		System.out.println(c.geId());
		System.out.println(c.getName());
		System.out.println(c);
	}
	

}
