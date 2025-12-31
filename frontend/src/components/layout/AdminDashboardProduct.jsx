/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useGetProduct from "../../api/useGetProduct";
import { useWindow } from "../../context/WindowContext";
import formatRupiah from "../../utils/rupiahFormat";
import AddProductForm from "./AddProductForm";
import { SquarePen, Trash } from "lucide-react";
import EditProductForm from "./EditProductForm";
import useDeleteProduct from "../../api/useDeleteProduct";

function AdminDashboardProduct() {
  const { refreshWindow, showHiddenComponent, handleShowHiddenComponent } =
    useWindow();
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { productData, handleGetProduct, setProductData } = useGetProduct();
  const { handleDeleteProduct } = useDeleteProduct();

  useEffect(() => {
    const getProduct = async () => {
      const data = await handleGetProduct();
      setProductData(data);
    };

    getProduct();
  }, [refreshWindow]);

  console.log(productData);
  return (
    <div>
      <div className="flex justify-between mb-6 items-center">
        <h2 className="text-3xl font-bold text-gray-800 ">Manajemen Produk</h2>
        <button
          onClick={handleShowHiddenComponent}
          className="px-4 py-2 cursor-pointer bg-tema-500 text-white rounded-lg font-medium hover:bg-tema-600 transition-colors"
        >
          + Add Produk
        </button>{" "}
        {showHiddenComponent && <AddProductForm />}
        {openEditForm && (
          <EditProductForm
            close={() => setOpenEditForm(false)}
            productId={selectedProductId}
          />
        )}
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Nama Produk
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Harga
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Kategori
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productData.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 text-gray-800">{product.name}</td>
                <td className="px-6 py-4 text-gray-800">
                  Rp {formatRupiah(product.price)}
                </td>
                <td className="px-6 py-4 text-gray-800">{product.stock}</td>
                <td className="px-6 py-4 text-gray-600">
                  {product.category.name}
                </td>
                <td className="pl-6 py-4 text-gray-600 flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setOpenEditForm(true);
                    }}
                    className="group cursor-pointer"
                  >
                    <SquarePen className="group-hover:text-tema-400" />
                  </button>
                  <button
                    disabled={
                      product.order_items.length !== 0 ||
                      product.carts.length !== 0
                    }
                    onClick={() => handleDeleteProduct(product.id)}
                    className="group"
                  >
                    <Trash
                      className={`transition-all ${
                        product.order_items.length !== 0 ||
                        product.carts.length !== 0
                          ? "text-black/20"
                          : "group-hover:text-red-400 cursor-pointer"
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboardProduct;
