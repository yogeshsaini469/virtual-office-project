import React from 'react';
import Image from 'next/image';

const Launchwise = () => {
  const stats = [
    { number: '10,000+', label: 'Clients Served' },
    { number: '200+', label: 'Locations Across India' },
    { number: '150+', label: 'Consultants' },
    { number: '500+', label: 'Partners' },
  ];

  const options = [
    'Comprehensive Office Solutions',
    'Strategically Located Premium Spaces',
    'Cost-Effective Solutions with Modern Amenities',
  ];

  return (
    <div className='bg-white'>
      <div className="container mx-auto px-4 py-8 md:py-16 bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-blue-600 text-2xl md:text-3xl font-bold">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}
            <div className="mt-6 text-center flex items-center justify-center">
              <img
                src="/Group 5.png"
                alt="Workspace"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2 md:pl-8 text-gray-700 flex flex-col items-left justify-center">
            <h1 className="text-3xl md:text-4xl mb-4 text-left">Why Opt for Launchwise?</h1>
            <p className="text-gray-600 mb-6">
              Delegate workspace customization and management to us, allowing you to concentrate on your core business activities while we ensure your workspace is primed for growth.
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-1 h-6 bg-blue-600 mr-2"></span>
                Prime Nationwide Options
              </h2>
              <p className="text-gray-600 mb-4">
                Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation
              </p>
              <ul className="space-y-2">
                {options.map((option, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launchwise;