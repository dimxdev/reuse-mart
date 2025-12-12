/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowLeft } from "lucide-react";
import UseBack from "../hooks/UseBack";
import images from "../assets/assets";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../lib/axios";
import { useEffect, useState } from "react";
import Loading from "../components/atom/Loading";
import formatRupiah from "../utils/rupiahFormat";

function ProductDetailPage() {
  const { handleBack } = UseBack();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [getProductByIdLoading, setGetProductByIdLoading] = useState(false);
  const [getProductByIdError, setGetProductByIdError] = useState("");

  const handleGetProductById = async () => {
    try {
      setGetProductByIdError("");
      setGetProductByIdLoading(true);
      const result = await axiosInstance.get(`/product/${id}`);

      setGetProductByIdLoading(false);
      return result.data;
    } catch (error) {
      setGetProductByIdError(error.response.data.error);
    } finally {
      setGetProductByIdLoading(false);
    }
  };

  useEffect(() => {
    const getProductById = async () => {
      const product = await handleGetProductById();
      setProduct(product);
    };

    getProductById();
  }, [id]);

  console.log(product);

  return (
    <div className="w-full h-full min-h-screen flex flex-col px-10">
      <div className="mt-25">
        <button
          onClick={handleBack}
          className="hover:bg-tema-500 bg-tema-100 shadow-lg hover:shadow-xl hover:text-white px-3 py-2 rounded-lg cursor-pointer flex gap-2 text-sm items-center transition-all group"
        >
          <ArrowLeft className="group-hover:text-white w-5 h-5" /> Kembali
        </button>
      </div>
      {getProductByIdLoading && <Loading />}
      <div className="pl-1 text-sm text-red-500">{getProductByIdError}</div>

      <div className="mt-8 mb-20 flex gap-5">
        <div className="">
          <img
            src={product.image_url || images.homepageBg2}
            alt=""
            className="w-[700px] h-[450px] rounded-sm border border-black/20"
            onClick={() => navigate(`/product/${product.id}`)}
          />{" "}
        </div>

        <div className="w-[500px]">
          <div>
            <h1 className="text-4xl font-bold font-playfair-display text-tema-900">
              {product.name}
            </h1>
            <h1 className="mt-2 text-tema-600">{product.category?.name}</h1>
          </div>
          <div className="mt-5">
            <div className="border-y py-4 text-2xl text-tema-900 font-bold">
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
          <button onClick={() => navigate(-1)} className="w-full mt-6 text-lg bg-tema-400 py-3 rounded-md cursor-pointer hover:font-bold hover:bg-tema-500 transition-all duration-300">
            Tambah Ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
