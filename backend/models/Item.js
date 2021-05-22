const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
    name:String,
    image:String,
    subItemsData:{
        name:String,
        subItems:[
            {
                name:String,
                image:String,
                price:Number,
                description:String
            }
        ]
    }
    
})

module.exports = mongoose.model("Item", itemSchema);