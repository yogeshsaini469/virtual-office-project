import React from 'react';
import { BuildingOffice2Icon, DocumentTextIcon, InboxIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: "Company Registration",
    description: "Enhance your professional image and organizational presence by choosing a virtual address over your residential one.",
    icon: BuildingOffice2Icon
  },
  {
    title: "Streamlined GST Registration",
    description: "Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.",
    icon: DocumentTextIcon
  },
  {
    title: "Centralized Business Hub",
    description: "Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.",
    icon: InboxIcon
  },
  {
    title: "Efficient Call Management",
    description: "Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.",
    icon: PhoneIcon
  },
  {
    title: "Flexible Meeting Solutions",
    description: "Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.",
    icon: UserGroupIcon
  }
];

const VirtualAddressBenefits = () => {
  return (
    <div className='flexible-workspace'>

    <div className="container mx-auto px-4 py-8 text-gray-700">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl mb-8 text-left">Use Virtual Address For</h1>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-white p-6 rounded-full">
                <benefit.icon className="w-10 h-10 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-600">{benefit.title}</h2>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center  ">
          <img
            src="/Group 48095425 (1).png"
            alt="Business meeting"
            className='max-w-96'
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default VirtualAddressBenefits;