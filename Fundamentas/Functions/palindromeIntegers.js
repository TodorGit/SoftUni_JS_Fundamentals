function palindromIntegers(element){

    for(let el of element){
        let currentElement = String(el);
        let reverseElement = String(el).split('').reverse().join('')

        if(currentElement === reverseElement){
            console.log('true');
        } else{
            console.log('false')
        }
    }

}

palindromIntegers([123,323,421,121]);