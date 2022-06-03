function rightPlace(arg1, arg2, arg3) {

    let res = "";

    for (let i = 0; i < arg1.length; i++) {
        let currentValue = arg1[i];

        if (currentValue == "_") {
            res += arg2;
        } else {
            res += currentValue;
        }
    }

    if (res === arg3) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace("Str_ng", "I", "Strong")