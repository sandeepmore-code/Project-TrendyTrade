import { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth";

import axios from "axios";

import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner  />;
}

// import { useEffect, useState } from 'react';
// import { useAuth } from '../../Context/auth.js';
// import { Outlet, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../spinner.js';

// const PrivateRoute = () => {
//   const [ok, setOk] = useState(false);
//   const [auth] = useAuth();  // No need to destructure setAuth if it's not used

//   useEffect(() => {
//     const authCheck = async () => {
//       try {
//         const res = await axios.get('/api/v1/auth/user-auth', {
//           headers: {
//             Authorization: `Bearer ${auth?.token}`,
//           },
//         });
//         if (res.data.ok) {
//           setOk(true);
//         } else {
//           setOk(false);
//         }
//       } catch (error) {
//         console.error('Error checking authentication', error);
//         setOk(false);
//       }
//     };

//     if (auth?.token) {
//       authCheck();
//     }
//   }, [auth?.token]);

//   if (!auth?.token) {
//     return <Navigate to="/login" />;
//   }

//   return ok ? <Outlet /> : <Spinner />;
// };

// export default PrivateRoute;
