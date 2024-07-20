"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Slider from 'react-slick';
import { MagnifyingGlassIcon, UserGroupIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FlexibleWorkspace = () => {
  const [activeTab, setActiveTab] = useState('Office Space');

  const tabs = ['Office Space', 'Coworking', 'Virtual Offices', 'Meeting rooms'];

  const workspaceOptions = {
    'Office Space': [
      {
        title: 'Private offices',
        description: 'A range of ready-to-use, fully equipped offices with everything you need to get started.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Private offices" />,
        pricing: 'From $89 per person per month',
        buttonText: 'Get a quote',
      },
      {
        title: 'Custom Offices',
        description: "When off-the-shelf simply isn't enough. Customize all aspects of your space, including furniture and branding.",
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_2.png.png' alt="Custom offices" />,
        pricing: 'From $99 per person per month',
        buttonText: 'Get started',
      },
      {
        title: 'Day Offices',
        description: 'A professional on-demand office space. Perfect when you need to get your head down and do your best work.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_3.png.png' alt="Day offices" />,
        pricing: 'From $25 per day',
        buttonText: 'Book now',
      },
      {
        title: 'Office membership',
        description: 'Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_4.png.png' alt="Office membership" />,
        pricing: 'From $225 per month',
        buttonText: 'Join now',
      },
    ],
    'Coworking': [
      {
        title: 'Hot Desks',
        description: 'Flexible workspace in a shared environment. Perfect for freelancers and remote workers.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Hot Desks" />,
        pricing: 'From $50 per month',
        buttonText: 'Book a desk',
      },
      {
        title: 'Dedicated Desks',
        description: 'Your own personal workspace in a shared office environment.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Dedicated Desks" />,
        pricing: 'From $150 per month',
        buttonText: 'Reserve now',
      },
    ],
    'Virtual Offices': [
      {
        title: 'Business Address',
        description: 'A prestigious business address without the need for physical office space.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Business Address" />,
        pricing: 'From $75 per month',
        buttonText: 'Get started',
      },
      {
        title: 'Mail Handling',
        description: 'Professional mail handling and forwarding services for your business.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Mail Handling" />,
        pricing: 'From $50 per month',
        buttonText: 'Learn more',
      },
    ],
    'Meeting rooms': [
      {
        title: 'Conference Rooms',
        description: 'Fully equipped conference rooms for your important meetings and presentations.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Conference Rooms" />,
        pricing: 'From $30 per hour',
        buttonText: 'Book a room',
      },
      {
        title: 'Training Rooms',
        description: 'Spacious rooms ideal for workshops, training sessions, and team building activities.',
        image: <img className="rounded card-img" src='/Picture → Office_Space_Card_Stacked_1.png.png' alt="Training Rooms" />,
        pricing: 'From $50 per hour',
        buttonText: 'Reserve now',
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Flexible Workspace Solutions</title>
        <meta name="description" content="Find flexible workspace solutions designed around your needs - from private offices to coworking spaces and virtual offices." />
      </Head>
      <div className='flexible-workspace'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-0">Flexible workspace designed around your needs</h1>
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 mb-2">
                <img src="/flag.png" alt="India flag" className="w-6 h-6" />
                <p className="text-sm">Prices for India</p>
              </div>
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <p className="text-sm underline">Search for a city or area to refine pricing</p>
              </div>
            </div>
          </div>

          <div className="mb-6 bg-gray-100 sm:rounded-full sm:bg-white w-3/4">
            <div className="hidden md:flex flex-wrap justify-between items-center gap-2 ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-9 py-3 rounded-full text-xl font-medium ${activeTab === tab
                      ? 'bg-green-500 text-white'
                      : 'bg-transparent text-gray-700 hover:bg-gray-200'
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-8 text-sm">
            Our flexible, fully-customizable office rentals are available by the hour, day, or as long as you need.
          </p>

          <div className="block md:hidden">
            <Slider {...settings}>
              {workspaceOptions[activeTab].map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md rounded p-4">
                  <div className="hidden md:block mb-4 ">{option.image}</div>
                  <div className='px-6 pb-6'>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="flex items-center mb-4">
                      <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">By month or year</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <UserGroupIcon className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">Teams of any size</span>
                    </div>
                    <p className="font-semibold mb-4 text-blue-500 text-sm">{option.pricing}</p>
                    <div className='flex gap-2'>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300">
                        {option.buttonText}
                      </button>
                      <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-full hover:text-white hover:bg-blue-600 transition duration-300">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workspaceOptions[activeTab].map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md rounded">
                <div className="hidden md:block mb-4 ">{option.image}</div>
                <div className='px-6 pb-6'>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="flex items-center mb-4">
                    <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">By month or year</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <UserGroupIcon className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">Teams of any size</span>
                  </div>
                  <p className="font-semibold mb-4 text-blue-500 text-sm">{option.pricing}</p>
                  <div className='flex gap-2'>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300">
                      {option.buttonText}
                    </button>
                    <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-full hover:text-white hover:bg-blue-600 transition duration-300">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexibleWorkspace;