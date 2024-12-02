import java.util.Scanner;

public class Queue {
    private int[] queue;
    private int front, rear, size, capacity;

    // Constructor to initialize the queue
    public Queue(int capacity) {
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    // Enqueue operation (add an element)
    public void enqueue(int value) {
        if (size == capacity) {
            System.out.println("Queue is full.");
        } else {
            rear = (rear + 1) % capacity;
            queue[rear] = value;
            size++;
            System.out.println(value + " added to the queue.");
        }
    }

    // Dequeue operation (remove an element)
    public void dequeue() {
        if (size == 0) {
            System.out.println("Queue is empty.");
        } else {
            System.out.println(queue[front] + " removed from the queue.");
            front = (front + 1) % capacity;
            size--;
        }
    }

    // Display the elements of the queue
    public void display() {
        if (size == 0) {
            System.out.println("Queue is empty.");
        } else {
            System.out.print("Queue: ");
            for (int i = 0; i < size; i++) {
                System.out.print(queue[(front + i) % capacity] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the queue: ");
        int size = scanner.nextInt();
        
        Queue queue = new Queue(size);

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Enqueue");
            System.out.println("2. Dequeue");
            System.out.println("3. Display");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1: // Enqueue
                    System.out.print("Enter value to enqueue: ");
                    int value = scanner.nextInt();
                    queue.enqueue(value);
                    break;
                case 2: // Dequeue
                    queue.dequeue();
                    break;
                case 3: // Display
                    queue.display();
                    break;
                case 4: // Exit
                    System.out.println("Exiting program.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
