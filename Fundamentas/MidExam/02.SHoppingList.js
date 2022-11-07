function shopping(data){

    let arr = data.shift().split('!');
  

    for(let el of data){
        if(el === 'Go Shopping!'){
            break;
        }

        let [command, grocery , newItem] = el.split(' ');

        switch(command){
            
            case 'Urgent':
                 if(!arr.includes(grocery)){
                arr.unshift(grocery);
                 }break;
            case 'Unnecessary':
                 if(arr.includes(grocery)){
                    let index = arr.indexOf(grocery);
                    arr.splice(index, 1);   
                 }break; 
            case 'Correct':
                if(arr.includes(grocery)){
                    let index = arr.indexOf(grocery); 
                    arr.splice(index, 1, newItem); 
                }break;
            
            case 'Rearrange':
                if(arr.includes(grocery)){
                    let index = arr.indexOf(grocery);
                    let item = arr.splice(index, 1); 
                    arr.push(item);
                }break;
                
            default : break ;
            
        }

    }

    console.log(arr.join(', '));

}

// shopping(["Tomatoes!Potatoes!Bread",
//           "Unnecessary Milk",
//           "Urgent Tomatoes",
//           "Go Shopping!"]);

shopping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

