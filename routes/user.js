const express =require('express')
const router =express.Router();
const usercontroller =require('../controllers/usercontroller')


router.get('/users',(req,res)=>{
  usercontroller.getAllUsers(req,res);
})

router.get('/user/:id',(req,res)=>{
  usercontroller.getUsers(req,res);
})



module.exports=router; 