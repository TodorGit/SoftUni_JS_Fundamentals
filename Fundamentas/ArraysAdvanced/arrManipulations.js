function arrManipulations(arr){

    let myArr = arr.shift().split(' ').map(Number);

    for(let i = 0; i<arr.length;i++){

        let [command, firstNum, secondNum] = arr[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add': myArr.push(firstNum);break;
            case 'Remove': myArr = myArr.filter(el => el !== firstNum);break;
            case 'RemoveAt': myArr.splice(firstNum,1);break;
            case 'Insert': myArr.splice(secondNum,0,firstNum);

        }
        

    }

    console.log(myArr.join(' '));


}

arrManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

)