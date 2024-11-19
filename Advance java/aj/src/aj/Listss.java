package aj;

import java.util.*;

public class Listss {

    public static void main(String[] args) {

        List<String> arrayList = new ArrayList<>();
        arrayList.add("Ajay");
        arrayList.add("Datta");
        arrayList.add("Suda");
        arrayList.add("Aadi");
        arrayList.add("Atul");

        System.out.println("ArrayList:");
        for (String name : arrayList) {
            System.out.println(name);
        }

        List<String> linkedList = new LinkedList<>();
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");

        System.out.println("\nLinkedList:");
        for (String fruit : linkedList) {
            System.out.println(fruit);
        }

        List<String> vectorList = new Vector<>();
        vectorList.add("Java");
        vectorList.add("Python");
        vectorList.add("JavaScript");

        System.out.println("\nVector:");
        for (String language : vectorList) {
            System.out.println(language);
        }

        List<String> stackList = new Stack<>();
        stackList.add("First");
        stackList.add("Second");
        stackList.add("Third");

        System.out.println("\nStack:");
        for (String item : stackList) {
            System.out.println(item);
        }

        System.out.println("\nAccessing elements by index:");
        System.out.println("ArrayList: " + arrayList.get(0));
        System.out.println("LinkedList: " + linkedList.get(1));
        System.out.println("Vector: " + vectorList.get(2));
        System.out.println("Stack: " + stackList.get(1));

        
    }
}
