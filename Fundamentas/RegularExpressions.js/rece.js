// function race(input){

//     let nameMap = new Map();
//     let names = input.shift().split(', ');

//     names.forEach(person => {
//         nameMap.set(person,0)
//     });

//     let letterPattern = /[A-Za-z]+/gm
//     let digitsPattern = /\d+/g ;

//     for(let index = 0; index<input.length;index++){
//         let currentLine = input[index] ;
//         if(currentLine === 'end of race'){
//             break;
//         }

//         let name = currentLine.match(letterPattern).join('');
//         let distance = currentLine.match(digitsPattern).reduce((a,b)=> {
//             return Number(a) + Number(b)
//         });

//         if(nameMap.has(name)){

//             let prevDistance = nameMap.get(name);
//             prevDistance+= distance;
//             nameMap.set(name, prevDistance)

//         }        

//     }

//     let sortedNames = Array.from(nameMap).sort((a,b) =>{
//         return b[1] - a[1];
//     });

  
//     let winners = sortedNames.slice(0,3);
//     // winners.forEach(el => console.log(el))
//     console.log(`1st place: ${winners[0][0]}`);
//     console.log(`2nd place: ${winners[1][0]}`);
//     console.log(`3rd place: ${winners[2][0]}`);


// }

solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])



function solve(input) {
    let participants = input.shift().split(', ')
    let line = input.shift();
    let partsObj = {}
    while (line !== 'end of race') {
        let patternName = /[A-Za-z]/g;

        let name = line.match(patternName).join('')

        let patternDistance = /[0-9]/g;

        let distance = line.match(patternDistance).join('')
        let distanceSum = 0;
        for (let i = 0; i < distance.length; i++) {
            let digit = Number(distance[i])
            distanceSum += digit;
        }
        if (participants.includes(name)){
            if (!partsObj.hasOwnProperty(name)) {
                partsObj[name] = distanceSum
            } else {
                partsObj[name] += distanceSum
            }
        }
        line = input.shift();
    }
    let partsArr = []
    for (let partName in partsObj) {
        partsArr.push([partName, partsObj[partName]])
    }
    partsArr.sort((a,b)=>b[1]-a[1])
    console.log(`1st place: ${partsArr[0][0]}`);
    console.log(`2nd place: ${partsArr[1][0]}`);
    console.log(`3rd place: ${partsArr[2][0]}`);
}