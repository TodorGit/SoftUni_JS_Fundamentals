function addAndSubstract(input) {

    let inputLength = input.length;
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < inputLength; i++) {

        originalSum += input[i];
        if (input[i] % 2 == 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
        newSum += input[i];

    }

    console.log(input);
    console.log(originalSum);
    console.log(newSum);
}

addAndSubstract([5, 15, 23, 56, 35])