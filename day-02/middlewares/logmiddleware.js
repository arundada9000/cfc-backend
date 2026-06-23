

export const logMiddleware =(req,res,next)=>{
   console.log("mIddleware 1")

   next();
}