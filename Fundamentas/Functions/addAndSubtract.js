function main(first,second,third){

    let sumFirstAndSecond = sum(first,second)

    function sum(first,second){
        return first + second
    }

    function subtract(firstResult, thirdNumber){
        return sumFirstAndSecond - thirdNumber
    }

console.log(subtract(sumFirstAndSecond, third))

}

main(23,6,10)