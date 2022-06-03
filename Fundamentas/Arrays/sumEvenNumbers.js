function sumEvenNumbers(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i]);
    }


    for(num of nums){
        if(num % 2 == 0){
            sum+= num;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])