function train(arr) {


    let passangers = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commandNum = arr[i].split(' ');
        if (commandNum[0] === 'Add') {
            passangers.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passangers.length; a++) {
                if (Number(commandNum[0]) + passangers[a] <= maxCapacity) {
                    passangers[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }


    console.log(passangers.join(' '));

}

train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])