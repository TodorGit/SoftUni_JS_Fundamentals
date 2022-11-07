function emojiDetector(input){

    let str = input.shift();
    let digitPattern = /\d/gm
    let emojiPattern = /(::|\*\*)([A-z][a-z]{2,})\1/gm
    let coolFactor = 1;
    let emojies = [];
    let tempFactor = 0;

    let numFound = str.match(digitPattern);
    
    if(numFound){
        numFound.forEach((el) => {
            coolFactor *= el
        })
    }

    let emojiFound = str.match(emojiPattern);
    
    if(emojiFound){
        emojiFound.forEach(el =>{
           let emoji =  el.substring(2, el.length - 2);
           
           for(let el of emoji){

            let temp = el.charCodeAt()
            tempFactor += Number(temp)
           }
           

           if(tempFactor >= coolFactor){
            emojies.push(el);
            tempFactor = 0
           }
          
            
        })


      console.log(`Cool threshold: ${coolFactor}`);
      console.log(`${emojiFound.length} emojis found in the text. The cool ones are:`);
      for(let em of emojies){
        console.log(em.trim())
      }
    }

   

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

