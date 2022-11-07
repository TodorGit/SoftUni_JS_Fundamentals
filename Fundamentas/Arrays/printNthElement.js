function NthElement(arr) {

    let NthStep = Number(arr[arr.length - 1]);
    let newArr = [];

    for (let i = 0; i <= arr.length; i += NthStep) {
        if (arr[i] != NthStep) {
            newArr.push(arr[i]);
        } else {
            break;
        }


    }
    console.log(newArr.join(" "));
}

NthElement(['5', '20', '31', '4', '20', '2'])