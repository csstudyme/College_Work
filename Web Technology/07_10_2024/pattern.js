  
var brag = (num) => {
    for( i= num; i >= 1; i--){
        for(j = i; j<num; j++){
            process.stdout.write(" ")
        }
        for(k=1; k <= (2*i)-1; k++ ){
            if(k%2==0){
                process.stdout.write(" ")
            }else{
                process.stdout.write("*")
            }
        }
        console.log()
    }
}
brag(3)