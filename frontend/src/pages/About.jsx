import images from '../assets/assets';

const About = () => {
  // Konten statis untuk halaman About Us
  const features = [
    { 
      title: "Ramah Lingkungan", 
      description: "Memperpanjang siklus hidup produk, mengurangi limbah ke TPA.",
      icon: "🌍" 
    },
    { 
      title: "Ekonomi Sirkular", 
      description: "Mendorong pembelian barang bekas berkualitas, menciptakan pasar baru.",
      icon: "🔄" 
    },
    { 
      title: "Komunitas", 
      description: "Menghubungkan penjual dan pembeli lokal, membangun hubungan yang kuat.",
      icon: "👥" 
    },
  ];

  // --- DATA BARU: ANGGOTA TIM ---
  const teamMembers = [
    {
      name: "Rizky Firmansyah",
      role: "Chief Executive Officer (CEO)",
      bio: "Visioner di balik Reuse Mart, fokus pada keberlanjutan dan inovasi digital.",
      imageUrl: images.homepageBg2, // Placeholder
    },
    {
      name: "Siti Aisyah",
      role: "Head of Operations",
      bio: "Memastikan kelancaran transaksi dan pengalaman pengguna yang terbaik.",
      imageUrl: images.homepageBg2, // Placeholder
    },
    {
      name: "Bagus Prakoso",
      role: "Lead Developer",
      bio: "Arsitek teknis yang membangun platform Reuse Mart yang efisien dan cepat.",
      imageUrl: images.homepageBg2, // Placeholder
    },
  ];
  // ------------------------------

  return (
    // Container utama
    <div className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">

      {/* Konten Halaman Terpusat */}
      <div className="max-w-7xl mx-auto mt-10">
        
        {/* Header/Judul Utama */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-tema-700 mb-4">
            Tentang <span className="text-tema-500">Reuse Mart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Misi kami adalah merevolusi cara Anda melihat barang bekas—sebagai peluang, bukan akhir.
          </p>
          <div className="h-1 bg-tema-500 w-20 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Bagian Visi & Misi */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-tema-500">
            <h2 className="text-2xl font-bold text-tema-600 mb-3 flex items-center">
              💡 Visi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform jual beli barang bekas terdepan yang paling tepercaya dan berkelanjutan di Asia Tenggara, memberdayakan setiap rumah tangga untuk berkontribusi pada planet yang lebih hijau melalui praktik daur ulang dan penggunaan kembali.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-tema-500">
            <h2 className="text-2xl font-bold text-tema-600 mb-3 flex items-center">
              🎯 Misi Kami
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Menyediakan platform yang **mudah, aman, dan transparan** untuk bertransaksi barang bekas berkualitas.</li>
              <li>Meningkatkan kesadaran masyarakat akan **pentingnya penggunaan kembali** barang.</li>
              <li>Menciptakan **komunitas berkelanjutan** yang menghargai nilai dan umur panjang suatu produk.</li>
            </ul>
          </div>
        </section>

        {/* Bagian Mengapa Memilih Kami */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-tema-700 mb-8">
            Kenapa Memilih Reuse Mart?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-tema-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION BARU: ANGGOTA TIM KAMI --- */}
        <section className="text-center mb-16 pt-10">
            <h2 className="text-3xl font-bold text-tema-700 mb-4">
                👋 Tim Kami
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                Kami didorong oleh hasrat untuk keberlanjutan. Kenali para pemimpin di balik Reuse Mart.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-8 rounded-xl shadow-2xl border border-tema-200 transition duration-300 hover:shadow-tema-400/50"
                    >
                        {/* Gambar Profil */}
                        <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-tema-500 p-0.5"
                        />
                        
                        {/* Nama dan Jabatan */}
                        <h3 className="text-xl font-bold text-tema-800 mb-1">{member.name}</h3>
                        <p className="text-tema-500 font-semibold mb-3">{member.role}</p>
                        
                        {/* Bio/Deskripsi Singkat */}
                        <p className="text-sm text-gray-600 italic">"{member.bio}"</p>
                    </div>
                ))}
            </div>
        </section>
        {/* ------------------------------------- */}


        {/* Bagian Bergabung (Call-to-Action) */}
        <section className="bg-tema-100 p-10 rounded-xl shadow-inner text-center">
          <h2 className="text-3xl font-bold text-tema-700 mb-4">
            Bergabunglah dengan Pergerakan Kami
          </h2>
          <p className="text-lg text-tema-800 max-w-4xl mx-auto mb-6">
            Setiap pembelian dan penjualan di Reuse Mart adalah langkah kecil menuju planet yang lebih baik. Mari kita bangun masa depan yang lebih hijau, satu barang bekas pada satu waktu.
          </p>
          {/* Tombol Call-to-Action */}
          <button className="bg-tema-500 hover:bg-tema-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Beli Sekarang
          </button>
        </section>

      </div>
    </div>
  );
}

export default About;