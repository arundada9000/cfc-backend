
import express from "express"


// get all users
export const getUsers =(req,res)=>{
    console.log(req);

res.status(200).json({message:"This returns all users"})

}



// create user
export const createUser = (req,res)=>{
    const userData = req.body;
    res.json({message:"User created",data:userData})

}

// get params user
export const getParamsUser =(req,res)=>{
    const params = req.params;
    res.json({message:"The params is", params})
}