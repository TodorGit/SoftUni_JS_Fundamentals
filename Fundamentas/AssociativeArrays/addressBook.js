function addressBook(data){

    let result = {};

    for(let line of data){
        let [name, address] = line.split(':');
        result[name] = address;
        }
    
    let entries = Object.entries(result);
    let sorted = entries.sort(([keyA,valueA], [keyB, valueB]) =>{
        return keyA.localeCompare(keyB);
    });
    
    //Second way to sort
    // let unsortedKey = Object.keys(result);
    // let sorted = unsortedKey.sort((a,b) => a.localeCompare(b));

    // for(let key of sorted){
    //     console.log(key);
    // }

    for(let [name, address] of sorted){
        console.log(`${name} -> ${address}`);
    }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])