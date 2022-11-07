function modifier(data){

    let arr = data.shift().split(' ').map(Number);
    let updatedArr = [];
    for(let el of data){
        if(el === 'end'){
            break;
        } 
        
        let [command, indexOne, indexTwo] = el.split(' ')
    
        switch(command){
            case 'swap' : 
            [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]            
            break;
            case 'multiply' : 
            let res = arr[indexOne] * arr[indexTwo];
            arr.splice(indexOne,1,res)
            break;
            case 'decrease' : 
            for(el of arr){
                el -= 1;
                updatedArr.push(el);
            };
            break;

        }

    }

    console.log(updatedArr.join(', '));

}

modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
  