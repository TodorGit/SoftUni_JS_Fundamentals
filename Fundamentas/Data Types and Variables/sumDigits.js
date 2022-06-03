function sumDigits(num) {

    let toStringNum = String(num);
    let sum = 0;;

    for (let i = 0; i < toStringNum.length; i++) {
        sum += Number(toStringNum[i])
    }

    console.log(sum);
}

sumDigits(245678)