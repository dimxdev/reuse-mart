/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import UseBack from "../hooks/UseBack";
import images from "../assets/assets";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";
import useGetProductById from "../api/useGetProductById";
import useAddCart from "../api/useAddCart";
import { useAuth } from "../context/AuthContext";

function ProductDetailPage() {
  const { auth } = useAuth();
  const { handleBack } = UseBack();
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleAddCart } = useAddCart();
  const {
    getProductByIdError,
    getProductByIdLoading,
    product,
    handleGetProductById,
    setProduct,
  } = useGetProductById();

  useEffect(() => {
    const getProductById = async () => {
      const product = await handleGetProductById(id);
      setProduct(product);
    };

    getProductById();
  }, [id]);

  return (
    <div className="w-full h-full min-h-screen flex flex-col px-4 md:px-10">
      <motion.div
        className="mt-25"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={handleBack}
          className="hover:bg-tema-500 bg-tema-100 shadow-lg hover:shadow-xl hover:text-white px-3 py-2 rounded-lg cursor-pointer flex gap-2 text-sm items-center transition-all group"
        >
          <ArrowLeft className="group-hover:text-white w-5 h-5" /> Kembali
        </button>
      </motion.div>
      {getProductByIdLoading && <Loading />}
      <div className="pl-1 text-sm text-red-500">{getProductByIdError}</div>

      <motion.div
        className="mt-8 mb-20 flex flex-col md:flex-row gap-5"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-auto">
          <img
            src={product.image_url || images.homepageBg2}
            alt=""
            className="w-full md:w-[700px] h-64 sm:h-80 md:h-[450px] object-cover rounded-sm border border-black/20"
            onClick={() => navigate(`/product/${product.id}`)}
          />
        </div>

        <div className="w-full md:w-[500px]">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold font-playfair-display text-tema-900">
              {product.name}
            </h1>
            <h1 className="mt-2 text-tema-600">{product.category?.name}</h1>
          </div>
          <div className="mt-5">
            <div className="border-y py-4 text-xl md:text-2xl text-tema-900 font-bold">
              Rp {formatRupiah(product.price)}
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-tema-900">
                <h1>Stock :</h1>
                <h1 className="font-bold">{product.stock} unit</h1>
              </div>
              <div className="mt-3 flex justify-between text-tema-900">
                <h1>Kondisi :</h1>
                <h1 className="font-bold">Good</h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-tema-100 rounded-md px-4 py-3 w-full">
              <h1 className="text-xl font-bold">Deskripsi Produk</h1>
              <h1 className="mt-3 text-tema-800">
                {product.description || (
                  <div>
                    Barang sangat bagus, warna elegan, kondisi baik, masih
                    sangat layak pakai
                  </div>
                )}
              </h1>
            </div>
          </div>
          <button
            disabled={
              product.stock < 1 ||
              auth.user?.role === "admin" ||
              auth.user?.role === "owner"
            }
            onClick={() => handleAddCart(parseInt(id))}
            className="w-full mt-6 text-lg bg-tema-400 py-3 rounded-md cursor-pointer hover:font-bold hover:bg-tema-500 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:font-normal"
          >
            {product.stock < 1 ? "Stok Habis" : "Tambah Ke Keranjang"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetailPage;
