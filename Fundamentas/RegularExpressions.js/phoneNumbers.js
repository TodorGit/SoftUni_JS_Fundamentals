function validNumbers(numbers){

    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g
    let res = [];
    let phoneList = numbers[0];
    let match = pattern.exec(phoneList)
    while(match !== null){

        res.push(match[0]);

        match = pattern.exec(phoneList);
    }

    console.log(res.join(', '));
}

    function solve(dates) {
    
        let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
        let validDate = [];
    
    
        while((validDate=pattern.exec(dates)) !== null) {
            let day = validDate.groups['day'];
            let month = validDate.groups['month'];
            let year = validDate.groups['year'];
            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        }
    
    
    }

solve('13/Jul/1928, 10-Nov-1934, 25.Dec.1937')