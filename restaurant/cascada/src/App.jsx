import React, { useState } from "react";
import HeroImg from "./assets/hero.jpg"; // Make sure the image exists here
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans">

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-red-600">Cascada</h1>
        <div className="hidden md:flex gap-6 text-black">
          <a href="#services" className="hover:text-red-600 transition">Services</a>
          <a href="#about" className="hover:text-red-600 transition">About</a>
          <a href="#testimonials" className="hover:text-red-600 transition">Reviews</a>
          <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          <a href="https://www.facebook.com/mmcascada" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">Facebook</a>
        </div>
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-lg w-48 text-black flex flex-col gap-4 p-6 rounded-bl-lg">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#testimonials" className="hover:text-red-600">Reviews</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
            <a href="https://www.facebook.com/mmcascada" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Facebook</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">Cascada Restaurant</h1>
          <p className="text-xl max-w-2xl mb-8 text-gray-100 drop-shadow-md">
            A welcoming restaurant in Charleville, Cork serving European cuisine, pastas, vegetarian and gluten-free dishes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition shadow-lg"
            >
              Reserve a Table
            </a>
            <a
              href="#contact"
              className="border-2 border-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-red-600 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🍴</div>
              <h3 className="font-semibold text-lg mb-2 text-black">Restaurant</h3>
              <p className="text-gray-600">Fine dining with European cuisine, pastas, vegetarian and gluten-free options.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-red-600 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="font-semibold text-lg mb-2 text-black">Kitchen</h3>
              <p className="text-gray-600">Modern, clean, and trustworthy kitchen service for every guest.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-red-600 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-semibold text-lg mb-2 text-black">Events</h3>
              <p className="text-gray-600">Perfect for private events, celebrations and casual evenings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-black/5 to-red-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">About Cascada</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Located in Charleville, Cork, Cascada Restaurant offers a relaxed environment where great food, drinks, and friendly service come together. Whether you're stopping by for lunch, dinner, or a weekend gathering, we aim to make every visit memorable.
          </p>
          <div className="bg-white border-l-4 border-red-600 p-6 rounded italic text-gray-700">
            "We believe in serving authentic European cuisine with passion and care, using fresh ingredients and time-honored recipes."
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-b-4 border-red-600">
              <div className="text-red-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 mb-4 italic">
                "Great atmosphere and fantastic food. One of the best places in Charleville for a relaxed evening."
              </p>
              <strong className="text-white">— Local Guest</strong>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-b-4 border-red-600">
              <div className="text-red-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 mb-4 italic">
                "Friendly staff, excellent service and a lovely restaurant vibe. Highly recommended!"
              </p>
              <strong className="text-white">— Happy Customer</strong>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-b-4 border-red-600">
              <div className="text-red-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 mb-4 italic">
                "Stopped here for dinner and it was fantastic. Will definitely return. Highly recommended!"
              </p>
              <strong className="text-white">— Visiting Family</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h2>
            <p className="mb-2 text-white"><strong>Address:</strong> Imperial House, Main St, Rathgoggan Middle, Charleville, Co. Cork, Ireland</p>
            <p className="mb-2 text-white"><strong>Phone:</strong> +353 63 32474</p>
            <p className="mb-6 text-white"><strong>Email:</strong> cascadarestaurant@hotmail.com</p>
            <p className="mb-6 text-gray-400"><strong>Find us on Facebook:</strong> <a href="https://www.facebook.com/mmcascada" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">Cascada Restaurant</a></p>
            <iframe
              title="map"
              className="w-full h-64 rounded-lg"
              src="https://maps.google.com/maps?q=Imperial+House+Main+St+Rathgoggan+Middle+Charleville+Cork+Ireland&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>

          <form action="mailto:thesecondwindbar@gmail.com" method="POST" className="space-y-4">
            <input className="w-full bg-gray-800 border border-red-600 p-3 rounded text-white placeholder-gray-500" placeholder="Your Name" required />
            <input type="email" className="w-full bg-gray-800 border border-red-600 p-3 rounded text-white placeholder-gray-500" placeholder="Email" required />
            <textarea className="w-full bg-gray-800 border border-red-600 p-3 rounded text-white placeholder-gray-500" placeholder="Message" rows="5" />
            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition w-full font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center border-t-4 border-red-600">
        <p className="mb-4">© {new Date().getFullYear()} Cascada Restaurant</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.facebook.com/mmcascada" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">Instagram</a>
          <a href="https://maps.google.com/maps?q=Imperial+House+Main+St+Rathgoggan+Middle+Charleville+Cork+Ireland" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">Google Maps</a>
        </div>
        <p className="text-sm text-gray-500">Imperial House, Main St, Rathgoggan Middle, Charleville, Co. Cork, Ireland</p>
      </footer>

    </div>
  );
}

export default App;