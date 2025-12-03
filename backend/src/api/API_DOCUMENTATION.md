# 📦 REST API Documentation  
Dokumentasi lengkap semua endpoint REST API yang tersedia pada sistem ini.  
Setiap endpoint dilengkapi dengan **method**, **role akses**, dan **fungsi utama**.

---

## 🔐 AUTH REST API
1. **POST** `/auth/register/customer`  
   👉 Akses: *Public*  
   ✨ Register akun customer

2. **POST** `/auth/register/admin`  
   👉 Akses: **Owner**  
   ✨ Register akun admin

3. **POST** `/auth/login`  
   👉 Akses: *Public*  
   ✨ Login user

4. **DELETE** `/auth/delete/admin/:adminId`  
   👉 Akses: **Owner**  
   🗑 Menghapus admin berdasarkan ID

---

## 🛒 PRODUCT REST API
5. **GET** `/product`  
   👉 Akses: *Public*  
   📄 Ambil semua product

6. **GET** `/product/:productId`  
   👉 Akses: *Public*  
   🔍 Ambil product berdasarkan ID

7. **POST** `/product`  
   👉 Akses: **Admin, Owner**  
   ✨ Membuat product baru

8. **PATCH** `/product/:productId`  
   👉 Akses: **Admin, Owner**  
   🛠 Update product

9. **DELETE** `/product/:productId`  
   👉 Akses: **Admin, Owner**  
   🗑 Hapus product

---

## 🏷 CATEGORY REST API
10. **GET** `/category`  
    👉 Akses: *Public*  
    📄 Ambil semua category

11. **GET** `/category/:categoryId`  
    👉 Akses: *Public*  
    🔍 Ambil category berdasarkan ID

12. **POST** `/category`  
    👉 Akses: **Admin, Owner**  
    ✨ Membuat category baru

13. **PATCH** `/category/:categoryId`  
    👉 Akses: **Admin, Owner**  
    🛠 Update category

14. **DELETE** `/category`  
    👉 Akses: **Admin, Owner**  
    🗑 Hapus category

---

## 🧺 CART REST API
15. **GET** `/cart`  
    👉 Akses: **Customer**  
    📄 Ambil semua cart milik user

16. **POST** `/cart`  
    👉 Akses: **Customer**  
    ➕ Tambah product ke cart

17. **PATCH** `/cart/:cartId`  
    👉 Akses: **Customer**  
    🔧 Update quantity cart

18. **DELETE** `/cart/:cartId`  
    👉 Akses: **Customer**  
    🗑 Hapus cart berdasarkan ID

19. **DELETE** `/cart`  
    👉 Akses: **Customer**  
    🧹 Hapus semua isi cart

---

## 📥 ORDER REST API
20. **POST** `/order`  
    👉 Akses: **Customer**  
    💳 Checkout semua isi cart

21. **GET** `/order/my-order`  
    👉 Akses: **Customer**  
    📜 Riwayat transaksi user

22. **GET** `/order`  
    👉 Akses: **Admin, Owner**  
    📦 Ambil semua transaksi customer

23. **GET** `/order/:orderId`  
    👉 Akses: **Customer, Admin, Owner**  
    🔎 Detail transaksi berdasarkan ID

24. **PATCH** `/status/:orderId`  
    👉 Akses: **Admin, Owner**  
    🚚 Update status pengiriman barang

---

## 🎉 Selesai!
File ini adalah ringkasan lengkap semua endpoint REST API yang telah kamu buat.  
Silakan gunakan file ini untuk dokumentasi project atau README repository.

