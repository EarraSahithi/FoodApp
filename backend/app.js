const express=require('express');
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')

mongoose.connect('mongodb+srv://sahithi:srinivas20@cluster0.vdsuz.mongodb.net/FoodApp?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(()=>{
      console.log(`connected to mongodb`)
  })
app.use(cors())
  //require routes
  const itemRoutes=require('./routes/item')

app.use(bodyParser.json())


app.use('/item',itemRoutes);
app.use('/cart',require('./routes/Cart'));




app.listen(8000,()=>{
    console.log("connected to port 8000")
})