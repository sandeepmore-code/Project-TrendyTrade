// import React, { useState } from "react";
// import Layout from "../../components/layout/layout";
// import {toast} from "react-toastify"
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const Navigate = useNavigate();

//   // Form Funtion

//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//    try{
//     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
//     if(res.data.success){
//       toast.success(res.data.message);
//       Navigate("/login");
//     }else{
//       toast.error(res.data.message)
//     }

//    }catch(error){
//     console.log(error)
//     toast.error('Something Went Wrong')
//    }
//   }

//   return (
//     <Layout title="Register Trendey-trade">
//       <div className="register">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputName"
//               aria-describedby="emailHelp"
//               placeholder="Enter your Name" required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputName"
//               aria-describedby="emailHelp"
//               placeholder="Enter Your Email" required
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password" required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={phone} onChange={(e)=> setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputName"
//               aria-describedby="emailHelp"
//               placeholder="Phone Number" required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="name"
//               value={address} onChange={(e)=>setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputName"
//               aria-describedby="emailHelp"
//               placeholder="Address" required
//             />
//           </div>
//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="exampleCheck1"
//             />
//             <label className="form-check-label" htmlFor="exampleCheck1">
//               Check me out
//             </label>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;

import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title="Register Trendey-trade">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Your Favorite sports"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
