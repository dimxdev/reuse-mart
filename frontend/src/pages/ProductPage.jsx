import { useNavigate } from "react-router";
import images from "../assets/assets";
import axiosInstance from "../lib/axios";
import { useEffect, useState } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";

function ProductPage() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [getProductLoading, setGetProductLoading] = useState(false);
  const [getProductError, setGetProductError] = useState("");

  const handleGetProduct = async () => {
    try {
      setGetProductError("");
      setGetProductLoading(true);
      const result = await axiosInstance.get("/product");

      setGetProductLoading(false);

      return result;
    } catch (error) {
      setGetProductError(error.response.data.error);
    } finally {
      setGetProductLoading(false);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const result = await handleGetProduct();
      const data = result.data;
      setProductData(data);
    };

    getProduct();
  }, []);

  console.log(productData);

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      {/* 1 */}
      <div className="text-center mt-25">
        <div className="font-playfair-display text-4xl font-bold text-tema-500">
          Katalog Produk
        </div>
        <div className="mt-2 text-tema-700">
          Temukan barang bekas berkualitas pilihan Anda dengan harga terbaik
        </div>
      </div>

      {/* 2 */}
      <div className="w-full my-10 pl-7 flex flex-wrap gap-2">
        {productData.map((product) => (
          <div
            key={product.id}
            className="shadow-lg border border-black/20 w-75 rounded-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all group"
          >
            <div className="m-2 overflow-hidden group-hover:rounded-md">
              <img
                src={product.image_url || images.homepageBg2}
                alt=""
                className="w-75 h-60 object-cover group-hover:scale-110 transition-all rounded-t-md duration-300 cursor-pointer border border-black/20"
                onClick={() => navigate(`/product/${product.id}`)}
              />
            </div>

            <div className="px-2 mt-4 font-bold text-xl text-tema-500 font-playfair-display group-hover:text-tema-700 transition-all duration-300">
              {product.name}
            </div>

            <div className="px-2 mt-4 mb-1">
              <div className="flex justify-between">
                <div className="text-lg text-tema-900 font-bold">
                  Rp {formatRupiah(product.price)}
                </div>
                <div className="pr-2">stock: {product.stock}</div>
              </div>
              <div className="mt-5">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full bg-tema-400 py-2 rounded-md hover:bg-tema-600 hover:font-bold transition-all cursor-pointer"
                >
                  Tambah Ke keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
        {getProductLoading && <Loading />}
        <div className="pl-1 text-sm text-red-500">{getProductError}</div>
      </div>
    </div>
  );
}

export default ProductPage;
