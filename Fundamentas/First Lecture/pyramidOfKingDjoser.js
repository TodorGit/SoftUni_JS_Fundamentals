function pyramidOfDjoser(base, increment){

    let stone = 0 ; 
    let marble = 0;
    let lapis_lazuli = 0;
    let gold = 0;

    for(let i = base - 2; i > 0; i-=2){
        stone += i * i * 1;
    }



    console.log(stone);
}

pyramidOfDjoser(11, 1)