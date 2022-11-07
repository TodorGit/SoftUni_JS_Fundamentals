function schoolLibrary(data){

    let bookShelf =  data.shift().split('&');
    let index = 0;
    // let book = '';

    while(data[index] !== 'Done'){
        let current = data[index].split(' | ');
        let command = current.shift();
        let bookOne = current.shift();
        let bookTwo = current.shift();
        
        switch(command){
            case 'Add Book':
                if(bookShelf.includes(bookOne)){
                    index++
                    continue;             
                } else{
                    bookShelf.unshift(bookOne);
                } break;
            case 'Take Book':
                if(!bookShelf.includes(bookOne)){
                    index++
                    continue;
                } else{
                   let bookPosition = bookShelf.indexOf(bookOne);
                    bookShelf.splice(bookPosition,1);
                } break;
            case 'Swap Books':
                if(bookShelf.includes(bookOne) && bookShelf.includes(bookTwo)){
                    let bookPositionOne = bookShelf.indexOf(bookOne);                    
                    let bookPositionTwo = bookShelf.indexOf(bookTwo);
                    [bookShelf[bookPositionOne], bookShelf[bookPositionTwo]]=[bookShelf[bookPositionTwo], bookShelf[bookPositionOne]];
                } else{
                    index++
                    continue;
                } break;
            case 'Insert Book': 
                if(bookShelf.includes(bookOne)){
                    index++
                    continue;
                } else{
                    bookShelf.push(bookOne);
                } break;
            case 'Check Book':
                let num = Number(bookOne);
                if(num < bookShelf.length   && num > bookShelf.length){
                    index++
                    continue;
                } else {
                     console.log(bookShelf[num]);
                }
        }
        
        command = data[index];
        index++;
    }
    console.log(bookShelf.join(', '));
  
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])

console.log('-----------')

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]);

