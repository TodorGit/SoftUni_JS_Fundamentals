function numbers(seq) {

    let arrOfNumbers = seq.split(' ').map(Number);
    let sum = 0;

    for (let el of arrOfNumbers) {
        sum += el;
    }

    let avg = sum / arrOfNumbers.length;


    arrOfNumbers = arrOfNumbers
        .filter(el => el > avg)
        .sort((x, y) => y - x)
        .slice(0, 5);


    return arrOfNumbers.length > 0 ? arrOfNumbers.join(' ') : "No";


}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');