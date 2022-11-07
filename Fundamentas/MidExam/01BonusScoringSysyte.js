function bonusScoringSystem(data){

    let numberOfStudents = +data.shift();
    let numberOfLectures = +data.shift();
    let bonus = +data.shift();
    let index = 0; 
    let totalBonus = 0;
    let finalBonus = 0
    let finalAttendace = 0

    while( index < numberOfStudents){
        let currentAttendace = +(data[index]);
        totalBonus = currentAttendace / numberOfLectures * (5 + bonus);

        if(finalBonus < totalBonus){
            finalBonus = totalBonus
            finalAttendace = currentAttendace;
        }
        
        index++
    }

    console.log(`Max Bonus: ${Math.ceil(finalBonus)}.`);
    console.log(`The student has attended ${finalAttendace} lectures.`);

}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])