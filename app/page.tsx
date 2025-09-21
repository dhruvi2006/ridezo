'use client';

import Header from '../components/Header';
import {
  Car,
  Clock,
  Shield,
  Star,
  DollarSign,
  Users,
  MapPin,
  Building2,
  Search,
  AlertTriangle,
  Building,
  ChevronDown,
  Phone,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen">
          {/* Navigation Header */}
          <Header />

          {/* Hero Section */}
          <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    Ridezo — Your Ultimate Travel Buddy <Car className="inline w-10 h-10 ml-3 text-yellow-400" />
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Pre-booked rides, professional drivers, and reliable daily service. Get to work on time, every time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="https://wa.me/919654577654?text=Hi! I'd like to book a ride with Ridezo" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transform">
                      Enquire on WhatsApp
                    </a>
                    <a href="#pricing" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:scale-105 transform">
                      View Pricing
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                        <div className="text-sm text-gray-200">Happy Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
                        <div className="text-sm text-gray-200">On-Time Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-200">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">5★</div>
                        <div className="text-sm text-gray-200">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Container - All sections animate together */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.01 }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >

          {/* General Users Section */}
          <motion.section
            id="general-users"
            className="py-16 md:py-20 px-4 bg-yellow-100"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black"
                  variants={fadeInUp}
                >
                  For Everyone Else — Flexible, Anytime, Anywhere
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto px-4"
                  variants={fadeInUp}
                >
                  Ridezo is more than a commute solution — it&apos;s your travel buddy for every need. From city errands to weekend getaways.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div
                  className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Perfect For
                    </motion.h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="text-yellow-400 text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black">Tourism & Outstation Trips</div>
                          <div className="text-gray-800 text-sm">Explore new destinations with ease</div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Users className="text-yellow-400 text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black">Family & Personal Travel</div>
                          <div className="text-gray-800 text-sm">Safe, comfortable rides for all ages</div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Building2 className="text-yellow-400 text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black">City Rides & Errands</div>
                          <div className="text-gray-800 text-sm">Reliable transport, whenever you need it</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="https://wa.me/919654577654?text=Hi! I'd like to book a ride with Ridezo" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Vehicle Options
                    </motion.h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-sm">All types of seats: 5, 7, 11, 18, 24 seaters</span>
          </li>
                      <li className="flex items-center">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-sm">Outstation cabs, tempo travellers, self-driver cars</span>
          </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="https://wa.me/919654577654?text=Hi! I'd like to explore outstation options with Ridezo" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Explore Options
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col sm:col-span-2 lg:col-span-1"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Booking
                    </motion.h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-sm">Book directly via WhatsApp</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-sm">Quick confirmations for all trip types</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="#pricing" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      View Pricing
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Office Goers Section */}
          <motion.section
            id="office-goers"
            className="py-16 md:py-20 px-4 bg-black text-yellow-400"
            variants={fadeInUp}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-8 md:mb-12"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
                  variants={fadeInUp}
                >
                  For Office Goers — The Daily Commute, Fixed Right
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-yellow-200 max-w-xl mx-auto px-4"
                  variants={fadeInUp}
                >
                  A dedicated plan for people who commute to work daily. Make your mornings stress-free with our reliable office commute service.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid lg:grid-cols-2 gap-6 md:gap-8"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div
                  className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-yellow-500/40 h-[400px] md:h-[450px] flex flex-col"
                  variants={fadeInLeft}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400"
                      variants={fadeInUp}
                    >
                      Features for Office Commuters
                    </motion.h3>
                    <ul className="space-y-3 md:space-y-4">
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">Pre-book weekly or monthly rides</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">Fixed pickup & drop schedules</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">Priority customer support</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">Regular driver assignment for familiarity and comfort</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">Corporate billing / invoicing options</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="https://wa.me/919654577654?text=Hi! I'd like to know more about office commute features" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg">
                      Learn More
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-yellow-500/40 h-[400px] md:h-[450px] flex flex-col"
                  variants={fadeInRight}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400"
                      variants={fadeInUp}
                    >
                      Benefits
                    </motion.h3>
                    <ul className="space-y-3 md:space-y-4">
                      <li className="flex items-center">
                        <span className="text-yellow-300 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">⭐</span>
                        <span className="text-sm md:text-base">Arrive relaxed and on time</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-300 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">⭐</span>
                        <span className="text-sm md:text-base">Remove daily travel stress and last-minute cab hunts</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-300 mr-3 md:mr-4 text-lg md:text-xl flex-shrink-0">⭐</span>
                        <span className="text-sm md:text-base">Safer rides with verified drivers and local compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="https://wa.me/919654577654?text=Hi! I'd like to pre-book office rides with Ridezo" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* How It Works Section */}
          <motion.section
            id="how-it-works"
            className="py-20 px-4 bg-yellow-50"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 text-black"
                  variants={fadeInUp}
                >
                  How It Works
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-800 max-w-3xl mx-auto"
                  variants={fadeInUp}
                >
                  Simple, straightforward process to get you where you need to go, when you need to be there.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-4 gap-8"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                <motion.div
                  className="text-center group"
                  variants={scaleIn}
                >
                  <motion.div
                    className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    1
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Choose Your Trip
                  </motion.h3>
                  <motion.p
                    className="text-gray-800 leading-relaxed"
                    variants={fadeInUp}
                  >
                    Office plan, city ride, or outstation (cab/tempo traveller/self-drive).
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group"
                  variants={scaleIn}
                >
                  <motion.div
                    className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    2
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Pick Time & Pickup
                  </motion.h3>
                  <motion.p
                    className="text-gray-800 leading-relaxed"
                    variants={fadeInUp}
                  >
                    One-time or recurring bookings.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group"
                  variants={scaleIn}
                >
                  <motion.div
                    className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    3
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Get Matched
                  </motion.h3>
                  <motion.p
                    className="text-gray-800 leading-relaxed"
                    variants={fadeInUp}
                  >
                    A verified driver or vehicle is assigned to your ride.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group"
                  variants={scaleIn}
                >
                  <motion.div
                    className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    4
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Ride With Confidence
                  </motion.h3>
                  <motion.p
                    className="text-gray-800 leading-relaxed"
                    variants={fadeInUp}
                  >
                    Real-time support, WhatsApp updates, and consistent service.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Why Ridezo Section */}
          <motion.section
            id="why-ridezo"
            className="py-16 md:py-20 px-4 bg-yellow-50"
            variants={fadeInUp}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-8 md:mb-12"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-black"
                  variants={fadeInUp}
                >
                  Why Choose Ridezo?
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed px-4"
                  variants={fadeInUp}
                >
                  We make commuting smarter, safer, and simpler. Whether you&apos;re an office commuter who wants peace of mind every morning, or planning a weekend getaway — Ridezo has you covered.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <Clock className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Punctuality You Can Count On</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Pre-book your everyday ride and never worry about delays. We understand the importance of being on time.</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <Shield className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Verified, Professional Drivers</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Trained, background-checked drivers who put safety and comfort first in every journey.</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <Star className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Consistent Comfort</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Same high standard every day — no surprises. Clean, comfortable vehicles every time.</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <DollarSign className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Transparent Pricing</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Clear fares, no surge, no hidden fees. What you see is what you pay.</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <Users className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">A Family-Like Experience</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Friendly support that treats your journey like it matters. We care about your comfort and safety.</p>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col"
                  variants={scaleIn}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <Car className="text-lg md:text-xl text-yellow-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Your Travel Buddy</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Reliable service for every journey, big or small. From daily commutes to weekend getaways.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Safety & Quality Section */}
          <section id="safety" className="py-20 px-4 bg-yellow-500">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Safety & Quality</h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                  Your safety is our priority. We ensure the highest standards of safety and quality in every ride.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="text-2xl text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Background Checks</h3>
                  <p className="text-gray-300 flex-grow">Comprehensive screening and training for all drivers</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="text-2xl text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Vehicle Inspections</h3>
                  <p className="text-gray-300 flex-grow">Regular maintenance and cleanliness checks</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="text-2xl text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Emergency Support</h3>
                  <p className="text-gray-300 flex-grow">24/7 support and live ride tracking</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-2xl text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Insurance & Compliance</h3>
                  <p className="text-gray-300 flex-grow">Full coverage and local regulation compliance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-4 bg-yellow-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Simple & Transparent Pricing</h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                  No surge pricing. No hidden charges. What you see is what you pay.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow h-[500px] flex flex-col">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Office Plans</h3>
                  <p className="text-gray-800 mb-6">Weekly / Monthly subscriptions — predictable monthly billing.</p>
                  <div className="text-3xl font-bold text-black mb-2">₹2,500-₹8,000</div>
                  <p className="text-gray-700 mb-6">per month</p>
                  <ul className="text-left space-y-3 mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Pre-booked rides</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Fixed schedules</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Priority support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow h-[500px] flex flex-col">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">City Rides</h3>
                  <p className="text-gray-800 mb-6">Metered / per-km pricing with fare estimates up front.</p>
                  <div className="text-3xl font-bold text-black mb-2">₹150-₹500</div>
                  <p className="text-gray-700 mb-6">per ride</p>
                  <ul className="text-left space-y-3 mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">On-demand booking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Transparent pricing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Instant booking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow h-[500px] flex flex-col">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Outstation</h3>
                  <p className="text-gray-800 mb-6">Fixed quotes based on route and vehicle type.</p>
                  <div className="text-3xl font-bold text-black mb-2">₹3,000-₹15,000</div>
                  <p className="text-gray-700 mb-6">per trip</p>
                  <ul className="text-left space-y-3 mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Long-distance travel</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Planned routes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800">Tourism packages</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <a href="https://wa.me/919654577654?text=Hi! I'd like to know about Ridezo pricing plans" className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg inline-block">
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-yellow-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">What Our Customers Say</h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                  Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their Ridezo experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg border border-yellow-400 h-[300px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="text-black text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-800 mb-6 text-lg leading-relaxed flex-grow">
                    &ldquo;Switching to Ridezo made my mornings stress-free. Always on time and drivers are professional. The pre-booking feature is a game-changer for my daily commute.&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg mr-4">
                      P
                    </div>
                    <div>
                      <p className="font-bold text-black">Priya Sharma</p>
                      <p className="text-gray-700">Marketing Lead, TechCorp</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg border border-yellow-400 h-[300px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="text-black text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-800 mb-6 text-lg leading-relaxed flex-grow">
                    &ldquo;Booked an outstation trip for the family — comfortable car and great service. The driver was courteous and the journey was smooth. Highly recommended!&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg mr-4">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-black">Rohit Kumar</p>
                      <p className="text-gray-700">Business Owner, Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <motion.section
            id="faq"
            className="py-16 md:py-20 px-4 bg-yellow-100"
            variants={fadeInUp}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-yellow-400 text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                  Got questions? We&apos;ve got answers. Here are the most common questions about our services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          Can I pre-book rides for the whole month?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        Yes — choose our Office Plan to schedule recurring rides. Perfect for daily commuters who want consistency and reliability. Save time and never worry about booking last-minute rides again.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          Are drivers background-checked?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        Absolutely. All drivers undergo comprehensive ID verification, background checks, and professional training to ensure your safety. We prioritize passenger security above everything else.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          What if my driver is late?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        We monitor every ride in real-time. If there&apos;s a delay, we&apos;ll notify you immediately via WhatsApp and provide support to resolve the issue quickly. Your time matters to us.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          Can Ridezo handle outstation trips?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        Yes — we offer comprehensive outstation and tourism packages with pre-planned routes and trusted drivers for long-distance travel. Perfect for holidays, business trips, or weekend getaways.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          How do I book a ride?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        All bookings are done via WhatsApp for the fastest service. Just message us with your requirements and get instant confirmation. No apps, no hassle — just direct communication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Car className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          What types of vehicles are available?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        5, 7, 11, 18, and 24-seater cabs, tempo travellers, and self-driver cars — perfect for office commutes, city rides, family trips, or group travel. We have the right vehicle for every occasion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="p-6 cursor-pointer group hover:bg-yellow-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <DollarSign className="text-yellow-400 text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                          How do I pay?
                        </h3>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                        <ChevronDown className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors transform group-hover:rotate-180 duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-700 text-base leading-relaxed ml-14">
                        Multiple payment options available — credit/debit cards, UPI, net banking, and corporate invoicing for business accounts. All payments are secure and transparent with no hidden charges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <a href="https://wa.me/919654577654?text=Hi! I have a question about Ridezo services" className="inline-flex items-center bg-black text-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
                  <Phone className="mr-2" />
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>
          </motion.section>
          </motion.div>

          {/* Footer CTA Section */}
          <section id="contact" className="py-12 px-4 bg-black text-yellow-400">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for a Smarter Commute or a Hassle-Free Trip?</h2>
              <p className="text-base mb-8 text-yellow-200 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Ridezo for their daily travel needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/40">
                  <div className="text-xl font-bold mb-1 text-yellow-400">500+</div>
                  <div className="text-yellow-200 text-sm">Happy Customers</div>
                </div>
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/40">
                  <div className="text-xl font-bold mb-1 text-yellow-400">99%</div>
                  <div className="text-yellow-200 text-sm">On-Time Rate</div>
                </div>
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/40">
                  <div className="text-xl font-bold mb-1 text-yellow-400">24/7</div>
                  <div className="text-yellow-200 text-sm">Support Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919654577654?text=Hi! I'd like to book a ride with Ridezo" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg text-center">
                  Enquire on WhatsApp
                </a>
                <a href="tel:+91-9654577654" className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-500 hover:text-black transition-colors text-center">
                  Call Us: +91-9654577654
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-yellow-500/30">
                <p className="text-base text-yellow-200">
                  Ridezo — Your Ultimate Travel Buddy, Everyday and Everywhere.
                </p>
              </div>
            </div>
          </section>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <a 
              href="https://wa.me/919654577654?text=Hi! I'd like to book a ride with Ridezo" 
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
    </div>
  );
}
 