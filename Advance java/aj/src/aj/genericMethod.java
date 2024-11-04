package aj;

class prac3 {
    static <T> void get(T[] items) {
        for (T item : items) {
            System.out.print(item+ " ");
        }
        System.out.println();
        
    }
}

public class genericMethod {

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] strArray = {"Ajay", "Datta", "Sudda"};

        System.out.println("Integer Array:");
        prac3.get(intArray);

        System.out.println("String Array:");
        prac3.get(strArray);
    }
}
