package aj;

import java.util.*;

public class QueueInterfacesDemo {

    public static void main(String[] args) {

        Queue<String> linkedListQueue = new LinkedList<>();
        linkedListQueue.add("Ajay");
        linkedListQueue.add("Datta");
        linkedListQueue.add("Suda");
        linkedListQueue.add("Aadi");
        linkedListQueue.add("Atul");

        System.out.println("LinkedList Queue:");
        for (String name : linkedListQueue) {
            System.out.println(name);
        }

        Queue<String> priorityQueue = new PriorityQueue<>();
        priorityQueue.add("Apple");
        priorityQueue.add("Banana");
        priorityQueue.add("Cherry");

        System.out.println("\nPriorityQueue:");
        for (String fruit : priorityQueue) {
            System.out.println(fruit);
        }

        Queue<String> arrayDequeQueue = new ArrayDeque<>();
        arrayDequeQueue.add("Java");
        arrayDequeQueue.add("Python");
        arrayDequeQueue.add("JavaScript");

        System.out.println("\nArrayDeque Queue:");
        for (String language : arrayDequeQueue) {
            System.out.println(language);
        }

        System.out.println("\nAccessing elements by removing from the queue:");
        System.out.println("LinkedList Queue: " + linkedListQueue.poll());
        System.out.println("PriorityQueue: " + priorityQueue.poll());
        System.out.println("ArrayDeque Queue: " + arrayDequeQueue.poll());

       
    }
}
