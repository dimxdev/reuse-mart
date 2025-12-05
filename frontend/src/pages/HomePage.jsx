import images from "../assets/assets";
import { HandCoins, Handshake, PackageSearch } from "lucide-react";
import Features from "../components/layout/Features";

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
            <button className="bg-tema-200 px-4 py-2 rounded-md font-bold hover:scale-110 cursor-pointer transition-all hover:text-tema-950">
              Lihat Produk
            </button>
            <button className="cursor-pointer hover:font-bold hover:scale-110 font-bold transition-all hover:underline bg-white/50 hover:text-tema-950 px-4 py-2 rounded-md">
              Masuk
            </button>
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
        <div className="bg-white/40 flex flex-col gap-5 px-20 py-10 text-center">
          <h1 className="text-3xl font-playfair-display font-bold text-tema-900">
            Tentang Kami
          </h1>
          <h1 className="text-tema-600">
            <h1>
              Kami adalah platform terpercaya untuk membeli barang bekas
              berkualitas. Dengan
            </h1>
            <h1>
              komitmen pada keberlanjutan dan pelayanan terbaik, kami membantu
              Anda
            </h1>
            <h1>menemukan barang-barang preloved dengan mudah dan aman.</h1>
          </h1>
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
      </div>
    </div>
  );
}

export default HomePage;
