function intAndFloat(num1,num2,num3){   

    let res = num1 + num2 + num3;
    let resToString = String(res);
    let isFalse = false;
    for (let i =0; i< resToString.length; i++){
        if(resToString[i] === "."){
            isFalse = true; 
        }
    }

    console.log(`${res} - ${isFalse ? "Float" : "Integer"}`); 

}


intAndFloat(9,100,1.1)