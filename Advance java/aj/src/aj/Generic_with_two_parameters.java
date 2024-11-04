package aj;

class prac2<T1, T2> {
    T1 obj1;
    T2 obj2;

    prac2(T1 obj1, T2 obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
    }

    public T1 getFirst() {
        return obj1;
    }

    public T2 getSecond() {
        return obj2;
    }
}

public class Generic_with_two_parameters {

    public static void main(String[] args) {
        prac2<Integer, String> obj = new prac2<>(1, "Ajay");

        System.out.println(obj.getFirst());
        System.out.println(obj.getSecond());
    }
}
