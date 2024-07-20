import React from 'react';

const companies = [
  { name: 'Spring House', logo: '/Page-1.png' },
  { name: 'Slack', logo: '/Slack_RGB.png' },
  { name: 'WeWork', logo: '/we work 1.png' },
  { name: 'OYO Workspaces', logo: '/image 7.png' },
  { name: 'Razorpay', logo: '/Group.png' },
  { name: 'ICICI Bank', logo: '/icici_bank_logo_symbol 1.png' },
];

const TrustedCompanies = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8 text-left">
          Trusted by the world's largest companies<span className="text-red-600">.</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:gap-16 md:grid-cols-3 lg:grid-cols-6 ">
          {companies.map((company) => (
            <div key={company.name} className="col-span-1 flex w-fit mt-8">
              <img
                className="max-h-12"
                src={company.logo}
                alt={`${company.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;