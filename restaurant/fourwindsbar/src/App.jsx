import React, { useState } from "react";
import HeroImg from "./assets/hero.jpg"; // Add your real image here
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-body bg-white">

      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-heading text-2xl font-bold">🍺 The Four Winds</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-yellow-200 transition-colors">About</a>
            <a href="#menu" className="hover:text-yellow-200 transition-colors">Menu</a>
            <a href="#hours" className="hover:text-yellow-200 transition-colors">Hours</a>
            <a href="#gallery" className="hover:text-yellow-200 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-yellow-200 transition-colors">Contact</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-red-900 text-white p-4 md:hidden z-40">
          <a href="#about" className="block py-2 hover:text-yellow-200">About</a>
          <a href="#menu" className="block py-2 hover:text-yellow-200">Menu</a>
          <a href="#hours" className="block py-2 hover:text-yellow-200">Hours</a>
          <a href="#gallery" className="block py-2 hover:text-yellow-200">Gallery</a>
          <a href="#contact" className="block py-2 hover:text-yellow-200">Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-950 to-black opacity-65"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-4xl mt-20">
          <p className="text-yellow-300 font-heading text-lg mb-2 tracking-widest">WELCOME TO CHARLEVILLE'S FINEST</p>
          <h1 className="font-heading text-7xl font-bold mb-2 tracking-tight leading-tight">The Four Winds Pub & Kitchen</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl font-body mb-10 leading-relaxed opacity-95">
            Authentic Irish hospitality in the heart of Charleville, Cork. Order a pint, enjoy craft cuisine, and experience true pub culture.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#contact" className="btn-primary bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded font-heading font-bold shadow-lg transition-all">
              Reserve a Table
            </a>
            <a href="#menu" className="btn-primary border-2 border-yellow-400 text-yellow-300 px-10 py-4 rounded hover:bg-red-900/50 font-heading font-bold transition-all">
              See Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* OPENING HOURS - FEATURED */}
      <section id="hours" className="bg-red-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-heading text-lg font-bold mb-2">Monday - Thursday</p>
            <p className="text-yellow-200">12:00 PM - 11:30 PM</p>
          </div>
          <div>
            <p className="font-heading text-lg font-bold mb-2">Friday - Saturday</p>
            <p className="text-yellow-200">12:00 PM - 1:00 AM</p>
          </div>
          <div>
            <p className="font-heading text-lg font-bold mb-2">Sunday</p>
            <p className="text-yellow-200">12:00 PM - 10:00 PM</p>
          </div>
          <div>
            <p className="font-heading text-lg font-bold mb-2">📍 Location</p>
            <p className="text-yellow-200">Charleville, Cork, Ireland</p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US SPECIAL */}
      <section className="bg-gradient-to-b from-white to-red-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="font-heading text-5xl font-bold text-red-900 mb-4 tracking-tight">A Real Charleville Experience</h2>
          <p className="text-gray-700 text-lg">Where Cork tradition meets modern comfort</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🍻</div>
            <h3 className="font-heading font-bold text-xl mb-3 text-red-900">Premium Pints</h3>
            <p className="text-gray-600 font-body">Carefully curated selection of Irish craft beers, international classics, and our signature house pints.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="font-heading font-bold text-xl mb-3 text-red-900">Authentic Cuisine</h3>
            <p className="text-gray-600 font-body">Traditional Irish dishes with a modern twist. Fresh ingredients sourced locally, prepared with care.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎘</div>
            <h3 className="font-heading font-bold text-xl mb-3 text-red-900">Live Music</h3>
            <p className="text-gray-600 font-body">Experience authentic trad music sessions on weekends and special events. Pure Charleville charm.</p>
          </div>
        </div>
      </section>

      {/* ABOUT - DUBLIN HISTORY */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl font-bold text-red-900 mb-6 tracking-tight">Built on Charleville Tradition</h2>
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-4">
                Four Winds Pub is where Charleville's warm pub culture comes alive. Nestled in the vibrant heart of this charming Cork town, we've become a beloved gathering place for locals, professionals, and travelers seeking authentic Irish hospitality.
              </p>
              <p className="text-gray-700 font-body text-lg leading-relaxed">
                From our carefully poured pints to our kitchen's homemade specialties, every detail reflects our passion for delivering an unforgettable pub experience. Whether it's a quiet weekday or a buzz of weekend craic, Four Winds is your home away from home.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-8 text-white">
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-heading font-bold">Est. 2015</p>
                  <p className="text-yellow-100">Serving Charleville with pride</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-heading font-bold">100+ Brews</p>
                  <p className="text-yellow-100">Irish & International selections</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-heading font-bold">Live Music Weekly</p>
                  <p className="text-yellow-100">Trad sessions & local artists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - REVIEWS */}
      <section className="bg-gradient-to-b from-red-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-red-900 mb-4 tracking-tight">What Charleville Loves About Us</h2>
            <p className="text-gray-600 mb-2 font-body text-lg">⭐⭐⭐⭐⭐ Highly Rated</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👨</div>
                <div>
                  <p className="font-heading font-bold text-red-900">Michael O'Brien</p>
                  <p className="text-sm text-gray-500">Local Regular</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-body italic">"Best pint in Dublin. The staff knows my order by heart. What more could you ask for?"</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👩</div>
                <div>
                  <p className="font-heading font-bold text-red-900">Sarah Murphy</p>
                  <p className="text-sm text-gray-500">Visitor from Cork</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-body italic">"Authentic Irish pub experience. The food is incredible and the atmosphere is genuine Dublin craic!"</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👨</div>
                <div>
                  <p className="font-heading font-bold text-red-900">James Wilson</p>
                  <p className="text-sm text-gray-500">Business Professional</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-body italic">"Perfect spot for after-work drinks or team celebrations. Highly recommend!"</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-white mb-4 tracking-tight">Visit Four Winds Today</h2>
            <p className="text-yellow-100 text-lg">Find us in the heart of Charleville, Cork</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="font-heading text-red-900 font-bold text-lg mb-2">📍 Address</p>
                  <p className="text-gray-700 font-body">Charleville, Cork, Ireland</p>
                </div>
                <div>
                  <p className="font-heading text-red-900 font-bold text-lg mb-2">📞 Phone</p>
                  <p className="text-gray-700 font-body"><a href="tel:+353638140650" className="text-red-600 hover:text-red-800">+353 63 814 0650</a></p>
                </div>
                <div>
                  <p className="font-heading text-red-900 font-bold text-lg mb-2">📧 Email</p>
                  <p className="text-gray-700 font-body"><a href="mailto:thesecondwindbar@gmail.com" className="text-red-600 hover:text-red-800">thesecondwindbar@gmail.com</a></p>
                </div>
                <div>
                  <p className="font-heading text-red-900 font-bold text-lg mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/fourwindsbar" target="_blank" rel="noopener noreferrer" className="inline-block w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors" title="Instagram">📷</a>
                    <a href="#" className="inline-block w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors" title="Facebook">f</a>
                    <a href="https://www.google.com/maps?q=Four+Winds+Pub+Charleville+Cork" target="_blank" rel="noopener noreferrer" className="inline-block w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors" title="Google Maps">📍</a>
                  </div>
                </div>
              </div>
            </div>

            <form action="mailto:thesecondwindbar@gmail.com" method="POST" className="space-y-4 font-body">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-red-900 mb-6">Send us a Message</h3>
                <input className="w-full border-2 border-yellow-200 p-4 rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 bg-white" placeholder="Your Name" required />
                <input type="email" className="w-full border-2 border-yellow-200 p-4 rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 bg-white mt-4" placeholder="Email" required />
                <select className="w-full border-2 border-yellow-200 p-4 rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 bg-white mt-4">
                  <option>Select a topic...</option>
                  <option>Reservation</option>
                  <option>Event Booking</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
                <textarea className="w-full border-2 border-yellow-200 p-4 rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100 bg-white mt-4" placeholder="Your Message" rows="5" />
                <button className="btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-heading font-bold w-full mt-4 shadow-md transition-all">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-red-900 mb-4 tracking-tight">Follow Our Journey</h2>
            <p className="text-gray-600 text-lg mb-8">Connect with us on Instagram for the latest photos, events, and behind-the-scenes moments</p>
          </div>
          
          {/* Instagram Feed */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Instagram Grid Preview */}
            <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <p className="text-7xl mb-4">📷</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">@fourwindsbar</h3>
                <p className="text-white mb-6 text-lg">Join our community of 2.5K+ followers</p>
                <a 
                  href="https://www.instagram.com/fourwindsbar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-heading font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  Follow on Instagram
                </a>
                <div className="mt-8 pt-8 border-t border-white/30">
                  <div className="grid grid-cols-3 gap-4 text-white">
                    <div>
                      <p className="text-3xl font-bold">150+</p>
                      <p className="text-sm">Posts</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">2.5K</p>
                      <p className="text-sm">Followers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">95%</p>
                      <p className="text-sm">Engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery preview cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="font-heading text-xl font-bold text-red-900 mb-2">🍻 Daily Specials</h3>
                <p className="text-gray-700">Check out our Instagram stories for daily drink specials and happy hour announcements</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="font-heading text-xl font-bold text-red-900 mb-2">🎶 Live Music Events</h3>
                <p className="text-gray-700">Follow us for updates on trad sessions, live performances, and special entertainment</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="font-heading text-xl font-bold text-red-900 mb-2">👥 Community Moments</h3>
                <p className="text-gray-700">See photos of locals, visitors, and the vibrant atmosphere that makes Four Winds special</p>
              </div>
            </div>
          </div>

          {/* Instagram Embed Placeholder */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 font-body">See our latest posts below:</p>
            <iframe 
              src="https://www.instagram.com/fourwindsbar/embed" 
              width="100%" 
              height="800"
              className="mx-auto rounded-lg"
              style={{maxWidth: '540px'}}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-red-950 to-black text-white py-16 font-body">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-yellow-400 mb-4">🍺 Four Winds</h3>
              <p className="text-yellow-100">Authentic Charleville pub experience since 2015</p>
            </div>
            <div>
              <p className="font-heading font-bold text-yellow-300 mb-3">Quick Links</p>
              <ul className="space-y-2 text-yellow-100">
                <li><a href="#about" className="hover:text-yellow-300 transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-yellow-300 transition-colors">Menu</a></li>
                <li><a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-yellow-300 mb-3">Hours</p>
              <ul className="space-y-1 text-yellow-100 text-sm">
                <li>Mon-Thu: 12 PM - 11:30 PM</li>
                <li>Fri-Sat: 12 PM - 1:00 AM</li>
                <li>Sun: 12 PM - 10:00 PM</li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-yellow-300 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/fourwindsbar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" title="Instagram">📷</a>
                <a href="#" className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" title="Facebook">f</a>
                <a href="https://www.google.com/maps?q=Four+Winds+Pub+Charleville+Cork" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" title="Google Maps">📍</a>
              </div>
            </div>
          </div>
          <div className="border-t border-red-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-yellow-100">&copy; {new Date().getFullYear()} Four Winds Pub & Kitchen. All rights reserved.</p>
            <p className="text-yellow-100 text-sm mt-4 md:mt-0">Sláinte!</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;