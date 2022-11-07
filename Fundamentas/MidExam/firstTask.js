function burgerBus(data){

    let cityNumber = data.shift(Number(data[0]));
    let city = '';
    let counter = 0

    for(let i = 0; i < data.length;i+=3){
     let currentValue = data[i];
     let asci = Number(currentValue.charCodeAt(0));
        
for(let i = 0; i<data.length;i++){
    if(counter === cityNumber){
        break;
    }
    let currentValue = data[i];
    let asci = Number(currentValue.charCodeAt(0));
    if (Number(asci) > 65 && Number(asci) <= 90
        || Number(asci) > 97 && Number(asci) <= 122) {
         city = currentValue;
         counter++;
    } else if(asci > 47 && asci < 58){
        let income = Number(data[i]);
        let expenses = Number(data[i+1]);
    }
    
}

    

    }
  
    }


burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"]);





// {}

// let currentValue = data[i]
// let asciNum = Number(currentValue.charCodeAt(0));
// if (Number(asciNum) > 65 && Number(asciNum) <= 90
//     || Number(asciNum) > 97 && Number(asciNum) <= 122){
//      city = String(currentValue);
//      count++;
// } else if(asciNum > 47 && asciNum < 58){


//     income = Number(currentValue);

//     if(expenses === income){
//         expenses = Number(currentValue);
//     };
// }



// console.log(city);
// console.log(income);
// console.log(expenses);



// }}

// if(currentValue === city){
//     continue;
// }
// else if(currentValue !== city){
//     num = Number(currentValue);

//     if(currentValue != num){
//         num2 = currentValue;
//     }