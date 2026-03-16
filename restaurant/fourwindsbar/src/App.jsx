import React from "react";
import HeroImg from "./assets/hero.jpg"; // Add your real image here
import "./App.css";

function App() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="font-heading text-6xl font-bold mb-6 tracking-tight">The Four Winds Pub & Kitchen</h1>
          <p className="text-lg font-body mb-8 leading-relaxed opacity-95">
            A welcoming pub and kitchen in the heart of Charleville, Cork. Enjoy great food, quality beer, and a warm atmosphere.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#contact" className="btn-primary bg-white text-blue-900 px-8 py-3 rounded-lg font-heading font-semibold hover:bg-gray-100 shadow-lg">
              Book a Table
            </a>
            <a href="#menu" className="btn-primary border-2 border-white text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-white hover:text-blue-900">
              View Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-blue-900 mb-2 tracking-tight">Our Services</h2>
          <p className="text-gray-600 mb-12 font-body">Experience excellence in every visit</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🍺</div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-blue-900">Craft Beer</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">Wide selection of local and international beers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🍔</div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-blue-900">Kitchen</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">Fresh dishes combining pub classics and modern cuisine.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-heading font-semibold text-xl mb-2 text-blue-900">Events</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">Perfect venue for celebrations, dinners and casual evenings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-blue-900 mb-6 tracking-tight">About Four Winds</h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed">
            Located in Charleville, Cork, Four Winds Pub & Kitchen offers a relaxed environment where great food, drinks and friendly service come together. Whether you're stopping by for a casual pint, dinner with friends or a weekend gathering, we aim to make every visit memorable.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-blue-900 mb-2 tracking-tight">What Our Customers Say</h2>
          <p className="text-gray-600 mb-12 font-body">Trusted by locals and visitors</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <p className="text-gray-600 mb-4 font-body italic">"Great atmosphere and fantastic food. One of the best places in Charleville for a relaxed evening."</p>
              <div className="text-yellow-400 font-heading">★★★★★</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <p className="text-gray-600 mb-4 font-body italic">"Friendly staff, excellent beer selection and a lovely pub vibe."</p>
              <div className="text-yellow-400 font-heading">★★★★★</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <p className="text-gray-600 mb-4 font-body italic">"Stopped here for dinner and it was fantastic. Highly recommended if you're in Charleville."</p>
              <div className="text-yellow-400 font-heading">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl font-bold text-blue-900 mb-8 tracking-tight">Contact Us</h2>
            <p className="mb-3 font-body"><strong className="font-heading text-blue-900">Address:</strong> Charleville, Cork, Ireland</p>
            <p className="mb-3 font-body"><strong className="font-heading text-blue-900">Phone:</strong> +353 63 81465</p>
            <p className="mb-8 font-body"><strong className="font-heading text-blue-900">Email:</strong> thesecondwindbar@gmail.com</p>
            <iframe
              title="map"
              className="w-full h-64 rounded-lg"
              src="https://maps.google.com/maps?q=Four%20Winds%20Pub%20Charleville&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>

          <form action="mailto:thesecondwindbar@gmail.com" method="POST" className="space-y-4 font-body">
            <input className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Your Name" required />
            <input type="email" className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Email" required />
            <textarea className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Message" rows="5" />
            <button className="btn-primary bg-blue-900 text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-blue-800 w-full shadow-md">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-12 text-center font-body">
        <p className="mb-6 font-heading">© {new Date().getFullYear()} Four Winds Pub & Kitchen</p>
        <div className="flex justify-center gap-8">
          <a href="#" className="hover:text-blue-100 transition-colors font-semibold">Facebook</a>
          <a href="#" className="hover:text-blue-100 transition-colors font-semibold">Instagram</a>
          <a href="#" className="hover:text-blue-100 transition-colors font-semibold">Google Maps</a>
        </div>
      </footer>

    </div>
  );
}

export default App;