const express=require('express')
const router=express();
const Item=require('../models/Item')

router.post('/add',async(req,res)=>{
    var item=new Item();
    item.name=req.body.name;
    item.image=req.body.image;
    if(req.body.subItemsData){
        item.subItemsData.name=req.body.subItemsData.name;
        for(var i=0;i<req.body.subItemsData.subItems.length;i++){
            var obj={}
            obj.name=req.body.subItemsData.subItems[i].name;
            obj.price=req.body.subItemsData.subItems[i].price;
            obj.image=req.body.subItemsData.subItems[i].image;
            obj.description=req.body.subItemsData.subItems[i].description;
            item.subItemsData.subItems.push(obj)
        }
    }
    const result=await item.save()
    if(result){
        return res.send(result)
    }else{
        return res.status(422).send({message:"unable to update"})
    }

          


    

})

router.get('/getall',async(req,res)=>{

    if(req.query.name){
        var result=await Item.findOne({name:req.query.name})
        return res.send(result)
    }else{
        const plan=await Item.find()
    
    
    
    if(plan){
        return res.send(plan)
    }else{
        return res.status(422).send("some error occured")
    }
}

})
router.delete('/deleteitem',async(req,res)=>{
    console.log(req.params.id)
    const plan=await Item.deleteOne({_id:req.body.id})
    console.log(plan)
    if(plan){
        return res.send({"result":"Success"})
    }else{
        return res.status(422).send("some error occured")
    }

})


module.exports=router