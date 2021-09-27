import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
// import data from "./data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// mongoose.connect('mongodb://localhost/ecomm',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
// })
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/ecomm",
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
app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on Port http://localhost:${port}`);
});
