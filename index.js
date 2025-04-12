// pages/index.js
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
    </div>
  );
}

