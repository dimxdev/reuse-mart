SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

INSERT INTO `anggotakelompok` (`id`, `nama`, `nim`, `createAt`) VALUES
(1, 'Dimas Brotowali', '123456789', '2026-01-01 00:00:00.000');

INSERT INTO `category` (`id`, `name`, `description`, `created_at`) VALUES
(1, 'Elektronik', '', '2025-11-19 01:08:53.036'),
(14, 'Furniture', NULL, '2026-01-01 18:38:49.447'),
(15, 'Fashion', NULL, '2026-01-01 19:01:48.999'),
(16, 'Buku & Edukasi', NULL, '2026-01-01 19:11:45.981'),
(17, 'Peralatan Rumah Tangga', NULL, '2026-01-01 19:28:00.704'),
(18, 'Hobi & Hiburan', NULL, '2026-01-01 19:36:03.781'),
(19, 'Alat Camping', NULL, '2026-01-01 19:42:59.977');

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'customer', 'customer@gmail.com', 'customer123', 'customer', '2025-11-19 01:03:56.113'),
(2, 'customer1', 'customer1@gmail.com', '$2b$10$IpQcjdRuFirBh6aPaYCDLu5fyfu2t1278qb//LzFluk5LQIKTW/32', 'customer', '2025-11-22 13:54:04.165'),
(6, 'owner1', 'owner1@gmail.com', '$2b$10$3BDVeIWTBxZk8irF35Yzd.JCeBMP96rtuWHLWGUU4U3l9nNaczqn.', 'owner', '2025-11-22 13:59:18.231'),
(39, 'Dim Owner', 'dimowner@gmail.com', '$2b$10$szsYdH1p.wPb7WwKAChkrObn.eXm0Wd6z/KvR0BWb4hAtyNfu45Jq', 'owner', '2025-12-31 09:52:49.271'),
(40, 'Dim Admin', 'dimadmin@gmail.com', '$2b$10$5KR6Icsi5ViPG8.oLws/W.2RSLVMAZJyj/y78QXa16zXwDZfQCCTy', 'admin', '2025-12-31 10:41:00.483'),
(41, 'Dim Customer', 'dimcustomer@gmail.com', '$2b$10$ffFDooFWftosEEfTnAqLR.3wRnh1kexfwyUQv0mDfBfjHng1e3imu', 'customer', '2025-12-31 10:43:04.537'),
(42, 'Nopal', 'nopal@gmail.com', '$2b$10$/DS19ajY1XJh7KGf3pfPM.OZDnGUvnPCwQvxik2TcDOMoXWq9CaFG', 'customer', '2026-01-09 01:37:38.611'),
(43, 'Safril', 'safril@gmail.com', '$2b$10$IgXJlWSFCfAUxuj9odVju.zpXXzMYbI3W8Ls1c0vC91EUV2LYaV.m', 'customer', '2026-01-09 01:53:18.253');

INSERT INTO `product` (`id`, `name`, `price`, `stock`, `description`, `image_url`, `created_at`, `category_id`) VALUES
(1, 'Meja Belajar Kayu Jati', 350000, 10, 'Meja belajar berbahan kayu jati bekas, masih kokoh dan awet. Cocok untuk belajar atau kerja di rumah.', 'https://www.indofurnia.com/wp-content/uploads/2021/02/Meja-Belajar-Jati-Adalayde.jpg', '2025-11-19 01:09:39.047', 14),
(4, 'Kursi Kantor Ergonomis', 250000, 5, 'Kursi kantor bekas dengan sandaran ergonomis, nyaman digunakan dalam waktu lama.', 'https://www.ruparupa.com/blog/wp-content/uploads/2022/09/Umura-Kursi-Kantor-Sandaran-Tinggi-Hitam.jpg', '2025-11-27 02:26:15.019', 14),
(9, 'Lemari Pakaian 2 Pintu', 500000, 15, 'Lemari pakaian bekas kondisi baik, pintu masih rapat dan engsel berfungsi normal.', 'https://pirahome.com/assets/upload/product/4b77a058c52749321ad42094eec356e2.jpg', '2025-12-12 01:06:56.379', 14),
(17, 'Iphone 16 Pro Max Second', 22000000, 10, 'Smartphone bekas kondisi normal, layar mulus dan baterai masih awet.', 'https://images.hindustantimes.com/tech/img/2025/01/02/1600x900/iphone_16_pro_price_india_1725908169871_1735786663922.jpg', '2025-12-17 05:33:42.134', 1),
(21, 'Kipas Angin Hellokity', 150000, 40, 'Kipas angin bekas dengan 3 level kecepatan, masih berfungsi dengan baik.', 'https://www.sinarlistrik.com/wp-content/uploads/2022/07/Advance-Kipas-Karakter-Hellokity-Profan-Kipas-Angin-Duduk-300x360.jpg', '2025-12-17 07:41:22.495', 1),
(35, 'Laptop Bekas Msi Titan 18 Hx', 99500000, 2, 'MSI Titan 18 HX Dragon Edition Norse Myth', 'https://www.jagatreview.com/wp-content/uploads/2025/01/Titan-Dragon-Edition.webp', '2026-01-01 18:49:16.508', 1),
(36, 'Jaket Denim Pria', 120000, 16, 'Jaket denim bekas, jahitan rapi dan nyaman dipakai', 'https://down-id.img.susercontent.com/file/69f21520d724f94f6896a14151634d41', '2026-01-01 19:03:33.958', 15),
(37, 'Tas Ransel Sekolah', 80000, 7, 'Tas ransel bekas dengan resleting normal dan kapasitas besar', 'https://bimg.akulaku.net/goods/spu/52aab4b8dafc46b2b13013090e29d1d07185.png?w=726&q=80&fit=1', '2026-01-01 19:05:15.720', 15),
(38, 'Sepatu Sneakers', 180000, 23, 'Sepatu sneakers bekas, sol masih tebal dan nyaman digunakan.', 'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/dc9f2c58cc3a4932b6532fdf1e0d9a57~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&', '2026-01-01 19:07:10.905', 15),
(39, 'Buku Dasar Algoritma', 60000, 45, 'Buku kuliah bekas informatika, kondisi halaman masih lengkap.', 'https://img.lazcdn.com/g/p/cd0b913bb6b9ae48902df6c7322599a5.png_720x720q80.png', '2026-01-01 19:12:58.872', 16),
(40, 'Buku Master ReactJS', 250000, 3, 'Buku kuliah bekas informatika, kondisi halaman masih lengkap.', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-160695042/lokomedia_buku-jalan-pintas-menjadi-master-reactjs_full01.jpg', '2026-01-01 19:21:58.699', 16),
(41, 'Buku Self Improvement', 70000, 4, '', 'https://id-live-01.slatic.net/p/0b1d514e42ee8856e80dce8f56c8a36f.jpg', '2026-01-01 19:24:38.578', 16),
(42, 'Buku Self Improvement2', 50899, 4, '', 'https://senjabahasa.wordpress.com/wp-content/uploads/2018/07/20200120_151734-01-01.jpeg', '2026-01-01 19:26:21.230', 16),
(44, 'Rice Cooker Bekas', 250000, 5, '', 'https://www.sinarlistrik.com/wp-content/uploads/2025/09/7-Rekomendasi-Rice-Cooker-Terbaik-untuk-Keluarga-Modern-2.jpg', '2026-01-01 19:30:49.061', 17),
(45, 'Set Alat Masak', 180000, 4, '', 'https://static.desty.app/desty-store/2023-10-19/16976977025053f213b6ea8094cd580806daf3c4c37ad.jpg?x-oss-process=image/format,webp', '2026-01-01 19:34:11.668', 17),
(46, 'Stick PS Original', 150000, 7, '', 'https://down-id.img.susercontent.com/file/id-11134207-8224z-mhdq0zuiefil04', '2026-01-01 19:37:30.868', 18),
(47, 'Headset Gaming', 350000, 17, '', 'https://upload.jaknot.com/2021/01/images/products/e17638/original/ha-headphone-gaming-virtual-surround-71-microphone-wired-g58.jpg', '2026-01-01 19:38:30.401', 18),
(48, 'PS5 Bekas', 2450053, 3, '', 'https://asset.kompas.com/crops/a5Qs3w9P9xRRFt6iGiiJq4WDr9M=/0x0:1323x882/1200x800/data/photo/2025/11/14/69168d8bdfe1c.png', '2026-01-01 19:40:00.234', 18);

INSERT INTO `order` (`id`, `user_id`, `total_amount`, `payment_method`, `status`, `address`, `penerima`, `phone`, `created_at`) VALUES
(1, 41, 1131100000, 'qris', 'dikemas', 'Cimahi', 'Dimas Brotowali', '081212834013', '2026-01-09 01:36:50.698'),
(2, 42, 121850000, 'qris', 'dikirim', 'Cimahi', 'Dimas Brotowali', '081212834013', '2026-01-09 01:38:11.315'),
(3, 43, 44000000, 'qris', 'dikirim', 'Cimahi', 'Dimas Brotowali', '081212834013', '2026-01-09 01:55:27.934');

INSERT INTO `orderitem` (`id`, `order_id`, `product_id`, `quantity`, `price`, `subtotal`) VALUES
(1, 1, 1, 6, 350000, 2100000),
(2, 1, 35, 10, 99500000, 995000000),
(3, 1, 17, 6, 22000000, 132000000),
(4, 1, 4, 8, 250000, 2000000),
(5, 2, 1, 1, 350000, 350000),
(6, 2, 35, 1, 99500000, 99500000),
(7, 2, 17, 1, 22000000, 22000000),
(8, 3, 17, 2, 22000000, 44000000);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
