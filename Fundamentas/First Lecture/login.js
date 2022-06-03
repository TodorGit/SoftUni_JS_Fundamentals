function login(input){

    const userName = input[0];
    const password = (userName.split("").reverse().join(""));

    for (let i = 1; i < input.length; i++) {
        let currentValue = input[i];
        if(i==4 && password != currentValue){
            console.log(`User ${userName} blocked!`);
            break;
        } else if(i<=4 && password == currentValue){
            console.log(`User ${userName} logged in.`)
        } else if(i<=4 && password != currentValue){
            console.log(`Incorrect password. Try again.`);
        }
        
    }


}

login(['Acer','login','go','let me in','recA']);



// function reverseString(str) {
//   console.log(str.split("").reverse().join(""));
// }
// reverseString("hello");

// if(i<4){
//     if(password == currentValue ){
//         console.log(`User ${userName} logged in.`);
//     } else if(i <= 4 && currentValue != password){
//         console.log(`Incorrect password. Try agai.`);
//     }
// } else {
//     console.log(`User ${userName} blocked!`);
//     break;
// }