import React from 'react';

const TestimonialComponent = () => {
  return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flexible-workspace">
        <div className="container mx-auto flex flex-col flex-col-reverse md:flex-row gap-3 items-center">
          {/* Left container with image */}
          <div className="md:w-4/6 mb-8 md:mb-0">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="/Group 48095403.png"
                alt="Testimonial"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right container with text */}
          <div className="md:w-2/6 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:text-right">
              Client Testimonials
            </h2>
            <p className="text-md sm:text-right text-gray-600">
              We love hearing feedback from our valued clients. Here's what some of our satisfied customers have to say about our services.
            </p>
          </div>
        </div>
      </div>
  );
};

export default TestimonialComponent;