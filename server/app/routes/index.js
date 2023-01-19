const express = require("express")
const router = express.Router()
const db = require("../models")
const User = db.user

router.post('/register', async (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }
    try{
        const userExist = await User.findOne({username: data.username});
        if(userExist){
            res.status(400).send("user already")
        }else{
            await User.create({
                username: req.body.username, 
                password: req.body.password
            })
            .then(() => res.status(200).send({status:"success", data}))
            .catch( err => res.status(400).send({messge:err.message}))
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/login', async (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }
    try{
        const userExist = await User.findOne(data);
        if(userExist){
            res.status(200).send({status:"success", userExist})
        }else{
            res.status(400).send("can't find user")
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;