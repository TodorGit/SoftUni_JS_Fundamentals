function binToDec(binary) {

    let binaryStr = binary.toString();
    let dec = parseInt(binaryStr, 2);
    console.log(dec);
}
binToDec(00001001)