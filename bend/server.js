import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import * as path from 'path'
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// mongoose.connect('mongodb://localhost/ecomm',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
// })
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/ecomm",
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);
app.get("/", (req, res) => {
  res.send("How you Doin..!");
});

app.use("/api/users", userRouter);
app.use('/api/products',productRouter)
app.use('/api/orders',orderRouter)
app.get('/api/config/paypal',(req,res)=>{
  res.send(process.env.PAYPAY_CLIENT_ID || 'sb')
})
app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message})
})



app.use(express.static(path.join(__dirname,'/client/build')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/fend/build','index.html'))
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on Port http://localhost:${port}`);
});
