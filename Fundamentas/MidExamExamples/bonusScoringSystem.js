function bonusSystem(data){

    let studentNumber = Number(data.shift());
    let lecturesNumber = Number(data.shift());
    let additionalBonus = Number(data.shift());
    let totalBonus = 0;
    let topAtendances = 0;

    for(let el in data){
     let studentAtendace = Number(data[el]);

     currentBonus = studentAtendace / lecturesNumber * (5 + additionalBonus);

     if(totalBonus < currentBonus){
        totalBonus = currentBonus;
        topAtendances = studentAtendace;
     }
     
    }

    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${topAtendances} lectures.`);

}

bonusSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);

  console.log('---------------------');
bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  