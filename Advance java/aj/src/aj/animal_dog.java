package aj;


class Animal{
	
	void show() {
		System.out.println("This is the Animal class");
	}
}

class Dog extends Animal{
	void showdog() {
		System.out.println("This is the Animal class");
	}
}

public class animal_dog {

	public static void main(String[] args) {
		Animal a= new Animal();
		Dog d = new Dog();
		a= d;
		a.show();
	}

}
