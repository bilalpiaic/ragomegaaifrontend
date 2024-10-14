import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mt-20"> {/* Added margin-top here */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-4">
            Welcome to Omega! We are dedicated to providing the best services and solutions in the industry. Our team consists of experienced professionals who are passionate about technology and innovation.
          </p>
          
          <p className="text-lg text-gray-300 mb-4">
            Our mission is to empower our users by delivering high-quality products that enhance their lives. We believe in the power of collaboration and strive to build long-lasting relationships with our clients and partners.
          </p>
          
          <p className="text-lg text-gray-300 mb-4">
            At Omega, we focus on continuous improvement and are committed to staying ahead of the curve. Whether you are a small startup or an established enterprise, we have the expertise to help you achieve your goals.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">Our Values</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 max-w-3xl mx-auto">
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Innovation: We constantly seek out new ideas and solutions to enhance our services.</li>
          <li>Excellence: We strive for excellence in everything we do.</li>
          <li>Customer Focus: We prioritize our customers needs and work tirelessly to meet them.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-4 text-center">
          If you have any questions or would like to learn more about us, feel free to contact us at
          <a href="mailto:info@example.com" className="text-green-500"> info@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;