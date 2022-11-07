function wordOccurrences(data){

    let result = new Map();

    for(el of data){
      if(result.has(el)){
        let oldValue = result.get(el);
        result.set(el, oldValue + 1);
      } else {
        result.set(el, 1);
      }
    }

    let filteredResult = Array.from(result).sort((a,b) => b[1] - a[1])

    for(let [key, value] of filteredResult){
        console.log(`${key} -> ${value} times`);
    }
    
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])