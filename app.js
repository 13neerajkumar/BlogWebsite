const express=require('express')
const mongoose=require('mongoose')
const app=express()

//MongoDB
mongoose.connect('mongodb://localhost/blog_app',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('Mongoose Connected')
})


// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/newblog'));
app.use(require('./routes/singleblog'));

//Server 
app.listen(3000,()=>
console.log('Server started at port 3000')
)