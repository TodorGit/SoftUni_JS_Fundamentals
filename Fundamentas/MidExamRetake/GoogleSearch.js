function googleSearch(data){

    let singleSearchIncome = Number(data.shift());
    let oldSum = singleSearchIncome;
    let userNumber = Number(data.shift());
    let sum = 0;
    let userCount = 0;

for(let i = 0; i < userNumber;i++){
    let currentSearches = Number(data[i]);
    userCount++;

    if(userCount % 3 === 0){
        singleSearchIncome *= 3;
        if(currentSearches > 5){
            singleSearchIncome *= 2;
            sum += singleSearchIncome * currentSearches
        } else if(currentSearches <= 1){
            continue;
        } else {
            sum += singleSearchIncome * currentSearches
        }
    } else {
        singleSearchIncome = oldSum;

        if(currentSearches > 5){
            sum += (singleSearchIncome * currentSearches) * 2;
        } else if(currentSearches <= 1){
            continue;
        } else {
            sum += singleSearchIncome * currentSearches
        }
    }
}
console.log(`Total money earned: ${sum.toFixed(2)}`);

}

googleSearch(["5.5",
"3",
"1",
"10",
"5"])

googleSearch(['0.5',"5","3","5","16","0","6","1"])
googleSearch(['3.0',"7","0","1","2","3","4","6", "15"])



// for(let i = 0; i < userNumber;i++){
//     let currentSearches = Number(data[i]);
//     userCount++;

//     if(userCount % 3 === 0){
//         singleSearchIncome*= 3

//         if(currentSearches <= 1){
//             continue;
//         } else if(currentSearches > 5){
//             sum += (singleSearchIncome * 2) * currentSearches;
//         } else {
//             sum += currentSearches * singleSearchIncome;
//         }
//     } else {
//         if(currentSearches <= 1){
//             continue;
//         } else if(currentSearches > 5){
//             sum += (singleSearchIncome * 2) * currentSearches;
//         } else {
//             sum += currentSearches * singleSearchIncome;
//         }
//     }
//     singleSearchIncome = oldSum;
// }

// console.log(`Total money earned: ${sum.toFixed(2)}`);