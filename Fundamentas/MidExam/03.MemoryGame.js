function memoryGame(input) {

    let sequence = input.shift().split(' ');
    let count = 0;
    let index = 0;
    let middle = (sequence.length / 2) - 1;


    while (input[index] !== 'end') {
        let length = sequence.length;
        let currentEl = input[index];
        let indexOne = Number(currentEl[0])
        let indexTwo = Number(currentEl[1])
        count++
        if (indexOne === indexTwo || indexOne < 0 || indexOne >= length || indexTwo < 0 || indexTwo >= length) {
            sequence.splice(middle, 2, `-${count}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } 

        if (sequence[indexOne] === sequence[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${sequence[indexOne]}!`);
            sequence.splice(indexOne, 1);
            sequence.splice(indexTwo, 1);

        } else if (sequence[indexOne] !== sequence[indexTwo]) {
            console.log('Try again!');
        }

        if (length === 0) {
            console.log(`You have won in ${count} turns!`);
        }

        index++
    }

}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"])