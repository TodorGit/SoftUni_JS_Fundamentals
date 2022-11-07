function shoppingList(array) {

    let shopList = array.shift().split('!');
    let index = 0;
    while (array[index] != 'Go Shopping!') {

        let currentValue = array[index].split(' ');
        let command = currentValue.shift();
        let product = currentValue.shift();
        let secondProduct = currentValue.shift();

        switch (command) {

            case 'Urgent':
                if (shopList.includes(product)) {
                    break;
                } else {
                    shopList.unshift(product);
                } break;
            case 'Unnecessary':
                if (shopList.includes(product)) {
                    let indxof = shopList.indexOf(product);
                    shopList.splice(indxof, 1);
                } else {
                    break;
                } break;
            case 'Correct':
                if (shopList.includes(product)) {
                    let indxof = shopList.indexOf(product);
                    shopList.splice(1, indxof, secondProduct);
                } else {
                    break;
                } break;
            case 'Rearrange':
                if (shopList.includes(product)) {
                    let indxof = shopList.indexOf(product);
                    let grocery = shopList.splice(indxof, 1);
                    shopList.push(grocery);
                } else {
                    break;
                }
        }


        index++;
    }

    console.log(shopList.join(', '));

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
