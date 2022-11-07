function companyUsers(data){

    let result = {};

    for(let el of data){
        let token = el.split(' -> ');
        let company = token[0];
        let empNumber = token[1];
        
        if(!result.hasOwnProperty(company)){
            result[company] = [];
        } 
        result[company].push(empNumber);

    }

    let sortedResult = Object.entries(result);
    sortedResult.sort((a,b) => a[0].localeCompare(b[0]))

   for([key, value] of sortedResult){
        console.log(`${key}`);
        let set = new Set(value);
        for(let el of set){
            console.log(`-- ${el}`);
        }
   }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])