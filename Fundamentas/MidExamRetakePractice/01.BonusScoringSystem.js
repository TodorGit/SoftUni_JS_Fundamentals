function bonusSystem(data){

    let stuNumber = +data.shift();
    let totalLectures = +data.shift();
    let bonus = +data.shift();
    let totalBonus = 0;
    let bestAttendance = 0;
    

    for(let element of data){
        let cutStattendance = +element;

        let maxBonus = cutStattendance / totalLectures * (5 + bonus);
       
        if(totalBonus < maxBonus){
            totalBonus = maxBonus;
            bestAttendance = cutStattendance;
        }
        

    }
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${bestAttendance} lectures.`);


}

// bonusSystem([
//     '5',  '25', '30',
//     '12', '19', '24',
//     '16', '20'
//   ])

  bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )