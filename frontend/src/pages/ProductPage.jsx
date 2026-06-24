/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import images from "../assets/assets";
import { useEffect, useState } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";
import useGetProduct from "../api/useGetProduct";
import useGetCategory from "../api/useGetCategory";
import useAddCart from "../api/useAddCart";
import { useAuth } from "../context/AuthContext";

const ITEMS_PER_PAGE = 12;

function ProductPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { handleAddCart } = useAddCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { categories, setCategories, handleGetCategory } = useGetCategory();
  const {
    getProductError,
    getProductLoading,
    handleGetProduct,
    productData,
    setProductData,
  } = useGetProduct();

  useEffect(() => {
    const getProduct = async () => {
      const data = await handleGetProduct();
      setProductData(data);
    };

    const getCategory = async () => {
      const data = await handleGetCategory();
      setCategories(data);
    };

    getProduct();
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category_id === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // reset ke halaman 1 setiap ganti kategori
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      {/* 1 */}
      <motion.div
        className="text-center mt-25 px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="font-playfair-display text-2xl md:text-4xl font-bold text-tema-500">
          Katalog Produk
        </div>
        <div className="mt-2 text-tema-700 text-sm md:text-base">
          Temukan barang bekas berkualitas pilihan Anda dengan harga terbaik
        </div>
      </motion.div>

      {/* Filter kategori */}
      <div className="mt-8 px-4 md:px-5 2xl:px-32 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => handleSelectCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border ${
            selectedCategory === "all"
              ? "bg-tema-500 text-white border-tema-500"
              : "bg-white text-tema-700 border-tema-300 hover:bg-tema-100"
          }`}
        >
          Semua
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border ${
              selectedCategory === category.id
                ? "bg-tema-500 text-white border-tema-500"
                : "bg-white text-tema-700 border-tema-300 hover:bg-tema-100"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 2 */}
      <motion.div
        className="w-full mb-20 mt-6 px-4 md:px-5 2xl:px-32 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-lg mt-2 border border-black/20 w-full rounded-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all group"
          >
            <div className="m-2 overflow-hidden group-hover:rounded-md">
              <img
                src={product.image_url || images.homepageBg2}
                alt=""
                className="w-full h-36 sm:h-48 md:h-60 object-cover group-hover:scale-110 transition-all rounded-t-md duration-300 cursor-pointer border border-black/20"
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>

            <div className="px-2 mt-2 md:mt-4 font-bold text-sm md:text-xl text-tema-500 font-playfair-display group-hover:text-tema-700 transition-all duration-300 line-clamp-2">
              {product.name}
            </div>

            <div className="px-2 mt-2 md:mt-4 mb-1">
              <div className="flex justify-between items-center">
                <div className="text-sm md:text-lg text-tema-900 font-bold">
                  Rp {formatRupiah(product.price)}
                </div>
                <div className="pr-1 text-xs md:text-sm text-gray-500">stok: {product.stock}</div>
              </div>
              <div className="mt-3 md:mt-5">
                <button
                  disabled={
                    product.stock < 1 ||
                    auth.user?.role === "admin" ||
                    auth.user?.role === "owner"
                  }
                  onClick={() => handleAddCart(product.id)}
                  className="w-full bg-tema-400 py-1.5 md:py-2 text-xs md:text-sm rounded-md hover:bg-tema-600 hover:font-bold transition-all cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:font-normal"
                >
                  {product.stock < 1 ? "Stok Habis" : "Tambah Ke Keranjang"}
                </button>
              </div>
            </div>
          </div>
        ))}
        {getProductLoading && <Loading />}
        {!getProductLoading && filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-tema-600 py-10">
            Tidak ada produk pada kategori ini.
          </div>
        )}
        <div className="pl-1 text-sm text-red-500 col-span-full">{getProductError}</div>
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mb-20 -mt-10 flex justify-center items-center gap-2 flex-wrap px-4">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md border border-tema-300 text-sm bg-white hover:bg-tema-100 transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          >
            Sebelumnya
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handleChangePage(page)}
              className={`w-10 h-10 rounded-md text-sm font-medium transition-all cursor-pointer border ${
                currentPage === page
                  ? "bg-tema-500 text-white border-tema-500"
                  : "bg-white text-tema-700 border-tema-300 hover:bg-tema-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md border border-tema-300 text-sm bg-white hover:bg-tema-100 transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          >
            Berikutnya
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
