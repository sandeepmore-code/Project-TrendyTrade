import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/Routes/Priavte";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Policy from './pages/Policy';
// import PageNotFound from './pages/PageNotFound';
// import Register from './pages/Auth/Register';
// import Login from './pages/Auth/Login';
// import Dashboard from './user/Dashboard';
// import PrivateRoute from './components/Routes/PrivateRoute';
// import AdminRoute from './components/Routes/AdminRoute';
// import AdminDashboard from './pages/Admin/AdminDashboard';
// import ForgotPassword from './pages/Auth/ForgotPassword';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/policy' element={<Policy />} />
//         <Route path='*' element={<PageNotFound />} />

//         {/* Private Routes */}
//         <Route element={<PrivateRoute />}>
//           <Route path='/dashboard/user' element={<Dashboard />} />
//         </Route>

//         {/* Admin Routes */}
//         <Route element={<AdminRoute />}>
//           <Route path='/dashboard/admin' element={<AdminDashboard />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
