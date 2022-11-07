function memory(data){

    let nums = data.shift().split(' ');
    let moves = 0;
    let middle = (nums.length / 2) - 1;
    for(el of data){
        if(el === 'end'){
            break;
        }
        let curEl = el.split(' ')
        let length = nums.length
        moves++
        let indexOne = Number(curEl[0]);
        let indexTwo = Number(curEl[1]);

        if (indexOne === indexTwo || indexOne < 0 || indexOne >= length || indexTwo < 0 || indexTwo >= length) {
            nums.splice(middle, 2, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } 

        if(nums[indexOne] === nums[indexTwo]){
            let element = nums[indexOne]
            console.log(`Congrats! You have found matching elements - ${element}!`);
            nums.splice(indexOne, 1);
            nums.splice(indexTwo, 1);

        } else if (nums[indexOne] !== nums[indexTwo]) {
            console.log("Try again!");
        }

        if(nums.length === 0){
            console.log(`You have won in ${moves} turns!`);
        }

    }

    console.log(`Sorry you lose :(`);
    console.log(nums);

}

memory( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )