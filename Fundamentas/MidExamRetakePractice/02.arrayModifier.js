function arrayModifier(input){

    let arr = [];
    arr.push(input[0]);
    let stringConvert = arr.toString();
    let myArray = [];
    myArray = stringConvert.split(" ")
    let array = []
    let index = '';
    let indexOne = '';
    let i = 0;
    while(input[i] != 'end'){
        let curValue = input[i];

        if(curValue.includes('swap')){
            array = curValue.split(" ");
            index = Number(array[1]);
            indexOne = Number(array[2]);
            [myArray[index], myArray[indexOne]] = [myArray[indexOne], myArray[index]]
        } else if(curValue.includes('multiply')){
            array = curValue.split(" ");
            index = Number(array[1]);
            indexOne = Number(array[2]);
            myArray[index]=myArray[index]*myArray[indexOne];
        } else if(curValue.includes('decrease')){
            for(let j = 0; j < myArray.length;j++){
                myArray[j]-= 1;
            }
        }
        i++
    }
    myArray = myArray.join(", ")
    myArray = myArray.toString();
    console.log(myArray);
}






// function modifier(data){

//     let initArray = data.shift().split(' ');
//     let finalArray = []
//     for(el of data){
//         if(el === 'end'){
//             break;
//         }

//         let tokens = el.split(' ')
//         let command = tokens[0];
//         let indexOne ;
//         let indexTwo
//         switch(command){

//             case 'swap':
//             indexOne = Number(tokens[1]);
//             indexTwo = Number(tokens[2]);
//             [initArray[indexOne], initArray[indexTwo]] = [initArray[indexTwo], initArray[indexOne]];
//             break;
//             case 'multiply':
//             indexOne = Number(tokens[1]);
//             indexTwo = Number(tokens[2]);
//             let newNum = +initArray[indexOne] * +initArray[indexTwo];
//             initArray.splice(indexOne, 1, newNum)
//             break;
//             case 'decrease':
//             initArray.forEach(el =>{
//                 el = el - 1
//                 finalArray.push(el)
//             });
//             break;
//             default:
//                 break;
//         }
//     }
//     console.log(finalArray.join(', '));

// }

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])

