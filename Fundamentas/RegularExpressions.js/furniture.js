function regEx(input){

    let text = input.join(' ');
    let furnitureArray = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let valid;

    while((valid = pattern.exec(text) ) !== null){

        let validName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);

        furnitureArray.push(validName);
        totalSum += validPrice * validQuantity;
    }

    console.log('Bought furniture:');
    furnitureArray.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

regEx(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])
