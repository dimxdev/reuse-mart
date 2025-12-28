import { useNavigate } from "react-router";
import images from "../assets/assets";
import { useEffect } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";
import useGetProduct from "../api/useGetProduct";
import useAddCart from "../api/useAddCart";

function ProductPage() {
  const navigate = useNavigate();
  const { handleAddCart } = useAddCart();
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

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="w-full mb-20 mt-8 px-5 2xl:px-32 2xl:gap-4 flex flex-wrap gap-2">
        {productData.map((product) => (
          <div
            key={product.id}
            className="shadow-lg mt-2 border border-black/20 w-75 rounded-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all group"
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
                  onClick={() => handleAddCart(product.id)}
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
