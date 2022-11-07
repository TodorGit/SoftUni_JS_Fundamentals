function convertToObjects(name,lastName,hairColor){

    let result = {
        name,
        lastName,
        hairColor
    }

    let resAsString = JSON.stringify(result);
    console.log(resAsString);
}

convertToObjects();