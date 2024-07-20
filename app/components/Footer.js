import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 py-8">
        <div className=" text-gray-300">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start mb-5">
            <div className="flex flex-col items-left  mb-4 md:mb-0 gap-5 " >
              <img src="/header-logo.88445946 1.png" alt="Launch Wise" className="h-20" />
              <div className="flex space-x-2">
                <FaFacebookF className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaLinkedinIn className="w-5 h-5" />
                <FaXTwitter className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>Virtual Office</li>
                <li>GST Registration</li>
                <li>Coworking Spaces</li>
                <li>Business Registration</li>
                <li>Mailing Address</li>
                <li>Dedicated Desk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6">Other Pages</h3>
              <ul className="space-y-3">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Find Location</li>
                <li>FAQ's</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6">Other Link</h3>
              <ul className="space-y-3">
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Terms & Conditions</li>
                <li>Cookies</li>
                <li>Refund policy</li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col gap-5">
              <div>
                <h3 className="font-semibold mb-2">Join the newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 px-3 py-2 rounded-l-md focus:outline-none"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Feel free to connect with us</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5" />
                    <span>+91 93112 21210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>virtualoffice@teamco.work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-gray-800'>
        <div className="container mx-auto px-4  p-4">
          <h2 className="text-lg font-semibold mb-4">Virtual Office in Major Cities</h2>
          <p className="text-sm mb-6">
            Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual Office in Bangalore | Virtual Office in Mumbai | Virtual Office in Pune | Virtual Office in Kolkata | Virtual Office in Chennai | Virtual Office in Noida | Virtual Office in Kochi | Virtual Office in Jaipur | Virtual Office in Hyderabad | Virtual Office in Chandigarh | Virtual Office in Lucknow | Virtual Office in Mohali
          </p>
          <h2 className="text-lg font-semibold mb-4">Virtual Office for GST in Major Cities</h2>
          <p className="text-sm mb-6">
            Virtual Office for GST in Delhi | Virtual Office for GST in Gurgaon | Virtual Office for GST in Bangalore | Virtual Office for GST in Mumbai | Virtual Office for GST in Pune | Virtual Office for GST in Kolkata | Virtual Office for GST in Chennai | Virtual Office for GST in Noida | Virtual Office for GST in Kochi | Virtual Office for GST in Jaipur | Virtual Office for GST in Hyderabad | Virtual Office for GST in Lucknow | Virtual Office for GST in Chandigarh | Virtual Office for GST in Mohali
          </p>
          <h2 className="text-lg font-semibold mb-4">Virtual Office for Business in Major Cities</h2>
          <p className="text-sm mb-6">
            Virtual Office for Business in Delhi | Virtual Office for Business in Gurgaon | Virtual Office for Business in Bangalore | Virtual Office for Business in Mumbai | Virtual Office for Business in Pune | Virtual Office for Business in Kolkata | Virtual Office for Business in Chennai | Virtual Office for Business in Noida | Virtual Office for Business in Kochi | Virtual Office for Business in Jaipur | Virtual Office for Business in Hyderabad | Virtual Office for Business in Lucknow | Virtual Office for Business in Chandigarh | Virtual Office for Business in Mohali
          </p>
          <h2 className="text-lg font-semibold mb-4">Virtual Office with Mailing Address in Major Cities</h2>
          <p className="text-sm mb-6">
            Virtual Office with Mailing Address in Delhi | Virtual Office with Mailing Address in Gurgaon | Virtual Office with Mailing Address in Bangalore | Virtual Office with Mailing Address in Mumbai | Virtual Office with Mailing Address in Pune | Virtual Office with Mailing Address in Kolkata | Virtual Office with Mailing Address in Chennai | Virtual Office with Mailing Address in Noida | Virtual Office with Mailing Address in Kochi | Virtual Office with Mailing Address in Jaipur | Virtual Office with Mailing Address in Hyderabad | Virtual Office with Mailing Address in Lucknow | Virtual Office with Mailing Address in Chandigarh | Virtual Office with Mailing Address in Mohali
          </p>
          <div className="my-8 border-b border-gray-500"></div>
          <div className="mt-8 text-sm text-gray-500 flex justify-between">
            <p>Copyright © 2019, Team Cowork. All Rights Reserved</p>
            <p>Powered by MXN Realspaces Pvt Ltd</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;