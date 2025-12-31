/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router";
import images from "../assets/assets";

function AboutPage() {
  const features = [
    {
      title: "Ramah Lingkungan",
      description:
        "Memperpanjang siklus hidup produk, mengurangi limbah ke TPA.",
      icon: "🌍",
    },
    {
      title: "Ekonomi Sirkular",
      description:
        "Mendorong pembelian barang bekas berkualitas, menciptakan pasar baru.",
      icon: "🔄",
    },
    {
      title: "Komunitas",
      description:
        "Menghubungkan penjual dan pembeli lokal, membangun hubungan yang kuat.",
      icon: "👥",
    },
  ];

  const teamMembers = [
    {
      name: "Dimas Brotowali H",
      role: "Chief Executive Officer (CEO)",
      bio: "Visioner di balik Reuse Mart, fokus pada keberlanjutan dan inovasi digital.",
      imageUrl: images.homepageBg2,
    },
    {
      name: "Haikal Ihza H",
      role: "Head of Operations",
      bio: "Memastikan kelancaran transaksi dan pengalaman pengguna yang terbaik.",
      imageUrl: images.homepageBg2,
    },
    {
      name: "M Fahriza Putra",
      role: "Lead Developer",
      bio: "Arsitek teknis yang membangun platform Reuse Mart yang efisien dan cepat.",
      imageUrl: images.homepageBg2,
    },
    {
      name: "Raka Rizqi R",
      role: "Web Designer",
      bio: "Arsitek teknis yang membangun platform Reuse Mart yang efisien dan cepat.",
      imageUrl: images.homepageBg2,
    },
  ];

  return (
    <div className="w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.header
          className="text-center mb-16 px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-tema-700 mb-4">
            Tentang <span className="text-tema-500">Reuse Mart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Misi kami adalah merevolusi cara Anda melihat barang bekas—sebagai
            peluang, bukan akhir.
          </p>
          <motion.div
            className="h-1 bg-tema-500 w-20 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.header>

        <motion.section
          className="grid md:grid-cols-2 gap-12 mb-16 px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-tema-300"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-tema-600 mb-3 flex items-center">
              💡 Visi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform jual beli barang bekas terdepan yang paling
              tepercaya dan berkelanjutan di Asia Tenggara, memberdayakan setiap
              rumah tangga untuk berkontribusi pada planet yang lebih hijau
              melalui praktik daur ulang dan penggunaan kembali.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-tema-300"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-tema-600 mb-3 flex items-center">
              🎯 Misi Kami
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>
                Menyediakan platform yang **mudah, aman, dan transparan** untuk
                bertransaksi barang bekas berkualitas.
              </li>
              <li>
                Meningkatkan kesadaran masyarakat akan **pentingnya penggunaan
                kembali** barang.
              </li>
              <li>
                Menciptakan **komunitas berkelanjutan** yang menghargai nilai
                dan umur panjang suatu produk.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <section className="text-center pt-20 pb-30 bg-tema-100 px-10">
          <motion.h2
            className="text-3xl font-bold text-tema-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            Kenapa Memilih Reuse Mart?
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cursor-pointer bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-tema-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="text-center py-20 px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-tema-700 mb-4">👋 Tim Kami</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Kami didorong oleh hasrat untuk keberlanjutan. Kenali para pemimpin
              di balik Reuse Mart.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="cursor-pointer bg-white py-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-tema-400/50"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-tema-500 p-0.5"
                />

                <h3 className="text-xl font-bold text-tema-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-tema-500 font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600 italic">"{member.bio}"</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="bg-tema-100 py-16 mx-8 rounded-xl shadow-inner text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-tema-700 mb-4">
            Bergabunglah dengan Pergerakan Kami
          </h2>
          <p className="text-lg text-tema-800 max-w-4xl mx-auto mb-6">
            Setiap pembelian dan penjualan di Reuse Mart adalah langkah kecil
            menuju planet yang lebih baik. Mari kita bangun masa depan yang
            lebih hijau, satu barang bekas pada satu waktu.
          </p>
          <Link to="/product">
            <button
              className="cursor-pointer bg-tema-500 hover:scale-105 hover:bg-tema-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Beli Sekarang
            </button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;