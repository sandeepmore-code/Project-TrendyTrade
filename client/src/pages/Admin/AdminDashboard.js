import React from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu.js";
import { useAuth } from "../../Context/auth";

const AdminDashboard = () => {
  const [auth]= useAuth()
  return (
    <Layout title={"Admin Dasboard"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <h1>{auth?.user?.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
