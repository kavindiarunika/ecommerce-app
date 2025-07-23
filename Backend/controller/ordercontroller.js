import orderModel from "../models/orderModel.js";
import Stripe  from 'stripe';


//global variable

const currency = 'inr'
const deiveryCharge =10;


const stripe = new Stripe(process.env.STRIPE_SCRET_KEY);

//placing order usong cod method
const placeOrder =async(res,req)=>{

    try{
        
        const {userId , items,amount,address} = req.body;

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"cod",
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res,json({success:true, message:"order placed"})
    }
    catch(error){
       console.log(error)
       res.json({success:false, message:error.message})
    }
 
}
//placing order usong strpe method
const placeOrderStripe =async(res,req)=>{
      try{

         const {userId , items,amount,address} = req.body;
         const { origin } =req.headers;

         const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"Stripe",
            date:Date.now()
        }

           const newOrder = new orderModel(orderData)
           await newOrder.save();


           const line_items = items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name,

                },
                unit_amount:item.price * 100
            },

                 quantity:item.quantity
           }))
           line_items.push({
             price_data:{
                currency:currency,
                product_data:{
                    name:'delivery chagers',

                },
                unit_amount:deiveryCharge * 100
            },

                 quantity:1

           })
                  

           const session = await stripe.checkout.sessions.create({
              success_url :`${origin}/verify?success = true&orderId=${newOrder._id}`,
              cansel_url :`${origin}`
           })
        }
    catch(error){

    }
 
}

//placing order usong rozorpay method
const placeOrderRazorpay =async(res,req)=>{
      try{

    }
    catch(error){

    }
 
}

//all orders data for admin panel

const allOrder =async (req,res) =>{
      try{

        const orders =await orderModel.find({})
        res.json({success:true,orders})
    }
    catch(error){
         res.json({success:false, message:error.message})

    }
    
}
const userOrder =async (req,res) =>{
      try{

        const {userId } =req.body;
        const orders =await orderModel.find({userId})
        res.json({success:true,orders})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})

    }

}

//update order status from admin
const  updatestatus =async (req,res) =>{
      try{

        const {userId, status} =req.body;
        await orderModel.findByIdAndUpdate(orderId ,{status})
        res.json({success:true , message:'status'});


    }
    catch(error){
         console.log(error)
        res.json({success:false, message:error.message})


    }

}


export {placeOrder,placeOrderRazorpay,placeOrderStripe,userOrder,updatestatus,allOrder};