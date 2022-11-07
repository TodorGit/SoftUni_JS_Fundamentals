function minerTask(data){

let result = {};

for(let i = 0; i < data.length; i+=2){
    let type = data[i];
    let value = Number(data[i+1]);

    if(!result.hasOwnProperty(type)){
        result[type] = 0
    }
    result[type] += value;


}


for(let el in result){
    console.log(`${el} -> ${result[el]}`);
}

}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])


    // function aMinerTask(input) {

    //     let collection = {};
    
    //     for (let i = 0; i < input.length; i += 2) {
    //         let resource = input[i];
    //         let quantity = Number(input[i + 1]);
    
    //         if (!collection.hasOwnProperty(resource)) {
    //             // no need for Array, directly assign 0 to given resource
    //             // and later on add quantity to that resource
    //             collection[resource] = 0;
    //         }
    
    //         collection[resource] += quantity;
    
    //         // if (!collection[resource].includes(quantity)) {
    //         //     collection[resource].push(quantity);
    //         // }
    
    //         // if (collection[resource].includes(quantity)) {
    //         //     quantity += quantity;
    //         // }
    //     }
    
    //     for (let item in collection)
    //         console.log(`${item} -> ${collection[item]}`);
    // }

    // aMinerTask([
    //     'Gold',
    //     '155',
    //     'Silver',
    //     '10',
    //     'Copper',
    //     '17'
    //     ])

