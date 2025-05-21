import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Abou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />

      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-primary-100 opacity-25 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-4 py-2 px-5 rounded-full bg-primary-100 text-primary-500 text-sm font-semibold tracking-wide">
              About Livin Significant
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Empowering Health & Wellness
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Livin Significant, we are dedicated to educating people about the significance of health and wellness in today's busy lifestyle while serving our clients with the best holistic approach.
            </p>
            <Link to="/services">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-primary-50 opacity-30 rounded-bl-full" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Why We Do What We Do
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With time people are realizing the value of qualitative living and are striving for it. But its wholeness lies in adapting the well-thy lifestyle and continuing to live with such accompaniment. At Livin Significant, we are focused on empowering individuals to take control of their well-being and building such well-thy communities round the globe.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-primary-100 opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-primary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where individuals embrace a holistic approach to health, recognizing the interconnectedness of mind, body, and soul.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-primary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to educate, inspire, and guide people toward a balanced lifestyle that promotes wellness and vitality.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Abou;