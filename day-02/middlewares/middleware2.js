export const middleware2 = (req,res,next)=>{
console.log("Middleware 2")
next();
}