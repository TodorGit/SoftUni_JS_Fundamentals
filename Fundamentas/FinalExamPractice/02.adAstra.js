function adAstra(data){


    let str = data.shift()
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let items = [];
    let totalCal = 0;
    let exec = pattern.exec(str);

    while (exec) {
        items.push({ item: exec[2], day: exec[3], cal: exec[4] });
        totalCal += Number(exec[4])
        exec = pattern.exec(str);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    for (let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i].item}, Best before: ${items[i].day}, Nutrition: ${items[i].cal}`);
    }
    


}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])