const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const Login = require('../Models/Login')

const Article = require('../Models/Article')




const postSignin = async(req,res) => {
    const {Email,password} = req.body

    const hashpassword=await bcrypt.hash(password,10);

    try{
        const login = await Login.create({Email,password:hashpassword})
        res.status(200).json(login)
    }
    catch(error){
        res.status(400).json({error:"error.message"})
    }
}

const postLogin = async (req, res) => {
    const { Email, password } = req.body;
    try {
      const result = await Login.findOne({ Email });
  
      if (!result) {
        return res.status(400).json({ error: "User not found" });
      }
      console.log(result);
  
      const isPasswordValid = await bcrypt.compare(password, result.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      res.status(200).json({ Email: result.Email });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

const postArticle = async(req,res) =>{
    const {Title,Content,Author} =req.body

    try{
        const article = await Article.create({Title,Content,Author})
        res.status(200).json(article)
    }
    catch(error){
        res.status(400).json({error:"error.message"})
    }
}


const getArticle = async(req,res) =>{
    const article = await Article.find()
    res.status(200).json(article)
}
module.exports={
    postSignin,
    postLogin,
    postArticle,
    getArticle,
}