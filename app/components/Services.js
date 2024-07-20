import React from 'react';

const services = [
  {
    title: "Our solutions",
    description: "Browse our full range of products and services",
    icon: "/platform_icon.svg fill.png", // Update this path as needed
  },
  {
    title: "Talk to us",
    description: "Get advice from one of our experts 24/7",
    icon: "/expert_icon.svg fill.png",
  },
  {
    title: "Book workspace",
    description: "Book meeting rooms and day offices now",
    icon: "/workspace_icon.svg.png",
  },
  {
    title: "Set up a virtual office",
    description: "Start building a real presence today",
    icon: "/virtual_icon.svg fill.png",
  },
  {
    title: "Buy a Membership",
    description: "Access thousands of locations on demand",
    icon: "/membership_icon.svg fill.png",
  },
  {
    title: "Explore our app",
    description: "Download our app and get started today",
    icon: "/app_icons.svg fill.png",
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="p-6 border rounded-lg hover:shadow-lg">
    <div className='flex gap-5 justify-start items-center'>
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <div className='w-56 space-y-5'>
        <h3 className="relative inline-block text-xl text-blue-500 mb-2 after:content-[''] after:absolute after:top-5 after:left-0 after:h-[2px] after:w-[80%] after:bg-gray-500 after:mt-4">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
        <a href="#" className="text-blue-600 mt-4 inline-block">
          →
        </a>
      </div>
    </div>
  </div>
);

const ServicesComponent = () => {
  return (
    <div className="mx-auto px-4 py-10 bg-white ">
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="md:hidden grid gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
