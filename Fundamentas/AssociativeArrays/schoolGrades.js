function schoolGrade(data) {

    let result = new Map();
    for (let line of data) {
        let tokens = line.split(' ');

        let name = tokens.shift()
        let setOfgrade = tokens;

        if (!result.has(name)) {
            result.set(name, setOfgrade);
        } else {
            let oldSet = result.get(name);
            for (let grade of setOfgrade) {
                oldSet.push(grade);
            };
            result.set(name, oldSet);
        }
    }

    let sorted = Array.from(result.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    })

    for (let [key, value] of sorted) {
        let sumGrade = 0;
        for (grade of value) {
            sumGrade += Number(grade);
        }
        let avg = sumGrade / value.length
        console.log(`${key}: ${avg.toFixed(2)}`);
    }
}

schoolGrade(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);