function worldTour(data){

    let destination = data.shift();
    let line = data.shift()

    while(line !== 'Travel'){


        let [command, indexOne, indexTwo] = line.split(':');
        
        switch(command){
            case 'Add Stop': 
                indexOne = Number(indexOne)
                if(indexOne > 0 || indexOne <= destination.length){
                    let firstPart = destination.slice(0,indexOne);
                    let secondPart = destination.slice(indexOne, destination.length)
                    destination = firstPart + indexTwo + secondPart;
                    console.log(destination);
                }  break;
            case 'Remove Stop':
                
                if(indexOne >= 0 || indexOne <= destination.length || indexTwo >= 0 || indexTwo <= destination.length){
                    let subStr = destination.substring(Number(indexOne), Number(indexTwo) + 1 );
                    destination = destination.replace(subStr, '');
                    console.log(destination);
                } else{
                    console.log(destination);
                } break;
            case 'Switch':

                if(destination.includes(indexOne)){
                    let oldStr = new RegExp(indexOne);
                    destination = destination.replace(oldStr, indexTwo);
                    console.log(destination);
                } else{
                    console.log(destination);
                } break;
            default:
                break; 
        }

        line = data.shift()
    }


    console.log(`Ready for world tour! Planned stops: ${destination}`);

}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
