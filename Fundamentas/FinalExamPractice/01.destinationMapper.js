function destionation(input){

    let destinations = [];
    let regex = /[=\/][A-z][A-za-z]{2,}[=\/]/gm
    let travelPoints = 0; 

    let found = input.match(regex);
 
    if(found){
        found.forEach((el, i) =>{
            if(el[0] === el[el.length - 1]){
                el = el.substring(1, el.length - 1);
                travelPoints += Number(el.length);
                destinations.push(el)
            }
        })
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
    

}

destionation("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");