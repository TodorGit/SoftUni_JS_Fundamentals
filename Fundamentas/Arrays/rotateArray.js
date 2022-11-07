function rotateArray(arr) {

    let rotations = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 1; i <= rotations; i++) {
        let elementToMove = arr.pop();
        arr.unshift(elementToMove);
    }

    console.log(arr.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])