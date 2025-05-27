
import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Blockchain-powered security ensures your land records are tamper-proof and always accessible."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Complete your land registration in minutes, not months, with our streamlined digital process."
    },
    {
      icon: Award,
      title: "Government Approved",
      description: "Fully compliant with national land registration laws and recognized by government authorities."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer support from legal experts to guide you through every step of the process."
    }
  ];

  const stats = [
    { number: "50K+", label: "Successful Registrations" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Legal Compliance" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing land registration with cutting-edge technology, 
            making property ownership verification faster, safer, and more reliable than ever before.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Register Your Land?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied customers who trust us with their property registration.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
