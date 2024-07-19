import React from "react";
import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout title={"About-Trendy Trade"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/492025669/photo/group-of-business-people-holding-placards-forming-about-us.jpg?s=612x612&w=0&k=20&c=lgZYkFUmIIPgmjE9m5nHI_6PMJ-6M38lkPfiHpYZmzs="
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are an electronics product supplier founded on February 21, 2019.
            Our head office is located in Nashik. We have established our
            production facilities in major cities across India, including
            Nashik, Ahmedabad, Mumbai, and Pune.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
