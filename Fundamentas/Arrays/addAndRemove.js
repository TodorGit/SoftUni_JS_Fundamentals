function addAndRemove(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "remove") {
            newArray.pop();
        } else if (arr[i] === "add") {
            newArray.push(i + 1);
        }
    }

    if (newArray.length === 0) {
        console.log("Empty")
    } else {

        console.log(newArray.join(" "));
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])