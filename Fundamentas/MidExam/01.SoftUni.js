function reception(data){

    let firstEmpl = data.shift();
    let secondEmpl = data.shift();
    let thirdEmpl = data.shift();
    let totalPerHour = firstEmpl + secondEmpl + thirdEmpl;
    let hours = 0;

    
    while(data > 0 ){

        data - totalPerHour;
        hours++;

    }
    console.log(hours);

}

reception(['5','6','4','20']);