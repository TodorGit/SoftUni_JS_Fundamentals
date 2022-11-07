function nonDecSubset(arr) {

    let newArr = [];
    let biggest = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if(current < biggest){
            continue
        } else if(biggest >= current){
              newArr.push(biggest)        
        }  else {
              newArr.push(current);
              biggest = current;
          }

    }

    console.log(newArr.join(" "));

}

nonDecSubset([ 20, 3, 2, 15, 6, 1]);

// if(current < biggest){
//     continue;
//  }
//  if else(biggest >= current){
//      newArr.push(biggest);
//  } 
//  else {
//      newArr.push(current);
//      biggest = current;
//  }