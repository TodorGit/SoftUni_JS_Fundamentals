function evenAndOddSubtraction(nums){
    let sum = 0;
    let sumOdd = 0;
    for(let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i]);
    }


    for(num of nums){
        if(num % 2 == 0){
            sum+= num;
        } else {
            sumOdd += num;
        }
    }
    console.log(sum - sumOdd);
}


evenAndOddSubtraction([1,2,3,4,5,6]);