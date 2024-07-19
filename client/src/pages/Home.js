import React from "react";
import Layout from "../components/layout/layout";
import { useAuth } from "../Context/auth";
const Home = () => {
  // eslint-disable-next-line 
  const [auth, setAuth] = useAuth();
  
  return (
    <Layout title={"Best Offers"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      
    </Layout>
  );
  
};

export default Home;
