function valueOfString(input){

    let sentance = input[0];
    let command = input[1];
    let capSum = 0;
    let lowSum = 0;


    for (let i = 0; i < sentance.length; i++) {
        let element = sentance[i];
        
        if(element.charCodeAt() >= 65 && element.charCodeAt() <=90){
            capSum += Number(element.charCodeAt());
        } else if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122){
            lowSum += Number(element.charCodeAt());
        }
        
    }

   if(command === 'LOWERCASE'){
    console.log(`The total sum is: ${lowSum}`);
   } else {
    console.log(`The total sum is: ${capSum}`);
   }

}

valueOfString([
               'HelloFromMyAwesomePROGRAM',
               'LOWERCASE'])