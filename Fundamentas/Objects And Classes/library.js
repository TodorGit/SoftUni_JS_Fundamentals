function dict(arr){

    let dictionary = {};


    //Parse and combine into One object!
    arr.forEach(el => {
     let obj = JSON.parse(el);
     dictionary = Object.assign(dictionary, obj);

    });

    //Sort alphabeticaly 
    let keySort = Object.keys(dictionary);
    keySort.sort((a,b) => a.localeCompare(b));


    keySort.forEach(el =>{
        let def = dictionary[el]
        console.log(`Term: ${el} => Definition: ${def}`);
    })
 


}









dict([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])