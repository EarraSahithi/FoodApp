const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    
            name:String,
            image:String,
            price:Number,
            description:String

        
           
    
    
})

module.exports = mongoose.model("Cart", cartSchema);