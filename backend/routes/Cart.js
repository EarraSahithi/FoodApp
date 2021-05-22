const express=require('express');
const Cart = require('../models/Cart');
const router=express();


router.post('/addtocart',async(req,res)=>{
    var check=await Cart.findOne({name:req.body.name})
    if(!check){
        var cart=new Cart(req.body);
    
    await cart.save();
    return res.send({message:"added product successfully"})

    }else{
        return res.status(422).send({message:"cant add the product"})
    }
    

})

router.get('/getall',async(req,res)=>{
    var cart=await Cart.find();
    return res.send(cart)
});
router.post('/remove',async(req,res)=>{
    var check=await Cart.deleteOne({name:req.body.name})
    if(check){
        var cart=await Cart.find()
    
   
    return res.send(cart)

    }else{
        return res.status(422).send({message:"cant add the product"})
    }
    

}
)
router.get('/getcount',async(req,res)=>{
    var cart=await Cart.find();

    
        return res.status(200).send({count:cart.length})
    
    
    
})


module.exports=router