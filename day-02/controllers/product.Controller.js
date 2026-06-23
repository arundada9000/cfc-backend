import Product from "../model/product.schema.js";



export const createProduct = async(req,res)=>{
    const {sn, productName, productPrice} = req.body;

    try{
        const product1 = await Product.create({
            sn,
            productName,
            productPrice
        })
        res.status(201).json({message:"Product created sucessfully.",data:product1})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Failed to create product."})
    }

}

export const getProducts = async(req,res)=>{
    try {
            const products = await Product.find();
            res.status(200).json({message:"Products retreived sucessfully.",data:products})

    } catch (error) {
        console.log(error);
        res.status(500).json({messasge:"failed to get products."})

    }

}

export const updateProduct = async(req,res)=>{
    const {sn} = req.params;
    const data = req.body;
try {
//  const updatedProduct = await Product.findByIdAndUpdate(sn,data,{
//     new:true,
//     runValidators:true
//  })  

// const theproduct = await Product.findOne(sn);
// if(!theproduct){
//     res.status(404).json({message:"Failed to find the product."})
// }

// if(data.productName)theproduct.productName = data.productName
// await theproduct.save();

//  if(!updatedProduct){
//     res.status(404).json({message:"Failed to find the product."})
//  }


 res.status(200).json({message:"Product updated sucessfully.",updatedProduct})

} catch (error) {
    console.log(error);
    res.status(500).json({message:"Failed to update product."})
}
    


}

export const deleteProduct = async(req,res)=>{
    const { id} = req.params;

    try {
        // const deletedProduct = await Product.findByIdAndDelete(id);
        // if(!deletedProduct){
        //     res.status(404).json({message:"Product not found."})
        // }

        const productDel = await Product.findById(id);
        if(!productDel){
            res.status(404).json({message:"Product not found."})
        }
        const deletedProduct = await Product.deleteOne(id)

        res.status(200).json({message:"Product deleted sucessfully."})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to delete product."})
    }


}