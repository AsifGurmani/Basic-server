let http = require('http');
let express = require('express');

let app = express();
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res)=>{
    res.send(`
    <form action='enter' method='POST'>
        <p>gggwelcome to my own server</p>
        <input name="enter" >
        <button>Submit</button>
        
    </form>
    `)
})

app.post("/enter", (req, res)=>{
    console.log(req.body.enter)
    res.send(`
    <form action='enter' method='POST'>
        <h1>llllthanks for submiting the form</h1>
        <input name="enter" >
        <button>Submit</button>
    </form>
    `)
})



app.listen(3000)