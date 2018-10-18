const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getDate',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalText',(text)=>{
    return text.toUpperCase();
});
app.set('view engine','hbs');
// app.use((req,res,next)=>{
//     var now =new Date().toString();
//     var log=`${now}:${req.method} ${req.url}`;
//     fs.appendFileSync('server.log',log +'\n');
//     next();
// });

app.use((req,res,next)=>{
    res.render('maintenance.hbs')
});
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        welcomeMsg:'Welcome to express Web services',
        pageTitle:'Home'
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About'
    });
    // res.render('about.hbs');
});
app.get('/bad',(req,res)=>{
    res.send({
        Error:'something went wrong'
    });
});
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
});