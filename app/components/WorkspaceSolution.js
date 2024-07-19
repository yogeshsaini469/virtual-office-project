import React from 'react';
import Image from 'next/image';

const WorkspaceSolution = () => {
    const features = [
        {
            title: "Prestigious Business Addresses",
            description: "Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
        },
        {
            title: "Mail Handling Services",
            description: "Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
        },
        {
            title: "Flexibility and Cost-Effectiveness",
            description: "Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
        },
        {
            title: "Business Expansion",
            description: "Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
        },
        {
            title: "Nationwide Presence",
            description: "Establish a presence in multiple cities across India without the need for physical office space."
        },
        {
            title: "Professional Call Answering",
            description: "Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
        },
        {
            title: "Meeting Room Facilities",
            description: "Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
        }
    ];

    return (
        <div className='bg-white'>
            <div className="container mx-auto px-4 py-8 md:py-16 text-gray-700">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <img
                            src="/Group 48095425.png"
                            alt="Office meeting"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Discover the Ultimate <br />Workspace Solution<span className="text-blue-500">.</span>
                        </h1>
                        <p className="text-gray-600 mb-8">
                            From solo entrepreneurs to growing teams, find everything you need under one roof.
                            Whether it's pay-per-use plans or fixed desks, our flexible options cater to your unique
                            work style, ensuring seamless productivity and success.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col">
                                    <li className="text-xl font-semibold mb-2">{feature.title}</li>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="inline-block mt-8 text-blue-500 hover:underline">
                            Talk to an expert &gt;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceSolution;