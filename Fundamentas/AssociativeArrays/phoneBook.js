function phoneBook(arr){

    let phoneBooks = {};

    for( let el of arr){
        let tokens = el.split(' ');
        let name = tokens[0];
        let number = tokens[1];

        phoneBooks[name] = number;
    }

   for(let key in phoneBooks){
    console.log(`${key} -> ${phoneBooks[key]}`);
   }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);