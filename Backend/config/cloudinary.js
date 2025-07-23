// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDE_NAME,
  api_key: process.env.CLOUDANARY_API_KEY, 
  api_secret: process.env.CLOUDANARY_SECRET_KEY
});

export default cloudinary;