import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
          {/* Navigation Header */}
          <Header />

          {/* Hero Section */}
          <section id="hero" className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black py-16 md:py-24 px-4 pt-24 md:pt-36">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                    Ridezo — Your Ultimate Travel Buddy 🚗
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Pre-booked rides, professional drivers, and reliable daily service. Get to work on time, every time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base shadow-lg text-center">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-2xl">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-black">500+</div>
                        <div className="text-xs text-gray-700">Happy Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-black">99%</div>
                        <div className="text-xs text-gray-700">On-Time Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-black">24/7</div>
                        <div className="text-xs text-gray-700">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-black">5★</div>
                        <div className="text-xs text-gray-700">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Ridezo Section */}
          <section id="why-ridezo" className="py-16 md:py-20 px-4 bg-yellow-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-black">Why Choose Ridezo?</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed px-4">
                  We make commuting smarter, safer, and simpler. Whether you're an office commuter who wants peace of mind every morning, or planning a weekend getaway — Ridezo has you covered.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">⏰</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Punctuality You Can Count On</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Pre-book your everyday ride and never worry about delays. We understand the importance of being on time.</p>
                </div>

                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">🛡️</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Verified, Professional Drivers</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Trained, background-checked drivers who put safety and comfort first in every journey.</p>
                </div>

                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">⭐</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Consistent Comfort</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Same high standard every day — no surprises. Clean, comfortable vehicles every time.</p>
                </div>

                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">💰</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Transparent Pricing</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Clear fares, no surge, no hidden fees. What you see is what you pay.</p>
                </div>

                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">A Family-Like Experience</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Friendly support that treats your journey like it matters. We care about your comfort and safety.</p>
                </div>

                <div className="bg-yellow-500 p-4 md:p-6 rounded-md shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-48 md:h-52 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg md:text-xl text-yellow-400">🚗</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-black">Your Travel Buddy</h3>
                  <p className="text-gray-800 leading-relaxed flex-grow text-xs md:text-sm">Reliable service for every journey, big or small. From daily commutes to weekend getaways.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Office Goers Section */}
          <section id="office-goers" className="py-16 md:py-20 px-4 bg-black text-yellow-400">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  For Office Goers — The Daily Commute, Fixed Right
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-yellow-200 max-w-xl mx-auto px-4">
                  A dedicated plan for people who commute to work daily. Make your mornings stress-free with our reliable office commute service.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-yellow-500/40 h-[400px] md:h-[450px] flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">Features for Office Commuters</h3>
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
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to know more about office commute features" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg">
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-yellow-500/40 h-[400px] md:h-[450px] flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">Benefits</h3>
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
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to pre-book office rides with Ridezo" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* General Users Section */}
          <section id="general-users" className="py-16 md:py-20 px-4 bg-yellow-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black">
                  For Everyone Else — Flexible, Anytime, Anywhere
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto px-4">
                  Ridezo is more than a commute solution — it's your travel buddy for every need. From city errands to weekend getaways.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">Perfect For</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-xl">🗺️</span>
                        </div>
                        <div>
                          <div className="font-semibold text-black">Tourism & Outstation Trips</div>
                          <div className="text-gray-800 text-sm">Explore new destinations with ease</div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-xl">👨‍👩‍👧‍👦</span>
                        </div>
                        <div>
                          <div className="font-semibold text-black">Family & Personal Travel</div>
                          <div className="text-gray-800 text-sm">Safe, comfortable rides for all ages</div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-yellow-400 text-xl">🏙️</span>
                        </div>
                        <div>
                          <div className="font-semibold text-black">City Rides & Errands</div>
                          <div className="text-gray-800 text-sm">Reliable transport, whenever you need it</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-end pt-6">
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">Vehicle Options</h3>
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
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to explore outstation options with Ridezo" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      Explore Options
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-500 rounded-xl p-6 md:p-8 border border-yellow-400 h-[400px] md:h-[450px] flex flex-col sm:col-span-2 lg:col-span-1">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">Booking</h3>
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
                    <a href="https://wa.me/918053272266?text=Hi! I'd like to know about Ridezo pricing plans" className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg">
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20 px-4 bg-yellow-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">How It Works</h2>
                <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                  Simple, straightforward process to get you where you need to go, when you need to be there.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">Choose Your Trip</h3>
                  <p className="text-gray-800 leading-relaxed">Office plan, city ride, or outstation (cab/tempo traveller/self-drive).</p>
                </div>

                <div className="text-center group">
                  <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">Pick Time & Pickup</h3>
                  <p className="text-gray-800 leading-relaxed">One-time or recurring bookings.</p>
                </div>

                <div className="text-center group">
                  <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">Get Matched</h3>
                  <p className="text-gray-800 leading-relaxed">A verified driver or vehicle is assigned to your ride.</p>
                </div>

                <div className="text-center group">
                  <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">Ride With Confidence</h3>
                  <p className="text-gray-800 leading-relaxed">Real-time support, WhatsApp updates, and consistent service.</p>
                </div>
              </div>
            </div>
          </section>

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
                    <span className="text-2xl text-black">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Background Checks</h3>
                  <p className="text-gray-300 flex-grow">Comprehensive screening and training for all drivers</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-black">🚗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Vehicle Inspections</h3>
                  <p className="text-gray-300 flex-grow">Regular maintenance and cleanliness checks</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-black">🆘</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Emergency Support</h3>
                  <p className="text-gray-300 flex-grow">24/7 support and live ride tracking</p>
                </div>

                <div className="text-center p-8 bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow border border-yellow-400 h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-black">🛡️</span>
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
                    <span className="text-2xl text-yellow-400">🏢</span>
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
                    <span className="text-2xl text-yellow-400">🏙️</span>
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
                    <span className="text-2xl text-yellow-400">🗺️</span>
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
                <a href="https://wa.me/918053272266?text=Hi! I'd like to know about Ridezo pricing plans" className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-colors shadow-lg inline-block">
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
                  Don't just take our word for it. Here's what our satisfied customers have to say about their Ridezo experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-yellow-500 p-8 rounded-xl shadow-lg border border-yellow-400 h-[300px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="text-black text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-800 mb-6 text-lg leading-relaxed flex-grow">
                    "Switching to Ridezo made my mornings stress-free. Always on time and drivers are professional. The pre-booking feature is a game-changer for my daily commute."
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
                    "Booked an outstation trip for the family — comfortable car and great service. The driver was courteous and the journey was smooth. Highly recommended!"
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
          <section id="faq" className="py-12 px-4 bg-yellow-100">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">Frequently Asked Questions</h2>
                <p className="text-base text-gray-800 max-w-xl mx-auto">
                  Got questions? We've got answers. Here are the most common questions about our services.
                </p>
              </div>

          <div className="space-y-3">
            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    Can I pre-book rides for the whole month?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Yes — choose our Office Plan to schedule recurring rides. Perfect for daily commuters who want consistency and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    Are drivers background-checked?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Absolutely. All drivers undergo comprehensive ID verification, background checks, and professional training to ensure your safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    What if my driver is late?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    We monitor every ride in real-time. If there's a delay, we'll notify you immediately and provide support to resolve the issue quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    Can Ridezo handle outstation trips?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Yes — we offer comprehensive outstation and tourism packages with pre-planned routes and trusted drivers for long-distance travel.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    How do I book a ride?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    All bookings are done via WhatsApp. Just message us and your ride will be confirmed quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    What types of vehicles are available?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    5, 7, 11, 18, and 24-seater cabs, tempo travellers, and self-driver cars — perfect for office commutes, city rides, or family trips.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-yellow-500 border border-yellow-400 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[60px]">
              <div className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black group-hover:text-gray-700 transition-colors pr-2">
                    How do I pay?
                  </h3>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors flex-shrink-0">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm">+</span>
                  </div>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Multiple payment options available — credit/debit cards, UPI, net banking, and corporate invoicing for business accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <a href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg text-center">
                  Enquire on WhatsApp
                </a>
                <a href="tel:+91-8053272266" className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-500 hover:text-black transition-colors text-center">
                  Call Us: +91-8053272266
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
              href="https://wa.me/918053272266?text=Hi! I'd like to book a ride with Ridezo" 
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
