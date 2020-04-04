// const express=require('express');
// const app=express();
// const mongoose=require('mongoose');
// const validator = require('validator')


// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/demo').then(()=>{
//     console.log("Connected");
// }).catch(()=>{console.log("Not Connected");});

// const categorySchema= mongoose.Schema({
//     name:{
//         type: String
//     },
//     isActive:{
//         type: Boolean
//     },
//     createdAt:{
//         type: Date
//     }
// });    

// const productSchema= mongoose.Schema({
//     categoryId:{
//        type: mongoose.Types.ObjectId, 
//        ref: 'Category',
//        required:true
//      },
//      name:{
//          type: String
//      },
//      price:{
//          type: String
//      },
//      isActive:{
//          type: Boolean
//      },
//      createdAt:{
//          type: Date
//      }
//  });    

//  const orderSchema = mongoose.Schema({
//     email:{
//         type: String
//     },
//     productId:{
//         type: mongoose.Types.ObjectId,
//          ref: 'Products',
//          required:true
//     },
//     createdAt:{
//         type: Date
//     }

// });

// categorySchema.virtual('products', {
//     ref: 'Products',
//     localField: '_id',
//     foreignField: 'categoryId'
//   });

// categorySchema.virtual('expensive', {
//     ref: 'Products',
//     localField: '_id',
//     foreignField: 'categoryId',
//     options:{sort:{price:-1},limit:3}
//   });
// categorySchema.set('toObject', { virtuals: true })
// categorySchema.set('toJSON', { virtuals: true })

// productSchema.virtual('order',{
//     ref: 'Order',
//     localField:'_id',
//     foreignField:'productId'
// });
// productSchema.set('toObject', { virtuals: true })
// productSchema.set('toJSON', { virtuals: true })

// const Category=mongoose.model('Category',categorySchema);
// const Products=mongoose.model('Products',productSchema);
// const Order=mongoose.model('Order',orderSchema);

// app.post('/bulkinscat',(req,res)=>{
//     res.send(Category.insertMany(req.body));
// });
// app.listen(1000)
// app.post('/bulkinshis',(req,res) =>{
//     res.send(Order.insertMany(req.body));
// });
// app.listen(2000)
// app.post('/bulkinspro',(req,res) =>{
//     res.send(Products.insertMany(req.body));
// });
// app.listen(3000)
// app.get('/getcategory', async(req,res)=>{

//     const data = await Category.find({});
//     res.send(data);
// });

// app.get('/getorderhis',async(req,res)=>{
//     res.send(await Order.find({}));
// });

// app.get('/getcatprod',async(req,res)=>{
//     res.send(await Category.find({}).populate('products').exec());
// });

// app.get('/getexpens',async(req,res)=>{
//     res.send(await Category.find({}).populate('expensive').exec());
// });

// app.get('/getorder',async(req,res)=>{
//     res.send(await Products.find({}).populate('order').exec());
// });
