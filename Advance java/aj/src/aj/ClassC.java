package aj;

public class ClassC extends ClassB {
	
	void Showc(){
		System.out.println("This is Class C");
	}

	public static void main(String[] args) {
		
		ClassC c = new ClassC();
		c.Showa();
		c.Showb();
		c.Showc();
	}

}
