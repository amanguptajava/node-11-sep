const users=require('../users.json');
const fs =require('fs');
function getAllUsers(req,res){
  try{
    res.json(users)
  }catch(err){
    console.log(err)
  }
}
function getUsers(req,res){
  try{
    let id = parseInt(req.params.id);
    let user =users.find((user)=>user.id ===id);
    res.json(user)
  }catch(err){
    console.log(err);
  }
}

function addUser(req,res){
  try{
    req.body.id =users.length+1;
    users.push.req.body;
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
      if(err){
        console.log(err);
      }else {
        res.end('user Added..')
      }
    })
  }catch(err){

  }
}

module.exports ={
  getAllUsers,
  getUsers,
  addUser
}