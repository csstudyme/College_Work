package aj;

class Practice<T> {
    T obj;
    Practice(T obj) {
        this.obj = obj;
    }
    
    public T get() {
        return obj;
    }
}

public class generic {

    public static void main(String[] args) {
        Practice<Integer> obj1 = new Practice<>(2);
        
        System.out.println(obj1.get());        
    }
}
