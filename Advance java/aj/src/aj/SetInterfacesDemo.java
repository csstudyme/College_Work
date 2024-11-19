package aj;

import java.util.*;

public class SetInterfacesDemo {

    public static void main(String[] args) {

        Set<String> hashSet = new HashSet<>();
        hashSet.add("Ajay");
        hashSet.add("Datta");
        hashSet.add("Suda");
        hashSet.add("Aadi");
        hashSet.add("Atul");

        System.out.println("HashSet:");
        for (String name : hashSet) {
            System.out.println(name);
        }

        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("Apple");
        linkedHashSet.add("Banana");
        linkedHashSet.add("Cherry");

        System.out.println("\nLinkedHashSet:");
        for (String fruit : linkedHashSet) {
            System.out.println(fruit);
        }

        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Java");
        treeSet.add("Python");
        treeSet.add("JavaScript");

        System.out.println("\nTreeSet:");
        for (String language : treeSet) {
            System.out.println(language);
        }

       
    }
}
