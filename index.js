
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      <Head>
        <title>The Leasers | Premium Real Estate</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-yellow-400">The Leasers</h1>
        <ul className="flex space-x-6 text-gray-300 text-sm font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Listings</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-0 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg"
        >
          Only The Best Deals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
        >
          Jaipur's Premier Partner for Commercial & Residential Leasing
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 animate-bounce"
        >
          <span className="text-yellow-400 text-2xl">↓</span>
        </motion.div>
      </section>

      {/* Property Cards Section */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Vaishali Nagar',
              description: '3 BHK Apartment – ₹32,000/month',
            },
            {
              title: 'VKIA',
              description: 'Warehouse – ₹18/sq.ft',
            },
            {
              title: 'Malviya Nagar',
              description: 'Office Space – ₹55,000/month',
            },
          ].map((prop, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl text-yellow-400 font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-300">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
