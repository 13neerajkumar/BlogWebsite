const router=require('express').Router()
const blog=require('../models/blog')

router.get('/singleblog/:id',async(req,res)=>{
    const {id}=req.params;
    const getBlog=await blog.findOne({_id:id});
    res.render('detailblog',{blog: getBlog});
});

router.get('/delete/:id',(req,res)=>{

    const {id}=req.params;

    blog.deleteOne({_id:id})
    .then(()=>{
        console.log("Blog Deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});


router.get('/edit/:id',async(req,res)=>{

    const {id}=req.params;

    const getBlog=await blog.findOne({_id:id});
    res.render('editblog',{blog: getBlog});
});

router.post('/edit/:id',(req,res)=>{

    const {id}=req.params;
    const {title,content}=req.body;

    blog.updateOne({_id:id},{title,content})
    .then(()=>{
        console.log("Blog Updated")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports=router;