// function shoot(data){

// let targets = data.shift().split(' ');
// let length = +targets.length
// let shots = 0;
// for(let el of data){
//     if(el === ' End'){
//         break;
//     };

//     if(targets[el] === -1){
//         continue;
//     }

//     if(el < length){
//         targets[el] = -1;
//         shots++;

//         for(let line of targets){
//             if(line > targets[el]){
//                 line -= targets[el];
//             } else if( line <= targets[el]){
//                 line+= targets[el];
//             }
//         }
//     }
// }

// console.log(targets);


// }

// shoot(["24 50 36 70",
// "0",
// "4",
// "3",
// "1",
// "End"])
