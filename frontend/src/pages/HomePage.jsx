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

        <div className="absolute w-full h-full flex items-center justify-center flex-col">
          <h1 className="font-bold text-5xl text-tema-950 font-playfair-display text-center">
            Tempatnya Barang Bekas{" "}
            <span className="bg-linear-to-b from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
              Berkualitas
            </span>
          </h1>

          <div className="mt-10 text-2xl text-center text-tema-950">
            <h1>
              Dapatkan barang preloved pilihan dengan harga terbaik. Hemat,{" "}
            </h1>
            <h1>berkualitas, dan ramah lingkungan.</h1>
          </div>

          <div className="mt-16 flex gap-5 pr-10">
            <Link to="#">
              <button className="bg-tema-200 px-4 py-2 rounded-md font-bold hover:scale-110 cursor-pointer transition-all hover:text-tema-950">
                Lihat Produk
              </button>
            </Link>
            <Link to="/login">
              <button className="cursor-pointer hover:font-bold hover:scale-110 font-bold transition-all hover:underline bg-white/50 hover:text-tema-950 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="py-15 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-playfair-display font-bold text-tema-900">
            Kenapa Memilih Kami?
          </h1>
          <h1 className="mt-4 text-tema-600">
            Platform terpercaya untuk jual beli barang preloved berkualitas
          </h1>
        </div>

        <div className="mt-12 flex gap-8 justify-between w-full px-10">
          <Features
            judul="Koleksi Lengkap"
            ket1="Berbagai kategori barang bekas"
            ket2="berkualitas untuk kebutuhan Anda"
          >
            <PackageSearch className="w-10 h-10 text-white" />
          </Features>
          <Features
            judul="Terpercaya"
            ket1="Setiap produk telah melalui proses"
            ket2="pengecekan kualitas yang ketat"
          >
            <Handshake className="w-10 h-10 text-white" />
          </Features>
          <Features
            judul="Harga Terbaik"
            ket1="Dapatkan barang berkualitas dengan"
            ket2="harga yang ramah di kantong"
          >
            <HandCoins className="w-10 h-10 text-white" />
          </Features>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-tema-100 py-20 flex justify-center items-center">
        <div className="bg-white/40 flex flex-col justify-center items-center gap-5 px-20 py-10 text-center">
          <h1 className="text-3xl font-playfair-display font-bold text-tema-900">
            Tentang Kami
          </h1>
          <div className="text-tema-600">
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
            <button className="bg-tema-200 px-4 py-2 rounded-md font-bold hover:scale-110 cursor-pointer transition-all hover:text-tema-950">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="py-15 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-playfair-display font-bold text-tema-900">
            Apa Kata Mereka?
          </h1>
          <h1 className="mt-4 text-tema-600">
            Testimoni dari pelanggan setia kami
          </h1>
        </div>

        <div className="mt-10 flex gap-8 justify-between w-full px-10">
          <TestimoniCard
            rating="★ ★ ★ ★ ★"
            ket1='"Produk berkualitas dengan harga'
            ket2='terjangkau. Sangat puas!"'
            customer="Siti Nabila"
          />
          <TestimoniCard
            rating="★ ★ ★ ★ ★"
            ket1='"Pelayanan ramah dan barang sesuai'
            ket2='deskripsi. Recommended!"'
            customer="Julian Dwi"
          />
          <TestimoniCard
            rating="★ ★ ★ ★ ★"
            ket1='"Sudah beberapa kali belanja di sini,'
            ket2="selalu puas."
            customer="Siswo Adi"
          />
        </div>
      </div>

      {/* 5 */}
      <div className="bg-linear-to-tr from-white/10 via-tema-200 to-white/10 py-20 flex justify-center items-center border-t border-tema-200">
        <div className="bg-white/40 flex flex-col justify-center items-center gap-5 px-20 py-10 text-center">
          <div className="bg-tema-400 px-4 py-4 rounded-full animate-bounce group-hover:rotate-12 transition-all duration-400 mt-2">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-playfair-display font-bold text-tema-900">
            Siap Mulai Berbelanja?
          </h1>
          <div className="text-tema-600">
            <h1>
              Temukan barang impian Anda atau mulai jual barang yang sudah tidak
            </h1>
            <h1>terpakai</h1>
          </div>
          <div className="flex gap-3 pr-3">
            <button className="bg-tema-200 px-4 py-2 rounded-md font-bold hover:scale-110 hover:shadow-sm cursor-pointer transition-all hover:text-tema-950">
              Jelajahi Product
            </button>
            <button className="bg-white/50 px-4 py-2 rounded-md font-bold hover:scale-110 hover:underline hover:shadow-sm cursor-pointer transition-all hover:text-tema-950">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
