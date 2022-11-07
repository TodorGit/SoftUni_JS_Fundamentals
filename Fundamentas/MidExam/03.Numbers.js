function numbers(data){

    let arr = data.split(' ').map(Number);
    let avg = 0, sum = 0
    let newArr = [];
    arr.forEach(el =>{
        sum+= el;
    });
    avg = sum / arr.length;

    for(let el of arr){

        if(el > avg){
            newArr.push(el)
        }
    }

    newArr.sort((a,b) => b-a);
    let final = []

    for(let i = 0; i <= 4;i++){
        if(newArr[i] !== undefined){
            final.push(newArr[i])
        }
    }
    
    if(data.length <= 1){
        console.log(`No`);
    }else {
    console.log(final.join(' '));
    }

}

numbers('10 20 30 40 50')
console.log(`----------------`);
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log(`---------------`);
numbers('1')
console.log('----');
numbers('-1 -2 -3 -4 -5 -6');