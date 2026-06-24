/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import images from "../assets/assets";
import { HandCoins, Handshake, PackageSearch, Rocket } from "lucide-react";
import Features from "../components/layout/Features";
import TestimoniCard from "../components/layout/TestimoniCard";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      {/* 1 */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images.homepageBg2}
          alt="bg-homepage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-linear-to-tr from-white/20 via-white/35 to-white/10"></div>
        <motion.div
          className="absolute w-full h-full flex items-center justify-center flex-col px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-tema-950 font-playfair-display text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Tempatnya Barang Bekas{" "}
            <span className="bg-linear-to-b from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
              Berkualitas
            </span>
          </motion.h1>
          <motion.div
            className="mt-6 md:mt-10 text-base sm:text-lg md:text-2xl text-center text-tema-950 px-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <h1>
              Dapatkan barang preloved pilihan dengan harga terbaik. Hemat,{" "}
            </h1>
            <h1>berkualitas, dan ramah lingkungan.</h1>
          </motion.div>
          <motion.div
            className="mt-10 md:mt-16 flex gap-5"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Link to="/product">
              <button className="bg-tema-200 px-4 py-2 rounded-md font-bold hover:scale-110 duration-300 cursor-pointer transition-all hover:text-tema-950">
                Lihat Produk
              </button>
            </Link>
            <Link to="/login">
              <button className="cursor-pointer hover:font-bold hover:scale-110 font-bold duration-300 transition-all hover:underline bg-white/50 hover:text-tema-950 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 2 */}
      <div className="py-15 pb-25 flex flex-col justify-center items-center px-4">
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-playfair-display font-bold text-tema-900">
            Kenapa Memilih Kami?
          </h1>
          <h1 className="mt-4 text-tema-600 text-sm md:text-base">
            Platform terpercaya untuk jual beli barang preloved berkualitas
          </h1>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col md:flex-row gap-8 justify-between w-full px-4 md:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Features
              judul="Koleksi Lengkap"
              ket1="Berbagai kategori barang bekas"
              ket2="berkualitas untuk kebutuhan Anda"
            >
              <PackageSearch className="w-10 h-10 text-white" />
            </Features>
          </motion.div>

          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Features
              judul="Terpercaya"
              ket1="Setiap produk telah melalui proses"
              ket2="pengecekan kualitas yang ketat"
            >
              <Handshake className="w-10 h-10 text-white" />
            </Features>
          </motion.div>

          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Features
              judul="Harga Terbaik"
              ket1="Dapatkan barang berkualitas dengan"
              ket2="harga yang ramah di kantong"
            >
              <HandCoins className="w-10 h-10 text-white" />
            </Features>
          </motion.div>
        </motion.div>
      </div>

      {/* 3  */}
      <div className="bg-tema-100 py-25 flex justify-center items-center px-4">
        <motion.div
          className="bg-white/40 flex flex-col justify-center items-center gap-5 px-6 md:px-20 py-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-playfair-display font-bold text-tema-900">
            Tentang Kami
          </h1>
          <div className="text-tema-600 text-sm md:text-base">
            <h1>
              Kami adalah platform terpercaya untuk membeli barang bekas
              berkualitas. Dengan
            </h1>
            <h1>
              komitmen pada keberlanjutan dan pelayanan terbaik, kami membantu
              Anda
            </h1>
            <h1>menemukan barang-barang preloved dengan mudah dan aman.</h1>
          </div>
          <div>
            <Link to="/about">
              <button className="bg-tema-200 px-4 py-2 rounded-md duration-300 font-bold hover:scale-110 cursor-pointer transition-all hover:text-tema-950">
                Selengkapnya
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 4 */}
      <div className="py-15 pb-25 flex flex-col justify-center items-center px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-playfair-display font-bold text-tema-900">
            Apa Kata Mereka?
          </h1>
          <h1 className="mt-4 text-tema-600 text-sm md:text-base">
            Testimoni dari pelanggan setia kami
          </h1>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-8 justify-between w-full px-4 md:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <TestimoniCard
              rating="★ ★ ★ ★ ★"
              ket1='"Produk berkualitas dengan harga'
              ket2='terjangkau. Sangat puas!"'
              customer="Siti Nabila"
            />
          </motion.div>

          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <TestimoniCard
              rating="★ ★ ★ ★ ★"
              ket1='"Pelayanan ramah dan barang sesuai'
              ket2='deskripsi. Recommended!"'
              customer="Julian Dwi"
            />
          </motion.div>

          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <TestimoniCard
              rating="★ ★ ★ ★ ★"
              ket1='"Sudah beberapa kali belanja di sini,'
              ket2="selalu puas."
              customer="Siswo Adi"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 5 - CTA SECTION */}
      <div className="bg-linear-to-tr from-white/10 via-tema-200 to-white/10 py-20 flex justify-center items-center border-t border-tema-200 px-4">
        <motion.div
          className="bg-white/40 flex flex-col justify-center items-center gap-5 px-6 md:px-20 py-10 text-center w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <motion.div
            className="bg-tema-400 px-4 py-4 rounded-full"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-playfair-display font-bold text-tema-900">
            Siap Mulai Berbelanja?
          </h1>
          <div className="text-tema-600 text-sm md:text-base">
            <h1>
              Temukan barang impian Anda atau mulai jual barang yang sudah tidak
            </h1>
            <h1>terpakai</h1>
          </div>
          <div className="flex gap-3">
            <Link to="/product">
              <button className="bg-tema-200 duration-300 px-4 py-2 rounded-md font-bold hover:scale-105 hover:shadow-sm cursor-pointer transition-all hover:text-tema-950">
                Jelajahi Product
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-white/50 px-4 py-2 rounded-md duration-300 font-bold hover:scale-105 hover:underline hover:shadow-sm cursor-pointer transition-all hover:text-tema-950">
                Register
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
