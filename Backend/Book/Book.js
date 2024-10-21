const express = require('express')

const router = express.Router()
const Login = require('../Models/Login')
    
const Article = require('../Models/Article')

const {
    postLogin,
    postSignin,
    postArticle,
    getArticle,
}= require('../BookController/Controller')


router.post('/login',postLogin)
router.post('/',postSignin)

router.get('/article',getArticle)
router.post('/article',postArticle)



router.get('/:id',(req,res)=>{
    res.json({mssg:'This is get with id'})

})




router.delete('/article',async (req,res)=>{
    const { _id } = req.body;
    console.log(_id)
    const response = await Article.findOneAndDelete({_id:_id} );

    if (response == undefined){
        res.status(404).json({message:"Error Article has already been deleted"})
    }

    res.status(200).json({message:"Article Deletion successful"})

})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'This is patch'})

})



module.exports=router