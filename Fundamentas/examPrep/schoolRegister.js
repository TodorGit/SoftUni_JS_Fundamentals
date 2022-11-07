// function schoolRegister(data){


//     let register = [];
//     let ninthGrade = [];
//     let sumNinth = 0;
//     let tenthGrade = [];
//     let sumTenth = 0;
//     let eleventhGrade = [];
//     let sumEleventh = 0;
//     let twelvedGrade = [];
//     let sumTwelved = 0;
    

//     data.forEach(el => {
//         let info = el.split(', ')
//         let stName = String(info.splice(0,1));
//         let stGrade = String(info.splice(0,1));  
//         let stScore = String(info.splice(0,1));
        
//         let [a, name] = stName.split(': ');
//         let [b, grade] = stGrade.split(': ');
//         let [c, score] = stScore.split(': ');

//        register.push({
//         Name : name,
//         CurrentGrade : +grade,
//         Score : +score
//        });
//     });


//     for( let student = 0 ; student < register.length; student++){
//         if(register[student].Score > 3){
//             register[student].CurrentGrade++
//         } else if (register[student].Score < 3) {
//             register.splice(student, 1);
//             student--;
//             continue;
//         }
        
//         if(register[student].CurrentGrade === 9){
//             ninthGrade.push(register[student].Name);
//             sumNinth += register[student].Score;

//         } else if(register[student].CurrentGrade === 10){
//             tenthGrade.push(register[student].Name);
//             sumTenth += register[student].Score;
        
//         } else if(register[student].CurrentGrade === 11){
//             eleventhGrade.push(register[student].Name);
//             sumEleventh += register[student].Score;
       
//         } else{
//             twelvedGrade.push(register[student].Name);
//             sumTwelved += register[student].Score;
    
//         }
        
    
//     }

//     console.log(register);

//     console.log(` Grade`);
//     console.log(`List of students: ${ninthGrade.join(', ')}`);
//     console.log(`Average annual score from last year: ${sumNinth / ninthGrade.length}`);
//     console.log('\n');
//     console.log(`${nextGrade} Grade`);
//     console.log(`List of students: ${tenthGrade.join(', ')}`);
//     console.log(`Average annual score from last year: ${(sumTenth / tenthGrade.length).toFixed(2)}`);
//     console.log();
//     console.log(`${nextGrade} Grade`);
//     console.log(`List of students: ${eleventhGrade.join(', ')}`);
//     console.log(`Average annual score from last year: ${(sumEleventh / eleventhGrade.length).toFixed(2)}`);
//     console.log();
//     console.log(`${nextGrade} Grade`);
//     console.log(`List of students: ${twelvedGrade.join(', ')}`);
//     console.log(`Average annual score from last year: ${(sumTwelved / twelvedGrade.length).toFixed(2)}`);
//     console.log();




// }

function schoolRegister(arr) {
    let schoolRegister = {};
    for (let line of arr) {
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        if (score > 3) {
            let student = {name, score};
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student);
        }
    }
    let sortedGrades = Object.keys(schoolRegister).sort((a,b) => a - b);
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])