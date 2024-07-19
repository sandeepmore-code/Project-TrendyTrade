import React from "react";
import Layout from "../components/layout/layout";
import { RiMailSendFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-600nw-2067737414.jpg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to contact us
          </p>
          <p className="mt-3">
            <RiMailSendFill /> : CodeKeeda161021@Gmail.com
          </p>
          <p className="mt-3">
            <FaPhoneVolume /> : +91-91XXXXXX59
          </p>
          <p className="mt-3">
            <MdHeadsetMic /> : 1800-0000-0000(202)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
