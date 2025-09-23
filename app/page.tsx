'use client';

import { useState, useEffect, useRef } from 'react';
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
  CheckCircle,
  MessageCircle,
  Map,
  Calendar,
  Briefcase,
  
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
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  const carFleetRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const officeBgImages = ['/img5.jpg', '/img6.jpg', '/img7.jpg'];
  const [officeBgIndex, setOfficeBgIndex] = useState<number>(0);
  const [isRoutesModalOpen, setIsRoutesModalOpen] = useState<boolean>(false);
  const [enquiry, setEnquiry] = useState({
    from: 'Delhi',
    to: 'Gurgaon',
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    pickupTime: '',
    pickupLocation: '',
    pinCode: '',
    notes: ''
  });
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const validateEmail = (value: string) => {
    if (!value) return '';
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    return re.test(value) ? '' : 'Enter a valid email address';
  };

  const validatePhone = (value: string) => {
    if (!value) return 'Phone is required';
    const digits = value.replace(/\D/g, '');
    return digits.length === 10 ? '' : 'Enter a 10-digit phone number';
  };

  const openRoutesModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsRoutesModalOpen(true);
  };

  const closeRoutesModal = () => {
    setIsRoutesModalOpen(false);
    setEnquiry({
      from: 'Delhi',
      to: 'Gurgaon',
      name: '',
      email: '',
      phone: '',
      startDate: '',
      endDate: '',
      pickupTime: '',
      pickupLocation: '',
      pinCode: '',
      notes: ''
    });
    setEmailError('');
    setPhoneError('');
  };

  const submitEnquiryToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const emailErr = validateEmail(enquiry.email);
    const phoneErr = validatePhone(enquiry.phone);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    if (emailErr || phoneErr) return;
    const number = '919873058354';
    const parts = [
      'Taxi Tour Enquiry',
      '',
      `Route: ${enquiry.from} → ${enquiry.to}`,
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone}`,
      `Timeline: ${enquiry.startDate || '-'} to ${enquiry.endDate || '-'}`,
      `Pickup time: ${enquiry.pickupTime || '-'}`,
      `Pickup location: ${enquiry.pickupLocation || '-'}`,
      `Pin code: ${enquiry.pinCode || '-'}`
    ];
    if (enquiry.notes.trim()) {
      parts.push(`Notes: ${enquiry.notes.trim()}`);
    }
    const message = parts.join('\n');
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Helpers for date/time constraints
  const getTodayDateString = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const getNowTimeString = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };
  const todayStr = getTodayDateString();
  const nowStr = getNowTimeString();

  useEffect(() => {
    const intervalMs = 3000; // change every ~3 seconds
    const intervalId = setInterval(() => {
      setOfficeBgIndex((current) => (current + 1) % officeBgImages.length);
    }, intervalMs);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const setupAutoScroll = (container: HTMLDivElement | null, speedPxPerSec: number, duplicateContent: boolean) => {
      if (!container) return () => {};
      let animationFrame = 0;
      let lastTime = 0;
      let isPaused = false;

      // Duplicate content for seamless loop
      if (duplicateContent) {
        const totalWidth = container.scrollWidth;
        const clone = container.cloneNode(true) as HTMLDivElement;
        // move children into a wrapper to avoid duplicating listeners on container
      }

      const onMouseEnter = () => { isPaused = true; };
      const onMouseLeave = () => { isPaused = false; lastTime = 0; request(); };
      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mouseleave', onMouseLeave);

      const step = (time: number) => {
        if (isPaused) return;
        if (!lastTime) lastTime = time;
        const delta = (time - lastTime) / 1000; // seconds
        lastTime = time;

        container.scrollLeft += speedPxPerSec * delta;
        const maxScroll = container.scrollWidth - container.clientWidth;
        // Seamless loop: when past half (duplicated), jump back by half-width
        if (duplicateContent) {
          const half = Math.max(0, Math.floor(maxScroll / 2));
          if (container.scrollLeft >= half) {
            container.scrollLeft = container.scrollLeft - half;
          }
        } else {
          if (container.scrollLeft >= maxScroll - 2) {
            container.scrollLeft = 0;
          }
        }
        animationFrame = requestAnimationFrame(step);
      };

      const request = () => { animationFrame = requestAnimationFrame(step); };
      request();

      return () => {
        cancelAnimationFrame(animationFrame);
        container.removeEventListener('mouseenter', onMouseEnter);
        container.removeEventListener('mouseleave', onMouseLeave);
      };
    };

    // Duplicate content for seamless effect: both strips
    const cleanupFleet = setupAutoScroll(carFleetRef.current, 80, true);
    const cleanupFaq = setupAutoScroll(faqRef.current, 70, true);
    return () => {
      cleanupFleet && cleanupFleet();
      cleanupFaq && cleanupFaq();
    };
  }, []);

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
              poster="/img3.png"
            >
              <source src="/hero_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    Ridezo — Your Ultimate Travel Buddy <Car className="inline w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-2 sm:ml-3 text-yellow-400" />
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Pre-booked rides, professional drivers, and reliable daily service. Get to work on time, every time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a href="https://wa.me/919873058354?text=Hi! I'd like to book a ride with Ridezo" className="bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transform">
                      Enquire on WhatsApp
                    </a>
                    <a href="#pricing" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:scale-105 transform">
                      View Pricing
                    </a>
                  </div>
                </div>

                {/* Stats section - now visible on mobile */}
                <div className="block">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col">
                    <div className="mb-4">
                      <h3 className="-mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-yellow-400">Why Choose Us ?</h3>
                      <div className="mt-2 h-px bg-white/20"></div>
                    </div>
                    <div className="relative flex-1 flex items-center">
                      <div className="hidden sm:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/20"></div>
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">500+</div>
                            <div className="text-xs sm:text-sm text-gray-200">Happy Customers</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">99%</div>
                            <div className="text-xs sm:text-sm text-gray-200">On-Time Rate</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">24/7</div>
                            <div className="text-xs sm:text-sm text-gray-200">Support</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">4.52★</div>
                            <div className="text-xs sm:text-sm text-gray-200">Average Rating</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">25+</div>
                            <div className="text-xs sm:text-sm text-gray-200">Cities Covered</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">10k+</div>
                            <div className="text-xs sm:text-sm text-gray-200">Rides Completed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Taxi Tour List */}
          <motion.section
            id="taxi-tours"
            className="py-4 sm:py-6 px-4 bg-white border-y border-gray-200"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Left label */}
                <div className="shrink-0 inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="hidden xs:inline">City Tours</span>
                  <span className="xs:hidden">Tours</span>
                </div>

                {/* Separator */}
                <span className="text-gray-300 hidden xs:inline">|</span>

                {/* Middle routes - one-line, scrollable */}
                <div className="flex-1 overflow-x-auto no-scrollbar">
                  <div className="whitespace-nowrap text-xs sm:text-sm text-gray-900 flex justify-start sm:justify-center">
                    {[
                      'Delhi to Gurgaon',
                      'Delhi to Noida',
                      'Delhi to Ghaziabad',
                      'Delhi to Agra',
                      'Delhi to Jaipur'
                    ].map((label, idx, arr) => (
                      <span key={label} className="inline-block">
                        <span className="hover:text-blue-600 font-medium transition-colors">{label}</span>
                        {idx < arr.length - 1 && <span className="mx-2 sm:mx-3 text-gray-300">|</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                <span className="text-gray-300 hidden sm:inline">|</span>

                {/* Right CTA */}
                <button
                  onClick={openRoutesModal}
                  className="shrink-0 inline-flex items-center rounded-full bg-yellow-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold hover:bg-yellow-300 transition-colors"
                >
                  <span className="hidden sm:inline">Explore All Routes</span>
                  <span className="sm:hidden">Routes</span>
                </button>
              </div>
            </div>
          </motion.section>

          

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
            className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-100"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-black px-2"
                  variants={fadeInUp}
                >
                  For Everyone Else — Flexible, Anytime, Anywhere
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto px-4"
                  variants={fadeInUp}
                >
                  Ridezo is more than a commute solution — it&apos;s your travel buddy for every need. From city errands to weekend getaways.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
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
                  className="bg-yellow-500 rounded-xl p-4 sm:p-6 md:p-8 border border-yellow-400 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Perfect For
                    </motion.h3>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start sm:items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <MapPin className="text-yellow-400 text-base sm:text-lg md:text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black text-sm sm:text-base">Tourism & Outstation Trips</div>
                          <div className="text-gray-800 text-xs sm:text-sm">Explore new destinations with ease</div>
                        </div>
                      </li>
                      <li className="flex items-start sm:items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <Users className="text-yellow-400 text-base sm:text-lg md:text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black text-sm sm:text-base">Family & Personal Travel</div>
                          <div className="text-gray-800 text-xs sm:text-sm">Safe, comfortable rides for all ages</div>
                        </div>
                      </li>
                      <li className="flex items-start sm:items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <Building2 className="text-yellow-400 text-base sm:text-lg md:text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-black text-sm sm:text-base">City Rides & Errands</div>
                          <div className="text-gray-800 text-xs sm:text-sm">Reliable transport, whenever you need it</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-4 sm:pt-6">
                    <a href="https://wa.me/919873058354?text=Hi! I'd like to book a ride with Ridezo" className="bg-black text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 rounded-xl p-4 sm:p-6 md:p-8 border border-yellow-400 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Vehicle Options
                    </motion.h3>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start sm:items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <span className="text-yellow-400 text-sm sm:text-base md:text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-xs sm:text-sm">All types of seats: 5, 7, 11, 18, 24 seaters</span>
                      </li>
                      <li className="flex items-start sm:items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <span className="text-yellow-400 text-sm sm:text-base md:text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-xs sm:text-sm">Outstation cabs, tempo travellers, self-driver cars</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-4 sm:pt-6">
                    <a href="#car-fleet" className="bg-black text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Explore Options
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-yellow-500 rounded-xl p-4 sm:p-6 md:p-8 border border-yellow-400 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col sm:col-span-2 lg:col-span-1"
                  variants={scaleIn}
                >
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-black"
                      variants={fadeInUp}
                    >
                      Booking
                    </motion.h3>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start sm:items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <span className="text-yellow-400 text-sm sm:text-base md:text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-xs sm:text-sm">Book directly via WhatsApp</span>
                      </li>
                      <li className="flex items-start sm:items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                          <span className="text-yellow-400 text-sm sm:text-base md:text-lg">✓</span>
                        </div>
                        <span className="text-gray-800 text-xs sm:text-sm">Quick confirmations for all trip types</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-4 sm:pt-6">
                    <a href="#pricing" className="bg-black text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg">
                      View Pricing
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Car Fleet Section */}
          <motion.section
            id="car-fleet"
            className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-50"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black"
                  variants={fadeInUp}
                >
                  Our Car Fleet
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2"
                  variants={fadeInUp}
                >
                  Choose from our premium fleet of vehicles for comfortable and safe journeys across all your travel needs.
                </motion.p>
              </motion.div>

              {/* Horizontal Scroll Container with endless auto-scroll */}
              <motion.div
                className="overflow-x-auto no-scrollbar pb-4"
                variants={fadeInUp}
                ref={carFleetRef}
              >
                <motion.div
                  className="flex space-x-3 sm:space-x-4 md:space-x-6 min-w-max px-2 sm:px-4 marquee-track marquee-track-fleet"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.15
                      }
                    }
                  }}
                >
                  {/* Aura Dzire */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/aura-dzire.png"
                        alt="Aura Dzire"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 leading-tight">Aura Dzire</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Perfect for comfortable city rides and short trips</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500">4 Seater</span>
                        <span className="text-yellow-600 font-semibold text-xs sm:text-sm">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Ertiga With Carrier */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/car-image-3.png"
                        alt="Ertiga With Carrier"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                  </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Ertiga With Carrier</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Spacious family vehicle with extra luggage space</p>
                </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">7 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Innova Crysta */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/innova-crysta-2.png"
                        alt="Innova Crysta"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                  </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Innova Crysta</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Premium MPV for comfortable group travel</p>
                </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">7 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Innova Hycross */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/innova-hycross-car-e1755683914497.png"
                        alt="Innova Hycross"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                  </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Innova Hycross</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Modern hybrid SUV for eco-friendly travel</p>
                </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">7 Seater</span>
                        <span className="text-yellow-600 font-semibold">Hybrid AC</span>
              </div>
            </div>
                  </motion.div>

                  {/* Hatchback */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/hatchback-car.png"
                        alt="Hatchback Car"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Hatchback</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Compact and fuel-efficient for city commutes</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">4 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* BMW/Audi/Mercedes */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/cars-1.png"
                        alt="BMW/Audi/Mercedes"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">BMW/Audi/Mercedes</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Luxury sedans for premium travel experience</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">4 Seater</span>
                        <span className="text-yellow-600 font-semibold">Premium AC</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tempo Traveller */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/tempo-traveller.png"
                        alt="Tempo Traveller"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Tempo Traveller</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Perfect for group travel and family outings</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">11-15 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Force Urbania */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/force-urbania.png"
                        alt="Force Urbania"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Force Urbania</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Spacious and reliable for large groups</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">13 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mini & Luxury Bus */}
                  <motion.div
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                  >
                    <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <img
                        src="https://cityyatra.in/wp-content/uploads/2025/08/bus-image-e1755695593719.png"
                        alt="Mini & Luxury Bus"
                        className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 h-36 sm:h-40 md:h-44 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2 leading-tight">Mini & Luxury Bus</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Perfect for large groups, events, and charters</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">18-50 Seater</span>
                        <span className="text-yellow-600 font-semibold">AC Available</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="text-center mt-8 sm:mt-10 md:mt-12"
                variants={fadeInUp}
              >
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Scroll horizontally to see all vehicles →</p>
                <a
                  href="https://wa.me/919873058354?text=Hi! I'd like to know about available vehicles"
                  className="bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transform inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Ride
                </a>
              </motion.div>
            </div>
          </motion.section>

          {/* Office Goers Section */}
          <motion.section
            id="office-goers"
            className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden"
            variants={fadeInUp}
          >
            {/* Rotating background images with crossfade */}
            <div className="pointer-events-none absolute inset-0">
              {officeBgImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="Office commute background"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === officeBgIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
              <div className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-8 sm:mb-10 md:mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-300/30 text-xs font-semibold uppercase tracking-wider">Office Plan</div>
              </div>
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-12"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg px-2"
                  variants={fadeInUp}
                >
                  For Office Goers — The Daily Commute, Fixed Right
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4"
                  variants={fadeInUp}
                >
                  A dedicated plan for people who commute to work daily. Make your mornings stress-free with our reliable office commute service.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
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
                  className="group relative p-4 sm:p-6 md:p-7 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[350px] sm:min-h-[380px] md:min-h-[400px] flex flex-col overflow-hidden hover:-translate-y-0.5"
                  variants={fadeInLeft}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>
                  <div className="mx-auto mb-4 sm:mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform"><Briefcase className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <h3 className="text-base sm:text-lg font-bold text-white text-center">Features for Office Commuters</h3>
                  <div className="mt-2 sm:mt-3 mb-2 h-px bg-white/10"></div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-100/90">
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">✓</span><span>Pre-book weekly or monthly rides</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">✓</span><span>Fixed pickup & drop schedules</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">✓</span><span>Priority customer support</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">✓</span><span>Regular driver assignment for familiarity and comfort</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">✓</span><span>Corporate billing / invoicing options</span></li>
                  </ul>
                  <div className="absolute inset-x-4 sm:inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="group relative p-4 sm:p-6 md:p-7 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[350px] sm:min-h-[380px] md:min-h-[400px] flex flex-col overflow-hidden hover:-translate-y-0.5"
                  variants={fadeInRight}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>
                  <div className="mx-auto mb-4 sm:mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <h3 className="text-base sm:text-lg font-bold text-white text-center">Benefits</h3>
                  <div className="mt-2 sm:mt-3 mb-2 h-px bg-white/10"></div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-100/90">
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">⭐</span><span>Arrive relaxed and on time</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">⭐</span><span>Remove daily travel stress and last-minute cab hunts</span></li>
                    <li className="flex items-start gap-2 sm:gap-3 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-white/5"><span className="text-yellow-300 mt-0.5">⭐</span><span>Safer rides with verified drivers and local compliance</span></li>
                  </ul>
                  <div className="absolute inset-x-4 sm:inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </motion.div>
              </motion.div>
              {/* Single CTA for the section */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                <a
                  href="https://wa.me/919873058354?text=Hi! I'd like to enquire about the Office Plan — For Office Goers — The Daily Commute, Fixed Right"
                  className="bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-xl hover:shadow-yellow-500/25 transform hover:scale-105"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.section>

          {/* How It Works Section */}
          <motion.section
            id="how-it-works"
            className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-50"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black"
                  variants={fadeInUp}
                >
                  How It Works
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto px-2"
                  variants={fadeInUp}
                >
                  Simple, straightforward process to get you where you need to go, when you need to be there.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
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
                    className="bg-black text-yellow-400 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    1
                  </motion.div>
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Choose Your Trip
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-gray-800 leading-relaxed"
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
                    className="bg-black text-yellow-400 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    2
                  </motion.div>
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Pick Time & Pickup
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-gray-800 leading-relaxed"
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
                    className="bg-black text-yellow-400 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    3
                  </motion.div>
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Get Matched
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-gray-800 leading-relaxed"
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
                    className="bg-black text-yellow-400 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-md group-hover:scale-105 transition-transform"
                    variants={scaleIn}
                  >
                    4
                  </motion.div>
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black"
                    variants={fadeInUp}
                  >
                    Ride With Confidence
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-gray-800 leading-relaxed"
                    variants={fadeInUp}
                  >
                    Real-time support, WhatsApp updates, and consistent service.
                  </motion.p>
                </motion.div>
              </motion.div>
                  </div>
          </motion.section>

          {/* Outstation Routes Section */}
          <motion.section
            id="outstation"
            className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden"
            variants={fadeInUp}
          >
            {/* Decorative background using img4 - anchored to bottom (background-image for precise control) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24rem] sm:h-[28rem] md:h-[32rem] opacity-60" aria-hidden="true">
              <div className="w-full h-full bg-[url('/img4.jpg')] bg-cover bg-[position:50%_100%] md:bg-[position:50%_90%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent"></div>
            </div>
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black"
                  variants={fadeInUp}
                >
                  Outstation Routes
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2"
                  variants={fadeInUp}
                >
                  Reliable outstation travel across major Indian cities. Safe, comfortable journeys with verified drivers.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Mumbai.jpg"
                      alt="Delhi to Mumbai Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Mumbai</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Comfortable long-distance travel</p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Jaipur-1.jpg"
                      alt="Delhi to Jaipur Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Jaipur</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Historic city adventures</p>
                </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Agra.jpg"
                      alt="Delhi to Agra Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Agra</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Taj Mahal & heritage sites</p>
                </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Puna-1.jpg"
                      alt="Delhi to Pune Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Pune</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Tech hub & cultural blend</p>
            </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Dehradun-1.jpg"
                      alt="Delhi to Dehradun Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Dehradun</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Hill station getaway</p>
                        </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Chandigarh-1.jpg"
                      alt="Delhi to Chandigarh Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Chandigarh</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Clean & green city</p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Lucknow-1.jpg"
                      alt="Delhi to Lucknow Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Lucknow</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Cultural capital of India</p>
                        </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={scaleIn}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://cityyatra.in/wp-content/uploads/2025/08/Delhi-To-Chennai.jpg"
                      alt="Delhi to Chennai Route"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Delhi → Chennai</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">Southern gateway</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="text-center mt-12"
                variants={fadeInUp}
              >
                <a
                  href="https://wa.me/919873058354?text=Hi! I'd like to book an outstation ride"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transform inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Outstation Trip
                </a>
              </motion.div>
                  </div>
          </motion.section>

          

          {/* Explore All Routes - Modal */}
          {isRoutesModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4">
              <div className="absolute inset-0 bg-black/50" onClick={closeRoutesModal}></div>
              <div className="relative w-full max-w-xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl bg-white shadow-2xl border border-black/10 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
                  <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" /> Explore All Routes
                  </div>
                  <button onClick={closeRoutesModal} className="text-gray-500 hover:text-gray-700 text-lg sm:text-xl">✕</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <form onSubmit={submitEnquiryToWhatsApp} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:col-span-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <input type="text" value={enquiry.from} readOnly className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <select
                        value={enquiry.to}
                        onChange={(e) => setEnquiry({ ...enquiry, to: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      >
                        {['Gurgaon','Noida','Ghaziabad','Agra','Jaipur'].map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" required value={enquiry.name} onChange={(e)=>setEnquiry({...enquiry,name:e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={enquiry.email}
                      onChange={(e)=>{ const v=e.target.value; setEnquiry({...enquiry,email:v}); setEmailError(validateEmail(v)); }}
                      className={`w-full rounded-lg border px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${emailError ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-yellow-400'}`}
                    />
                    {emailError && <p className="mt-1 text-xs text-red-600">{emailError}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={enquiry.phone}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      onKeyDown={(e)=>{ const invalid=['e','E','+','-','.']; if(invalid.includes(e.key)) e.preventDefault(); }}
                      onChange={(e)=>{ const v=e.target.value.replace(/\D/g,'').slice(0,10); setEnquiry({...enquiry,phone:v}); setPhoneError(validatePhone(v)); }}
                      className={`w-full rounded-lg border px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${phoneError ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-yellow-400'}`}
                    />
                    {phoneError && <p className="mt-1 text-xs text-red-600">{phoneError}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <input type="text" value={enquiry.pickupLocation} onChange={(e)=>setEnquiry({...enquiry,pickupLocation:e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                    <input
                      type="tel"
                      value={enquiry.pinCode}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      onKeyDown={(e)=>{ const invalid=['e','E','+','-','.']; if(invalid.includes(e.key)) e.preventDefault(); }}
                      onChange={(e)=>{ const v=e.target.value.replace(/\D/g,'').slice(0,6); setEnquiry({...enquiry,pinCode:v}); }}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      min={todayStr}
                      value={enquiry.startDate}
                      onChange={(e)=>{
                        const newStart = e.target.value;
                        setEnquiry((prev)=>{
                          const endAdjusted = prev.endDate && prev.endDate < newStart ? newStart : prev.endDate;
                          return { ...prev, startDate: newStart, endDate: endAdjusted };
                        });
                      }}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="date"
                      min={enquiry.startDate || todayStr}
                      value={enquiry.endDate}
                      onChange={(e)=>setEnquiry({...enquiry,endDate:e.target.value})}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                    <input
                      type="time"
                      min={enquiry.startDate === todayStr ? nowStr : undefined}
                      value={enquiry.pickupTime}
                      onChange={(e)=>setEnquiry({...enquiry,pickupTime:e.target.value})}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                      <textarea rows={3} value={enquiry.notes} onChange={(e)=>setEnquiry({...enquiry,notes:e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" placeholder="Any special requests (optional)"></textarea>
                    </div>
                    <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 pt-1">
                      <button type="button" onClick={closeRoutesModal} className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 sm:py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Cancel</button>
                      <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-yellow-400 text-black px-5 py-2.5 sm:py-2 text-sm font-bold hover:bg-yellow-300">Enquire</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

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
          <section id="safety" className="relative py-24 px-4 overflow-hidden">
            {/* Background image for safety section */}
            <div className="pointer-events-none absolute inset-0">
              <img src="/img3.png" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
              <div className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-300/30 text-xs font-semibold uppercase tracking-wider">
                  Trusted & Verified
                </div>
                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
                  Safety & Quality You Can Count On
                </h2>
                <p className="text-lg md:text-xl text-gray-100/90 max-w-3xl mx-auto">
                  Every ride is protected with verified drivers, routinely inspected vehicles and responsive support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Background Checks</h3>
                  <p className="mt-2 text-sm text-gray-100/80 text-center">Comprehensive screening and training for all drivers</p>
                  <div className="absolute inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </div>

                <div className="group relative p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Vehicle Inspections</h3>
                  <p className="mt-2 text-sm text-gray-100/80 text-center">Regular maintenance and cleanliness checks</p>
                  <div className="absolute inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </div>

                <div className="group relative p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Emergency Support</h3>
                  <p className="mt-2 text-sm text-gray-100/80 text-center">24/7 support and live ride tracking</p>
                  <div className="absolute inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </div>

                <div className="group relative p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-yellow-400/90 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(250,204,21,0.45)] group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">Insurance & Compliance</h3>
                  <p className="mt-2 text-sm text-gray-100/80 text-center">Full coverage and local regulation compliance</p>
                  <div className="absolute inset-x-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
                </div>
              </div>

              
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">Simple & Transparent Pricing</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto px-2">
                  No surge pricing. No hidden charges. What you see is what you pay.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow min-h-[450px] sm:min-h-[480px] md:min-h-[500px] flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Building className="text-lg sm:text-xl md:text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-black">Office Plans</h3>
                  <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">Weekly / Monthly subscriptions — predictable monthly billing.</p>
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-2">₹2,500-₹8,000</div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">per month</p>
                  <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Pre-booked rides</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Fixed schedules</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Priority support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow min-h-[450px] sm:min-h-[480px] md:min-h-[500px] flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Building2 className="text-lg sm:text-xl md:text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-black">City Rides</h3>
                  <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">Metered / per-km pricing with fare estimates up front.</p>
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-2">₹150-₹500</div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">per ride</p>
                  <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">On-demand booking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Transparent pricing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Instant booking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-center border border-yellow-400 hover:shadow-xl transition-shadow min-h-[450px] sm:min-h-[480px] md:min-h-[500px] flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <MapPin className="text-lg sm:text-xl md:text-2xl text-yellow-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-black">Outstation</h3>
                  <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">Fixed quotes based on route and vehicle type.</p>
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-2">₹3,000-₹15,000</div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">per trip</p>
                  <ul className="text-left space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Long-distance travel</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Planned routes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center mr-3">
                        <span className="text-yellow-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-800 text-sm sm:text-base">Tourism packages</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8 sm:mt-10 md:mt-12">
                <a href="https://wa.me/919873058354?text=Hi! I'd like to know about Ridezo pricing plans" className="bg-black text-yellow-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg inline-block">
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">What Our Customers Say</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto px-2">
                  Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their Ridezo experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-yellow-400 min-h-[320px] sm:min-h-[340px] md:min-h-[360px] flex flex-col">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="text-black text-lg sm:text-xl md:text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">
                    &ldquo;Switching to Ridezo made my mornings stress-free. Always on time and drivers are professional. The pre-booking feature is a game-changer for my daily commute.&rdquo;
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-yellow-400/30">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm sm:text-base md:text-lg mr-3 sm:mr-4 flex-shrink-0">
                      P
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-black text-sm sm:text-base truncate">Priya Sharma</p>
                      <p className="text-gray-700 text-xs sm:text-sm truncate">Marketing Lead, TechCorp</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-yellow-400 min-h-[320px] sm:min-h-[340px] md:min-h-[360px] flex flex-col">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="text-black text-lg sm:text-xl md:text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">
                    &ldquo;Booked an outstation trip for the family — comfortable car and great service. The driver was courteous and the journey was smooth. Highly recommended!&rdquo;
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-yellow-400/30">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm sm:text-base md:text-lg mr-3 sm:mr-4 flex-shrink-0">
                      R
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-black text-sm sm:text-base truncate">Rohit Kumar</p>
                      <p className="text-gray-700 text-xs sm:text-sm truncate">Business Owner, Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <motion.section
            id="faq"
            className="py-12 sm:py-16 md:py-20 px-4 bg-yellow-100"
            variants={fadeInUp}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="text-yellow-400 text-lg sm:text-xl md:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">Frequently Asked Questions</h2>
                <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto px-2">
                  Got questions? We&apos;ve got answers. Here are the most common questions about our services.
                </p>
              </div>

              {/* Horizontal Scroll Container with endless auto-scroll */}
              <motion.div
                className="overflow-x-auto no-scrollbar pb-4 sm:pb-6"
                variants={fadeInUp}
                ref={faqRef}
              >
                <motion.div
                  className="flex space-x-3 sm:space-x-4 md:space-x-6 min-w-max px-2 sm:px-4 marquee-track marquee-track-faq"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.05 }}
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {/* FAQ 1 */}
                  <motion.div
                    className={`flex-shrink-0 w-72 sm:w-80 md:w-88 lg:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 1 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(1)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 1 ? null : 1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 1 ? null : 1);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 1 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 1 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 1 ? 'shadow-xl scale-110' : ''}`}>
                              <Clock className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 1 ? 'text-black' : 'text-gray-900'}`}>
                    Can I pre-book rides for the whole month?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 1 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 1 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 1 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 1 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              Yes — choose our Office Plan to schedule recurring rides. Perfect for daily commuters who want consistency and reliability. Save time and never worry about booking last-minute rides again.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 2 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 2 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(2)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 2 ? null : 2)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 2 ? null : 2);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 2 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 2 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 2 ? 'shadow-xl scale-110' : ''}`}>
                              <Shield className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 2 ? 'text-black' : 'text-gray-900'}`}>
                    Are drivers background-checked?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 2 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 2 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 2 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 2 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              Absolutely. All drivers undergo comprehensive ID verification, background checks, and professional training to ensure your safety. We prioritize passenger security above everything else.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 3 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 3 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(3)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 3 ? null : 3)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 3 ? null : 3);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 3 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 3 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 3 ? 'shadow-xl scale-110' : ''}`}>
                              <AlertTriangle className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 3 ? 'text-black' : 'text-gray-900'}`}>
                    What if my driver is late?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 3 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 3 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 3 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 3 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              We monitor every ride in real-time. If there&apos;s a delay, we&apos;ll notify you immediately via WhatsApp and provide support to resolve the issue quickly. Your time matters to us.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 4 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 4 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(4)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 4 ? null : 4)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 4 ? null : 4);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 4 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 4 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 4 ? 'shadow-xl scale-110' : ''}`}>
                              <Map className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 4 ? 'text-black' : 'text-gray-900'}`}>
                    Can Ridezo handle outstation trips?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 4 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 4 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 4 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 4 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              Yes — we offer comprehensive outstation and tourism packages with pre-planned routes and trusted drivers for long-distance travel. Perfect for holidays, business trips, or weekend getaways.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 5 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 5 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(5)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 5 ? null : 5)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 5 ? null : 5);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 5 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 5 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 5 ? 'shadow-xl scale-110' : ''}`}>
                              <MessageCircle className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 5 ? 'text-black' : 'text-gray-900'}`}>
                    How do I book a ride?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 5 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 5 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 5 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 5 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              All bookings are done via WhatsApp for the fastest service. Just message us with your requirements and get instant confirmation. No apps, no hassle — just direct communication.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 6 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 6 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(6)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 6 ? null : 6)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 6 ? null : 6);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 6 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 6 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 6 ? 'shadow-xl scale-110' : ''}`}>
                              <Car className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 6 ? 'text-black' : 'text-gray-900'}`}>
                    What types of vehicles are available?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 6 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 6 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 6 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 6 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              5, 7, 11, 18, and 24-seater cabs, tempo travellers, and self-driver cars — perfect for office commutes, city rides, family trips, or group travel. We have the right vehicle for every occasion.
                  </p>
                </div>
              </div>
            </div>
                    </div>
                  </motion.div>

                  {/* FAQ 7 */}
                  <motion.div
                    className={`flex-shrink-0 w-80 sm:w-88 md:w-96 bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-200/50 overflow-hidden transition-all duration-500 transform ${hoveredFaq === 7 ? 'shadow-2xl shadow-yellow-500/10 scale-[1.02]' : 'hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]'}`}
                    variants={scaleIn}
                    onMouseEnter={() => setHoveredFaq(7)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    onClick={() => setHoveredFaq(hoveredFaq === 7 ? null : 7)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredFaq(hoveredFaq === 7 ? null : 7);
                      }
                    }}
                  >
                    <div className={`relative p-4 sm:p-5 md:p-6 cursor-pointer transition-colors duration-300 ${hoveredFaq === 7 ? 'bg-yellow-50/50' : ''}`}>
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${hoveredFaq === 7 ? 'opacity-10' : ''}`}>
                        <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black rounded-full blur-lg"></div>
                      </div>

                      {/* Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredFaq === 7 ? 'shadow-xl scale-110' : ''}`}>
                              <DollarSign className="text-black text-xl" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${hoveredFaq === 7 ? 'text-black' : 'text-gray-900'}`}>
                    How do I pay?
                  </h3>
                  </div>
                </div>
                        <div className="ml-3 flex-shrink-0">
                          <div className={`w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFaq === 7 ? 'bg-yellow-500 shadow-lg' : ''}`}>
                            <ChevronDown className={`text-sm transition-all duration-300 ${hoveredFaq === 7 ? 'text-black rotate-180' : 'text-gray-600'}`} />
                          </div>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="relative">
                        <div className={`h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent mb-4 opacity-0 transition-opacity duration-500 ${hoveredFaq === 7 ? 'opacity-100' : ''}`}></div>
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${hoveredFaq === 7 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              Multiple payment options available — credit/debit cards, UPI, net banking, and corporate invoicing for business accounts. All payments are secure and transparent with no hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mobile scroll indicator */}
              <div className="block md:hidden text-center mt-6 mb-4">
                <p className="text-gray-600 text-sm">← Scroll to see more questions →</p>
              </div>

              <div className="text-center mt-8 sm:mt-10 md:mt-12">
                <div className="mt-6 sm:mt-8">
                  <p className="text-gray-600 mb-3 sm:mb-4">Still have questions?</p>
                  <a href="https://wa.me/919873058354?text=Hi! I have a question about Ridezo services" className="inline-flex items-center bg-black text-yellow-400 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg">
                    <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
          </motion.div>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="py-12 sm:py-14 md:py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {/* Company Info */}
                  <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <img
                        src="/logo.png"
                        alt="Ridezo Logo"
                        className="h-8 w-8 sm:h-10 sm:w-10 mr-3"
                      />
                      <span className="text-xl sm:text-2xl font-bold text-yellow-400">Ridezo</span>
                    </div>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      Your ultimate travel buddy for daily commutes, outstation trips, and special occasions. Safe, reliable, and comfortable rides across India.
                    </p>
                  </motion.div>

                  {/* Quick Links */}
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Quick Links</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li><a href="#hero" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Home</a></li>
                      <li><a href="#why-ridezo" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Why Choose Us</a></li>
                      <li><a href="#office-goers" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Office Commuters</a></li>
                      <li><a href="#general-users" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">General Users</a></li>
                      <li><a href="#car-fleet" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Our Fleet</a></li>
                      <li><a href="#outstation" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Outstation Routes</a></li>
                    </ul>
                  </motion.div>

                  {/* Services */}
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Our Services</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2">
                        <Car className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">City Rides</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">Office Commute</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Map className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">Outstation Travel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">Family Trips</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">Event Transport</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">Corporate Travel</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Contact Us</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-gray-300 text-sm sm:text-base">+91-9873058354</p>
                          <p className="text-xs sm:text-sm text-gray-400">24/7 Available</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-gray-300 text-sm sm:text-base">support@ridezo.com</p>
                          <p className="text-xs sm:text-sm text-gray-400">Quick Response</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-gray-300 text-sm sm:text-base">Delhi NCR, India</p>
                          <p className="text-xs sm:text-sm text-gray-400">Serving All Cities</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 py-6 sm:py-8 px-4">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0">
                  © 2025 Ridezo. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Refund Policy</a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a>
                </div>
              </div>
            </div>
          </footer>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <a 
              href="https://wa.me/919873058354?text=Hi! I'd like to book a ride with Ridezo" 
              className="bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
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
