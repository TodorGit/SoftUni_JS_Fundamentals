function centuriesToMinutes(centuries){
    let year = centuries*100;
    let day = Math.trunc(year*365.2422);
    let hours = day*24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${year} `+`years = ${day} `+`days = ${hours} `+`hours = `+`${minutes} minutes`);

}

centuriesToMinutes(1)