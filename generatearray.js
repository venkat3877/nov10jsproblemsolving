var arr=new Array()
function generatearray(num1,num2){
    for( let i=num1;i<=num2;i=i+1){
        arr.push(i)
    }
    return arr
    

}

console.log(generatearray(1,5))