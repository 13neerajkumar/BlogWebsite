const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,
        default:new Date().toString()
    }
})

module.exports=new mongoose.model('Blog',BlogSchema);