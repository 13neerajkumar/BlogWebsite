const router=require('express').Router()
const blog = require('../models/blog')


router.get('/',async(req,res)=>{

    const allblogs=await blog.find();
   // console.log(allblogs);
    res.render('index',{blogs:allblogs})
})

module.exports=router;