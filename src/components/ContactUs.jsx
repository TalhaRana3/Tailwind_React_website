import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { useState } from 'react';
import toast from "react-hot-toast";

const ContactUs = () => {

    // const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "36a562c7-d3a7-4498-802e-3d7ce79ce166");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    toast(data.success ? "Message has been sent!" : "Error");
    event.target.reset();
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white    "
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-500">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Your Email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-500">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea rows={8} name="message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" placeholder="Enter your message" />
        </div>
        <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
            Submit <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
