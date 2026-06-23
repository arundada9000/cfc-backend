import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
    sn:{
        type: String,
        required: true,
        unique: true
    },
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type:Number,
    }
})

const Product = mongoose.model('Product',productSchema);

export default Product;