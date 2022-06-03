function reverseArray(n,num){
    let reverse = [];

    
    for(let r = n - 1 ;r >= 0; r--){
     reverse.push(num[r]);
    }
    console.log(reverse.join(" "));
}

reverseArray(3,[10,20,30,40,50]);