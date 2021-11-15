function primeornot(num){
    let flag=0
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag=flag+1
        }
    }
    if(flag){
        console.log( num+" is  not a prime number")
    }else{
        console.log( num+" is a prime number")
    }

}

primeornot(99)