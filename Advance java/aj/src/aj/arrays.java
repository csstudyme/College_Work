package aj;

public class arrays {

	public static void main(String[] args) {
		int[] arr = {0,1,2,3,4,5,6,7,8,9};
		
		System.out.println("Print elemt of array using for each loop ");
		
		for (int element : arr) {
			System.out.print(element + " ");
		}
		System.out.println();
		System.out.println("Print elemt of array using for loop ");
		
		for (int i =0; i<arr.length; i++) {
			
			System.out.print(arr[i] + " ");
		}
	}

}
