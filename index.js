const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req,res)=>{
    console.log(req.ip);

    res.send('we are in Admin Dashboard')
});

app.use('/admin',adminRoute);


app.get('/user/:id',(req,res)=>{
    console.log(req.query);
  
    res.send("hello nuist")
});

app.post('/user/', (req, res)=>{
    console.log(req.secure);
    res.send('Hellow world post')
})

app.listen(3001,()=>{
    console.log('listen port 3001')
})