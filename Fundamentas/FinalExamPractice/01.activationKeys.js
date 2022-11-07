function activationKeys(data){

    let actKey = data.shift();

    for(let element of data){
        if(element === 'Generate'){
            break;
        }

        let [command, indexOne, indexTwo, indexThree] = element.split('>>>');
        
        if(command === 'Contains'){
            if(actKey.includes(indexOne)){
                console.log(actKey);
            } else{
                console.log(`Substring not found!`);
            }
        } else if(command === 'Slice'){
            let firstPart = actKey.substring(0,indexOne);
            let secondPart = actKey.substring(indexTwo, actKey.length);
            actKey = firstPart + secondPart;
            console.log(actKey);
            
        } else if(command === 'Flip'){
            if(indexOne === 'Upper'){
                let firstpart = actKey.substring(0,indexTwo);
                let secondPart = actKey.substring(indexThree, actKey.length);
                let temp = actKey.substring(indexTwo, indexThree).toUpperCase();
                actKey = firstpart + temp + secondPart;
                console.log(actKey);
            } else if(indexOne === 'Lower'){
                let firstpart = actKey.substring(0,indexTwo);
                let secondPart = actKey.substring(indexThree, actKey.length);
                let temp = actKey.substring(indexTwo, indexThree).toLowerCase();
                actKey = firstpart + temp + secondPart;
                console.log(actKey);
            }
        }

    }

    console.log(`Your activation key is: ${actKey}`);

}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])



// function solve(input) {
//     let activationKey = input.shift();
   
//     for (let i = 0; i < input.length; i++) {
//       let [command, firstArgument, secondArgument, thirdArgument] = input[
//         i
//       ].split(">>>");
   
//       switch (command) {
//         case "Contains":
//           if (activationKey.includes(firstArgument)){
//             console.log(`${activationKey} contains ${firstArgument}`);
//           } else {
//             console.log("Substring not found!");
//           }
//           break;
//         case "Flip":
//           let temp1 = "";
//           let ind2 = Number(secondArgument);
//           let ind3 = Number(thirdArgument);
//           let replaced = activationKey.substring(ind2, ind3);
//           if (firstArgument === "Upper") {
//             temp1 = activationKey.substring(ind2, ind3).toUpperCase();
//             activationKey = activationKey.replace(replaced, temp1);
//             console.log(activationKey);
//           } else if (firstArgument === "Lower") {
//             temp1 = activationKey.substring(ind2, ind3).toLowerCase();
//             activationKey = activationKey.replace(replaced, temp1);
//             console.log(activationKey);
//           }
//           break;
//         case "Slice":
//           let temp = "";
//           index1 = Number(firstArgument);
//           index2 = Number(secondArgument);
//           if (
//             (index1 && index2) >= 0 &&
//             (index1 && index2) < activationKey.length
//           ) {
//             temp = activationKey.substring(index1, index2);
//             activationKey = activationKey.replace(temp, "");
//           }
//           console.log(activationKey);
//           break;
//         case "Generate":
//           break;
//       }
//     }
//     console.log(`Your activation key is: ${activationKey}`);
//   }
