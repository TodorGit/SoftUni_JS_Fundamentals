function garage(data){

    let result = {}; 

    for(let line of data){
        let [garageNum, carInfo] = line.split(' - ')

        result[garageNum] = {carInfo}; 

        if(result.hasOwnProperty(garageNum)){
            result[garageNum] += {carInfo}
        }

    }

    let resultArray = Object.entries(result);

    console.table(resultArray);
    
    for(let [garageNu, carInfos] in result){
        console.log(`Garage № ${garageNu} \n`);
        let set = new Set(carInfos);
        for(let line in set){
            console.log(`--- ${line}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])