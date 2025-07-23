import userModel from "../models/useModel.js";

// add product to user cart



const addTocart =async (res,req) =>{

    try{

        const {userId,itemId ,size } =req.body;
        const userData= await userModel.findById(userId);
        const cartData = await userData.cartData;
       

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] =1;
            }
        }
      else{
        cartData[itemId][size] ={}
        cartData[itemId][size] =1;

      }
      await userModel .findByIdAndUpdate(userId,{cartData})
      res.json({success:true , message:"added to cart"});
      
    }
    catch(error){
        console.log(error)
        res.json({success:false , message:"error.message"}) 
        
    }

}

//update user cart
const updatecart =async (res,req) =>{
     try{
           
        const {userId,itemId,size , quantity} = req.body;
        const userData= await userModel.findById(userId);
        const cartData = await userData.cartData;
       
        cartData[itemId][size]=quantity;

         await userModel .findByIdAndUpdate(userId,{cartData})
         res.json({success:true , message:" update cart"});

    }
    catch(error){
         console.log(error)
        res.json({success:false , message:"error.message"}) 
        
    }

}

//get user cart
const getcart =async (res,req) =>{
     try{
           
        const {userId} =req.body;
         const userData= await userModel.findById(userId);
          const cartData = await userData.cartData;
       

          req.json({success:true,cartData})

    }
    catch(error){
        
          console.log(error)
        res.json({success:false , message:"error.message"}) 
        
    }

}

export {addTocart,updatecart,getcart};