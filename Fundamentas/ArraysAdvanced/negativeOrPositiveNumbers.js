function negatioveOrPositiveNumber(arr){

    let result = [];
    
    for(let el of arr){
        if(el < 0){
            el = Number(el);

            result.unshift(el);
        } else { 
            result.push(el);
        }
    }

    console.log(result.join("\n"));

}

negatioveOrPositiveNumber(['7', '-2', '8', '9']);