function reqReading(pageNumber, pagesReadPerHour, daysToFinish){
    let hoursNeededPerBook = pageNumber / pagesReadPerHour;
    let reqHoursPerDay = hoursNeededPerBook / daysToFinish;

    console.log(reqHoursPerDay);

}

reqReading(212,20,2)