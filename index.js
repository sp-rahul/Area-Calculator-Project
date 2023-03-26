const express = require('express')
const app = express();
const PORT = 8080;

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + "/triangle.html")
})

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + "/circle.html")
})

app.post('/triangle',(req,res)=>{
    let width = req.body.width;
    let height = req.body.height;

    let area = 0.5 * height * width;

    res.send(`<h1>The Area of Triangle is ${area}</h1>`);

})

app.post('/circle',(req,res)=>{
   
    let radius= req.body.radius
    let area = Math.PI *  radius * radius;
    res.send(`<h1>The area of Circle is ${area}</h1>`);
})


app.listen(PORT, ()=>{
    console.log(`Server is runnig at http://localhost:${PORT}`);
 });