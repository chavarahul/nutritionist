import { motion } from "framer-motion";
import { Apple, Heart, BarChart2, Utensils, Brain, BookOpen } from "lucide-react";

const services = [
  {
    icon: <Apple className="h-6 w-6 text-primary-500" />,
    title: "Personalized Nutrition",
    description: "Custom meal plans for your health goals.",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary-500" />,
    title: "Wellness Coaching",
    description: "One-on-one guidance from certified coaches.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary-500" />,
    title: "Food Tracking",
    description: "Track meals with advanced analysis tools.",
  },
  {
    icon: <Utensils className="h-6 w-6 text-primary-500" />,
    title: "Meal Planning",
    description: "Healthy recipes and meal plans simplified.",
  },
  {
    icon: <Brain className="h-6 w-6 text-primary-500" />,
    title: "Behavior Coaching",
    description: "Build sustainable habits with expert support.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary-500" />,
    title: "Nutrition Education",
    description: "Engaging workshops and resources.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-16 bg-gray-50 relative overflow-hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-3 py-1 px-4 rounded-full bg-primary-100 text-primary-500 text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Your Wellness Journey
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive nutrition and wellness solutions tailored to you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-primary-50 hover:border-primary-200 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}