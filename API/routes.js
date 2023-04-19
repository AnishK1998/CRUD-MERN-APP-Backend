const express = require("express");
const router = express.Router()
const user = require("../DB/Models/dbmodels")
const axios = require("axios")

router.get("/getalluser",async (req, res) => {
    try{
        const usersData = await user.find();
        res.status(200).json(usersData)
    }catch(error){
        res.status(404).json(error)
    }
})

//getIndividual user 
router.get("/getIndividualUser/:id", async (req, res)=> {
    try{
        const paramsId = req.params.id;
        const individualUser = await user.findById({_id: paramsId});
        res.status(200).json(individualUser)
    }catch(error){
        res.status(404).json(error)
    }
})

// update userDetails
router.put("/updateUserDetails/:id", async (req, res)=>{
    try{
        const paramsId = req.params.id;
        const updateUserDetails = await user.findByIdAndUpdate(paramsId, req.body,{ new: true});
        res.status(200).json(updateUserDetails)
    }catch(err){
        res.status(404).json(err)
    }
})

//this /register api to register new user
router.post("/register", async (req,res)=>{
    const {name, email, age, mobile, work, address, description} = req.body;

    try {
        const exsistingUserEmail = await user.findOne({email: email});
        const exsistingUserMobil = await user.findOne({mobile: mobile})
       
        if(exsistingUserEmail || exsistingUserMobil){
            res.status(404).json("User already exsist");
        }else{
            const newUser = user({name, email, age, mobile, work, address, description})
            await newUser.save()
            res.status(200).json(newUser);
        }
    } catch (error) {
        res.status(404).json(error)
    }

})


//delete user
router.delete("/deleteUser/:id", async (req, res) => {
    try {
        const paramsId = req.params.id;
        const deletedUser = await user.findByIdAndDelete({_id: paramsId});
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(404).json(error)
    }
    
})

module.exports = router;