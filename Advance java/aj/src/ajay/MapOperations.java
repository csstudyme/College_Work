package ajay;

import java.util.HashMap;
import java.util.Map;

public class MapOperations {
    public static void main(String[] args) {
        
        // a. Add items in the map
        Map<String, Integer> map1 = new HashMap<>();
        map1.put("Ajay", 25);
        map1.put("Aditya", 30);
        map1.put("Sudarshan", 28);
        map1.put("Ashvini", 22);
        
        System.out.println("Initial Map: " + map1);
        
        System.out.print("\n-----------------------------------\n");

        // b. Remove items from the map
        map1.remove("Ashvini");
        System.out.println("After Removing 'Ashvini': " + map1);
        
        System.out.print("\n-----------------------------------\n");

        // c. Search specific key from the map
        String keyToSearch = "Ajay";
        if (map1.containsKey(keyToSearch)) {
            System.out.println("Map contains key '" + keyToSearch + "'");
        } else {
            System.out.println("Map does not contain key '" + keyToSearch + "'");
        }
        
        System.out.print("\n-----------------------------------\n");

        // d. Get value of the specified key
        String keyToGet = "Aditya";
        Integer value = map1.get(keyToGet);
        if (value != null) {
            System.out.println("Value associated with key '" + keyToGet + "' is: " + value);
        } else {
            System.out.println("Key '" + keyToGet + "' not found in the map.");
        }
        
        
        System.out.print("\n-----------------------------------\n");

        // e. Insert map elements of one map into another map
        Map<String, Integer> map2 = new HashMap<>();
        map2.put("Datta", 27);
        map2.put("Ashok", 32);
        map1.putAll(map2);
        System.out.println("After Merging map2 into map1: " + map1);
        
        
        System.out.print("\n-----------------------------------\n");

        // f. Print all keys and values of the map
        System.out.println("\nAll keys and values in the map:");
        for (Map.Entry<String, Integer> entry : map1.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}
