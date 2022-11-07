function sorting(arr){

    let updatedArr = [];
    let ascending =  arr.sort((a,b) => a-b);

    while(ascending.length !== 0){
        updatedArr.push(ascending[ascending.length-1]) && ascending.pop();
        updatedArr.push(ascending[0]) && ascending.shift();
      }

      console.log(updatedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);