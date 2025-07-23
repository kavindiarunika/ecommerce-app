import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentstate, setcurrentstate] = useState("login");
  const { token, settoken, backendUrl, navigate } = useContext(ShopContext);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentstate === "signup") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log("Signup response:", response.data);
        toast.success("Signup successful!");
        setcurrentstate("login"); // switch to login
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log("Login response:", response.data);
        if (response.data.success) {
          settoken(response.data.token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(()=>{
     if(token ){
            navigate('/')
     }
     else{

     }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl capitalize">
          {currentstate === "login" ? "Login" : "Sign Up"}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentstate === "login" ? null : (
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentstate === "login" ? (
          <p
            onClick={() => setcurrentstate("signup")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setcurrentstate("login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2">
        {currentstate === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
