function shopping(data){

    let groceries = data.shift().split('!');

    for(element of data){
        if(element === 'Go Shopping!'){
            break;
        }

       
        let [command, indexOne, indexTwo] = element.split(' ');

        switch(command){

            case 'Urgent':
                if(!groceries.includes(indexOne)){
                    groceries.unshift(indexOne);
                }break;
            case 'Unnecessary':
                if(groceries.includes(indexOne)){
                    let index = groceries.indexOf(indexOne);
                    groceries.splice(index, 1);
                }break;
            case 'Correct':
                if(groceries.includes(indexOne)){
                    let index = groceries.indexOf(indexOne);
                    groceries[index] = indexTwo;
                }break;
            case 'Rearrange':
                if(groceries.includes(indexOne)){
                    let index = groceries.indexOf(indexOne);
                    let item = groceries.splice(index, 1);
                    groceries.push(item);
                }break;
            default: 
                break;
        }
    }

    console.log(groceries.join(', '));

}

shopping(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

shopping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
