/* eslint-disable react-hooks/exhaustive-deps */
import { Check, ChevronDown } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../atom/Loading";
import useGetCategory from "../../api/useGetCategory";
import useGetProductById from "../../api/useGetProductById";
import useEditProduct from "../../api/useEditProduct";

function EditProductForm({ close, productId }) {
  const form = useForm();
  const [product, setProduct] = useState(null);
  const { categories, handleGetCategory, setCategories } = useGetCategory();
  const { handleGetProductById } = useGetProductById();
  const { editProductError, editProductLoading, handleEditProduct } =
    useEditProduct();
  const imageFile = form.watch("image");

  useEffect(() => {
    const getCategory = async () => {
      const category = await handleGetCategory();
      setCategories(category);
    };

    const getProductById = async () => {
      const product = await handleGetProductById(productId);
      setProduct(product);
    };

    getProductById();
    getCategory();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (product?.id) {
      form.setValue("namaProduk", product.name);
      form.setValue("harga", product.price);
      form.setValue("stock", product.stock);
      form.setValue("category", product.category_id.toString());
      form.setValue("deskripsi", product.description);
    }
  }, [product]);
  console.log(product)

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center fixed inset-0 z-10">
      <div className="bg-tema-100 rounded-md px-8 py-8 overflow-y-auto max-h-[90vh] animate-scale-in">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Edit Produk
        </h1>
        <form
          onSubmit={form.handleSubmit((values) =>
            handleEditProduct(values, productId, close)
          )}
        >
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Nama Produk
            <input
              type="text"
              className="input w-full"
              placeholder="Contoh: Tas Ransel Vintage"
              {...form.register("namaProduk")}
            />
          </label>
          <div className="flex gap-5">
            <label className="pembungkus-label-input mt-5 text-tema-900">
              Harga
              <input
                type="number"
                className="input w-[300px]"
                placeholder="5000"
                {...form.register("harga")}
              />
            </label>
            <label className="pembungkus-label-input mt-5 text-tema-900">
              Stock
              <input
                type="number"
                className="input w-[300px]"
                placeholder="10"
                {...form.register("stock")}
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="pembungkus-label-input mt-5 text-tema-900">
              Category
              <Select.Root
                value={form.watch("category")}
                onValueChange={(value) => form.setValue("category", value)}
              >
                <Select.Trigger className="input w-[300px] flex justify-between items-center">
                  <Select.Value placeholder="Pilih kategori..." />
                  <Select.Icon>
                    <ChevronDown className="w-4 h-4" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    <Select.Viewport className="p-1">
                      {categories.map((category) => (
                        <Select.Item
                          key={category.id}
                          value={category.id.toString()}
                          className="px-4 py-2 cursor-pointer hover:bg-tema-400 rounded relative outline-none flex items-center"
                        >
                          <Select.ItemIndicator className="absolute right-2">
                            <Check className="w-4 h-4" />
                          </Select.ItemIndicator>
                          <Select.ItemText>{category.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </label>
            <label className="pembungkus-label-input mt-5 text-tema-900"></label>
          </div>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Gambar Produk
            <input
              type="file"
              accept="image/*"
              className="input w-full cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-tema-400 file:px-3 file:py-1 file:cursor-pointer"
              {...form.register("image")}
            />
            <span className="text-xs text-tema-600">
              Kosongkan jika tidak ingin mengganti gambar
            </span>
          </label>
          <div className="mt-3">
            {imageFile?.[0] ? (
              <div>
                <p className="text-xs text-tema-600 mb-1">Gambar baru:</p>
                <img
                  src={URL.createObjectURL(imageFile[0])}
                  alt="preview"
                  className="w-40 h-40 object-cover rounded-md border border-black/20"
                />
              </div>
            ) : (
              product?.image_url && (
                <div>
                  <p className="text-xs text-tema-600 mb-1">Gambar saat ini:</p>
                  <img
                    src={product.image_url}
                    alt="current"
                    className="w-40 h-40 object-cover rounded-md border border-black/20"
                  />
                </div>
              )
            )}
          </div>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Deskripsi (opsional)
            <textarea
              rows={4}
              className="input w-full"
              placeholder="Deskripsi Produk..."
              {...form.register("deskripsi")}
            />
            {editProductLoading && <Loading />}
            <h1 className="pl-1 mt-2 text-sm text-red-500">
              {editProductError}
            </h1>
          </label>
          <div className="flex gap-2 justify-end mt-3">
            <button
              type="button"
              onClick={close}
              className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950"
            >
              Batal
            </button>
            <button
              type="submit"
              className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950"
            >
              Edit Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductForm;
