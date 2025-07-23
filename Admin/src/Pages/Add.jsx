import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { assets } from '../assets/assets'; 
import { backendUrl } from '../App'; 

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [moreDetail, setMoreDetail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('duration', duration);
      formData.append('description', description);
      formData.append('MoreDetail', moreDetail);

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/package/add`, formData, {
        headers: { token },
      });

      if (response.data.success) {
          
        
        setName('');
        setPrice('');
        setDuration('');
        setDescription('');
        setMoreDetail('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        
        toast.error(response.data.message || "Failed to add package");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Package Images</p>
        <div className="flex gap-2">
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => {
            const image = [image1, image2, image3, image4][index];
            return (
              <label htmlFor={`image${index + 1}`} key={index}>
                <img
                  className="w-20 h-20 object-cover border"
                  src={!image ? assets.upload_area : URL.createObjectURL(image)}
                  alt=""
                />
                <input
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Package Name</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Package name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Price</p>
        <input
          type="number"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Duration</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="e.g., 4 Day"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Short Description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">More Detail</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="More details"
          value={moreDetail}
          onChange={(e) => setMoreDetail(e.target.value)}
        />
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>

      <ToastContainer position="top-center" autoClose={3000} />
    </form>
  );
};

export default Add;
