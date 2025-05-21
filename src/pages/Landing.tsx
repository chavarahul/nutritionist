import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarqueeDemo from "@/components/Testimonials";
import { Users, LayoutDashboard, Settings, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-img.jpg";
import Services from "@/components/landing/Services";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(Array(4).fill(false));
  const [count, setCount] = useState(0);
  const targetCount = 2000;
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollY } = useScroll();
  const parallaxOffset = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * 200);
      }
    }, 200);

    const counterDuration = 2000;
    const counterInterval = 20;
    const incrementAmount = targetCount / (counterDuration / counterInterval);

    let currentCount = 0;
    const counterTimer = setInterval(() => {
      currentCount += incrementAmount;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(counterTimer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, counterInterval);

    return () => {
      clearTimeout(timer);
      clearInterval(counterTimer);
    };
  }, []);

  const featureCards = [
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "User Role Management",
      description:
        "Tailored dashboards and permissions for admins, nutritionists, and clients with robust access controls.",
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary-500" />,
      title: "Intuitive Dashboards",
      description:
        "Role-specific interfaces delivering actionable insights and tools for all users.",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary-500" />,
      title: "Client Management",
      description:
        "Powerful tools for nutritionists to manage clients and admins to oversee operations seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <motion.section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50 min-h-[80vh] flex items-center"
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
          <motion.div
            className="absolute top-72 -left-48 w-80 h-80 rounded-full bg-primary-200 opacity-20 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2 max-w-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block mb-4 py-2 px-5 rounded-full bg-primary-100 text-primary-500 text-sm font-semibold tracking-wide">
                Personalized Nutrition
              </span>
              <h1 className="text-5xl font-extrabold mb-6 leading-tight text-gray-900">
                Your Personal
                <span className="block bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Nutrition Journey
                </span>
                Starts Here
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Connect with expert nutritionists, track your progress, and achieve your health goals with our cutting-edge platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/login">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <motion.div
                      key={item}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-gray-200 flex items-center justify-center overflow-hidden"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: isVisible[index] ? 1 : 0, x: isVisible[index] ? 0 : -30 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="text-sm font-bold text-gray-500">
                        {String.fromCharCode(64 + item)}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="ml-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: count > 0 ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <p className="text-sm text-gray-600 font-medium">
                    <span className="font-bold text-primary-500">{count.toLocaleString()}+</span> active users
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              style={{ y: parallaxOffset }}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-primary-100 bg-gradient-to-br from-primary-500 to-primary-700 p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white px-3 py-0.5 rounded-full text-xs text-gray-500 shadow-sm">
                      nutrition-dashboard.app
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs font-medium text-gray-400">Welcome back, Alex</p>
                        <h3 className="text-xl font-bold text-gray-900">Your Nutrition Dashboard</h3>
                      </div>
                      <div className="bg-primary-100 text-primary-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        Pro Plan
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <motion.div
                        className="bg-gray-50 p-4 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <p className="text-xs text-gray-500 mb-2">Calories Today</p>
                        <div className="flex items-end">
                          <span className="text-2xl font-bold text-gray-900">1,840</span>
                          <span className="text-xs text-green-500 ml-2">-160 kcal</span>
                        </div>
                        <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-primary-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "72%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-gray-50 p-4 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <p className="text-xs text-gray-500 mb-2">Water Intake</p>
                        <div className="flex items-end">
                          <span className="text-2xl font-bold text-gray-900">1.8L</span>
                          <span className="text-xs text-yellow-500 ml-2">+0.7L to go</span>
                        </div>
                        <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-primary-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "62%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="bg-gray-50 p-4 rounded-lg mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-gray-900">Macronutrients</p>
                        <p className="text-xs text-gray-500">72% of goal</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="h-2 rounded-full bg-primary-500 flex-1"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.div
                          className="h-2 rounded-full bg-primary-400 flex-1"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 1.1 }}
                        />
                        <motion.div
                          className="h-2 rounded-full bg-primary-300 flex-1"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 1.2 }}
                        />
                      </div>
                      <div className="flex text-xs mt-2 text-gray-500 justify-between">
                        <span>Protein: 82g</span>
                        <span>Carbs: 210g</span>
                        <span>Fats: 56g</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 rounded-lg p-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-gray-900">Nutrition Coach Call</p>
                        <div className="bg-primary-100 text-primary-500 px-2 py-0.5 rounded-full text-xs font-medium">
                          Today 4:00 PM
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-10 -left-16 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-primary-500"></div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Goal Progress</p>
                    <p className="text-base font-bold text-primary-500">+68%</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <div className="w-5 h-5 text-primary-500">📊</div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Weekly Report</p>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-3 bg-primary-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-primary-500 rounded-full"></div>
                      <div className="h-4 w-3 bg-primary-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-primary-500 rounded-full"></div>
                      <div className="h-4 w-3 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="py-24 bg-white relative overflow-hidden"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-primary-50 opacity-30 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-primary-50 opacity-30 rounded-tr-full" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 py-2 px-5 rounded-full bg-primary-100 text-primary-500 text-sm font-semibold">
              Our Platform
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Comprehensive Nutrition Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect clients with professional nutritionists under expert admin supervision.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm border border-primary-100 transition-all duration-300 ${activeFeature === index ? "border-primary-500 shadow-lg" : ""
                  }`}
                onMouseEnter={() => setActiveFeature(index)}
                whileHover={{ y: -10, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                initial={{ y: 30 }}
                whileInView={{  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Services />

      <motion.section
        id="testimonials"
        className="py-24 bg-white relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-primary-100 opacity-20" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-primary-100 opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 py-2 px-5 rounded-full bg-primary-100 text-primary-500 text-sm font-semibold">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Trusted by Health Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our users about their experience with our nutrition platform.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <MarqueeDemo />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="pricing"
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-12 lg:p-16 text-center shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              <div className="absolute top-12 right-12 w-48 h-48 rounded-full border-8 border-white" />
              <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full border-4 border-white" />
              <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white" />
            </div>
            <div className="relative z-10">
              <span className="inline-block mb-4 py-2 px-5 rounded-full bg-white bg-opacity-20 text-white text-sm font-semibold">
                Join Today
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
                Transform how you manage nutrition services. Join our platform today for admins, nutritionists, and clients.
              </p>
              <Link to="/login">
                <Button className="bg-white text-primary-500 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;