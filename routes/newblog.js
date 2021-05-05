const router=require('express').Router()
const blog=require('../models/blog')

router.get('/newblog',(req,res)=>{
    res.render('newblog')
})

router.post('/newblog',(req,res)=>{
    const {title,content} = req.body;

    if(!title || !content)
    {
        return res.send("Please enter the required fields")
    }

    const newblog=new blog({title,content})
    //Save blog
    newblog.save().then(()=>{
        console.log("Blog Saved")
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })

}),

module.exports=router;