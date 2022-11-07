function flightSchedule(arr){
    let flights = {}
    let command = String(arr.pop());
    let flightStatus = arr.pop();
    let flightsArray = arr.pop();
    
    flightsArray.forEach(el => {
    let [flightNumber, destination] = el.split(' ');
    
        flights[flightNumber] = {
        Destination: destination,
        Status: 'Ready to fly'
        }

    });

   flightStatus.forEach(el => {
    let [flightNumber, status] = el.split(' ');
    if(flights.hasOwnProperty(flightNumber)){
        flights[flightNumber].Status = status;
    }
   });

   
   for(let flight in flights){
    if(flights[flight].Status === command){
        console.log(flights[flight]);
    }
   }


}

flightSchedule([
['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)