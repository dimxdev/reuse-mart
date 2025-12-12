import React from 'react';

// Data Dummy untuk KPI (Key Performance Indicators)
const kpiData = [
    { title: "Total Penjualan", value: "Rp 120 Juta", change: "+12.5%", color: "tema-500", icon: "💰" },
    { title: "Jumlah Pengguna Aktif", value: "8.5K", change: "+5.2%", color: "tema-600", icon: "👥" },
    { title: "Produk Terdaftar", value: "34.1K", change: "+1.8%", color: "tema-700", icon: "📦" },
    { title: "Dampak Lingkungan (Kg)", value: "5.2 Ton", change: "Reuse", color: "tema-800", icon: "🌱" },
];

// Data Dummy untuk aktivitas
const recentActivities = [
    { type: "Transaksi Baru", description: "Rp 1.200.000 dari Toko Daur Ulang", time: "10 menit lalu", color: "tema-500" },
    { type: "Pengguna Baru", description: "Pengguna Budi Santoso mendaftar", time: "1 jam lalu", color: "tema-400" },
    { type: "Permintaan Penarikan", description: "Rp 5.000.000 oleh Seller XYZ", time: "4 jam lalu", color: "tema-700" },
    { type: "Produk Baru", description: "Meja Kayu Jati ditambahkan", time: "1 hari lalu", color: "tema-600" },
];

const OwnerDashboard = () => {
  return (
    // Hanya menyisakan area konten utama yang akan mengisi seluruh layar
    <div className="flex flex-col min-h-screen">
      
      {/* Konten Utama Dashboard */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Area Scrollable Konten */}
        {/* Padding atas ditambahkan agar tidak terlalu mepet dengan tepi layar */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-10 mt-20">
          
          {/* Section 1: Ringkasan KPI */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kpiData.map((kpi, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg border-b-4"
                style={{ borderColor: `var(--color-${kpi.color})` }}
              >
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-500">{kpi.title}</h3>
                    <div className="text-3xl">{kpi.icon}</div>
                </div>
                <p className="text-3xl font-bold text-tema-800 mt-1">{kpi.value}</p>
                <p className={`text-sm mt-2 text-${kpi.color}`}>{kpi.change} dari bulan lalu</p>
              </div>
            ))}
          </section>

          {/* Section 2: Visualisasi & Laporan Cepat */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Grafik Placeholder (Contoh: Penjualan Bulanan) */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-tema-700 mb-4">Tren Penjualan 6 Bulan Terakhir</h3>
                {/* Placeholder untuk Chart.js/Recharts */}
                <div className="h-64 bg-tema-100 flex items-center justify-center text-gray-500 rounded-lg border-2 border-dashed border-tema-200">
                    [Placeholder Grafik Garis/Batang]
                </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-tema-700 mb-4">Aktivitas Terbaru</h3>
                <ul className="space-y-4">
                    {recentActivities.map((activity, index) => (
                        <li key={index} className="flex space-x-3 items-start border-l-4 pl-3"
                            style={{ borderColor: `var(--color-${activity.color})` }}>
                            <div>
                                <p className="font-semibold text-tema-800">{activity.type}</p>
                                <p className="text-sm text-gray-600">{activity.description}</p>
                            </div>
                            <span className="text-xs text-gray-400 whitespace-nowrap ml-auto pt-1">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </section>

          {/* Section 3: Data Detail (Tabel Placeholder) */}
          <section className="bg-white p-6 rounded-xl mb-10 shadow-lg">
            <h3 className="text-xl font-semibold text-tema-700 mb-4">Penjual Teratas</h3>
            <div className="overflow-x-auto">
              {/* Placeholder untuk Tabel */}
              <table className="min-w-full divide-y divide-tema-200">
                <thead>
                  <tr className="bg-tema-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-tema-700 uppercase tracking-wider">Nama Toko</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-tema-700 uppercase tracking-wider">Transaksi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-tema-700 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-tema-700 uppercase tracking-wider">Bergabung</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {['EcoStore', 'SecondHandGoods', 'BumiHijau'].map((store, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-tema-600">{store}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{[520, 480, 310][index]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">⭐ 4.{[9, 7, 5][index]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 2023</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default OwnerDashboard;