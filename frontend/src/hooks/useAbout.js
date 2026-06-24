import images from "../assets/assets";

function useAbout() {
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
      imageUrl: images.dimas,
    },
    {
      name: "Safril Yusuf Maulana",
      role: "Backend Developer",
      bio: "Merancang dan membangun sistem server yang andal serta aman untuk Reuse Mart.",
      imageUrl: images.safril,
    },
    {
      name: "Bagas Ibnu Abdillah",
      role: "Frontend Developer",
      bio: "Mewujudkan antarmuka yang responsif dan nyaman digunakan di setiap perangkat.",
      imageUrl: images.ibnu,
    },
    {
      name: "Fairuz Fadlurrahman",
      role: "Quality Assurance",
      bio: "Mendesain pengalaman pengguna yang intuitif dan tampilan yang menarik.",
      imageUrl: images.fairuz,
    },
    {
      name: "M Ihsan Fauzan R",
      role: "UI/UX Designer",
      bio: "Menjaga kualitas produk melalui pengujian menyeluruh di setiap fitur.",
      imageUrl: images.ihsan,
    },
    // {
    //   name: "Haikal Ihza H",
    //   role: "Head of Operations",
    //   bio: "Memastikan kelancaran transaksi dan pengalaman pengguna yang terbaik.",
    //   imageUrl: images.haikal,
    // },
    // {
    //   name: "M Fahriza Putra",
    //   role: "Lead Developer",
    //   bio: "Arsitek teknis yang membangun platform Reuse Mart yang efisien dan cepat.",
    //   imageUrl: images.fahriza,
    // },
    // {
    //   name: "Raka Rizqi R",
    //   role: "Web Designer",
    //   bio: "Arsitek teknis yang membangun platform Reuse Mart yang efisien dan cepat.",
    //   imageUrl: images.raka,
    // },
  ];

  return {
    teamMembers,
    features,
  };
}

export default useAbout;
