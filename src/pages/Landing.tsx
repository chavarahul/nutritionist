
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { 
  CheckIcon, 
  ArrowRight,
  Users,
  LayoutDashboard,
  Settings
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Personal
                <span className="gradient-text block"> Nutrition Journey </span>
                Starts Here
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Connect with expert nutritionists, track your progress, and achieve 
                your health goals with our comprehensive nutrition platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/login">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 rounded-lg text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-6 rounded-lg text-lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">2,000+</span> active users
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <div className="h-64 bg-primary-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="text-gray-500">Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Nutrition Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform connects clients with professional nutritionists under the supervision of admin experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">User Role Management</h3>
              <p className="text-gray-600">
                Separate dashboards and capabilities for administrators, nutritionists, and clients with appropriate access controls.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <LayoutDashboard className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intuitive Dashboards</h3>
              <p className="text-gray-600">
                Role-specific dashboards that provide the right information and tools for administrators, nutritionists, and clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Management</h3>
              <p className="text-gray-600">
                Comprehensive tools for nutritionists to manage their clients and for administrators to oversee the entire system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Health Professionals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our users have to say about their experience with our nutrition platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emma Johnson",
                role: "Nutritionist",
                content: "This platform has revolutionized how I manage my clients. The dashboard provides all the information I need at a glance."
              },
              {
                name: "Michael Smith",
                role: "Client",
                content: "Working with my nutritionist through this platform has been seamless. I can easily track my progress and communicate with my nutritionist."
              },
              {
                name: "Sarah Williams",
                role: "Admin",
                content: "Managing our team of nutritionists and their clients has never been easier. The role-based access control is exceptional."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <span className="text-primary-500 font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-500 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our platform today and transform how you manage nutrition services.
              Whether you're an admin, nutritionist, or client, we have the tools for you.
            </p>
            <Link to="/login">
              <Button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
