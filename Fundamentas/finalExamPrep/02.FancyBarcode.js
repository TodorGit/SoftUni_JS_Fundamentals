function barcode(data){

    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    let n = Number(data.shift());
    for(let i =0; i < n; i++){
        let barcode = data[i];

        let match = pattern.exec(barcode);
        let concatenateDigits = '';
        let isValid = false;

        while(match !== null){
            isValid = true;
            let barcodeText = match[2];
            for(let ch of barcodeText){
                if(!isNaN(Number(ch))){
                    concatenateDigits+=ch;
                }
            }
            match = pattern.exec(barcode)
        }
        if(isValid){
            concatenateDigits = concatenateDigits !== '' ? concatenateDigits : '00'
            console.log(`Product group: ${concatenateDigits}`);
        } else {
            console.log('Invalid barcode');
        }
    }

}

barcode(["3",

"@#FreshFisH@#",

"@###Brea0D@###",

"@##Che4s6E@##"])