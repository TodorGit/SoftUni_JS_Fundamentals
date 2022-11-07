let express = require('express');
let app = express();

let data = {

    "001": "cat",
    "002": "dog",
    "003": "fish"
}


app.listen(3000, () => console.log("Server Started"))
app.get('/', (req, res) => {
    res.send(`<h1>My Shopo</h1>
              <a href = "/catalog">Catalog</a>
              <button>My button</button>
              <p>author : Todor </p>  

            `)
    
});

app.get('/catalog', (req, res) =>{
    let buff = ''
    for(let [key, value] of Object.entries(data)){
        buff += `<li><a href = "/catalog/${key}"> ${value}</a></li>`
    }
    res.send(`
            
            <h1>My Catalog</h1>
            <ul>    
                ${buff}
            </ul>
            <a href = "/"> Home </a>
    `)
})

app.get('/catalog/:categoryID', (req, res) => {
    let key = req.params.categoryID;
    console.log(req.params.categoryID);
    res.send(`
    <h1>My ${data[key]} Info</h1>
    <p>age</p>
    <p>gender</p>
    <a href = "/catalog"> Catalog </a>
    `)
})

