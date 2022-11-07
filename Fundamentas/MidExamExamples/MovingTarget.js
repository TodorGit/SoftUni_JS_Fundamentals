// function movingTarget(array) {
//     let index = 0;
//     let targetsArray = array[0].split(' ').map(el => Number(el));
//     array.shift();


//     while (array[index] != 'End') {
//         let currentElement = array[index].split(' ');
//         let command = currentElement.shift();
//         let commandIndex = Number(currentElement.shift());
//         let valueToReduce = Number(currentElement.shift());


//     switch (command) {
//         case 'Shoot':

//                 if (commandIndex <= array.length) {
//                     for (let i = 0; i < targetsArray.length; i++) {
//                         if (i === commandIndex) {
//                             let value = targetsArray.splice(i, i);
//                             value -= valueToReduce;
//                             targetsArray.splice(i, 1, value);

//                             if(value <= 0){
//                                 targetsArray.splice(i, i);
//                             }
//                         }

                        
//                     }
//                 }
//              break;
//         case 'Add': 
//                 if(commandIndex <= array.length){


//                 }

      
//     }
//     index++
// }
// }

function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(" ").map(Number);
    while (input.length > 0) {
      let command = input.shift();
  
      if (command == "End") {
        break;
      }
      let curCommand = command.split(" ")[0];
      switch (curCommand) {
        case "Shoot":
          let indexOfShoot = Number(command.split(" ")[1]);
          let power = Number(command.split(" ")[2]);
          if (indexOfShoot >= 0 && indexOfShoot < sequenceOfTargets.length) {
            sequenceOfTargets[indexOfShoot] -= power;
            if (sequenceOfTargets[indexOfShoot] <= 0) {
              sequenceOfTargets.splice(indexOfShoot, 1);
            }
          }
          break;
        case "Add":
          let indexOfAdd = Number(command.split(" ")[1]);
          let value = Number(command.split(" ")[2]);
          if (indexOfAdd >= 0 && indexOfAdd < sequenceOfTargets.length) {
            sequenceOfTargets.splice(indexOfAdd, 0, value);
          } else {
            console.log(`Invalid placement!`);
          }
          break;
        case "Strike":
          let indexOfStrice = Number(command.split(" ")[1]);
          let radius = Number(command.split(" ")[2]);
          if (indexOfStrice >= 0 && indexOfStrice < sequenceOfTargets.length) {
            if (
              indexOfStrice - radius >= 0 &&
              indexOfStrice + radius < sequenceOfTargets.length
            ) {
              sequenceOfTargets.splice(
                indexOfStrice - radius,
                radius + radius + 1
              );
            } else {
              console.log(`Strike missed!`);
            }
          }
          break;
      }
    }
  
    console.log(sequenceOfTargets.join("|"));
  
    function shootCommand(arr, index, power) {
      let curItem = arr[index];
      let itemForRemove = arr[index];
  
      if (curItem == undefined) {
        return arr;
      }
      if (index <= arr.length - 1) {
        curItem = curItem - power;
      }
      if (curItem <= 0) {
        arr = arr.filter((x) => x != itemForRemove);
      } else {
        arr[index] = curItem;
      }
      return arr;
    }
  }

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
    ;