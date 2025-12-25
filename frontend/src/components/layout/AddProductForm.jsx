import { Check, ChevronDown } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Loading from "../atom/Loading";
import useGetCategory from "../../api/useGetCategory";
import useAddProduct from "../../api/useAddProduct";

function AddProductForm() {
  const form = useForm();
  const { categories, handleGetCategory, setCategories } = useGetCategory();
  const { addProductError, addProductLoading, handleAddProduct } =
    useAddProduct();

  useEffect(() => {
    const GetCategory = async () => {
      const category = await handleGetCategory();
      setCategories(category);
    };

    GetCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center fixed inset-0 z-10">
      <div className="bg-tema-100 rounded-md px-8 py-8 overflow-y-auto max-h-[90vh] animate-scale-in">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Tambah Produk
        </h1>
        <form onSubmit={form.handleSubmit(handleAddProduct)}>
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
            URL Gambar
            <input
              type="text"
              className="input w-full"
              placeholder="https://contoh.com/gambar.jpg"
              {...form.register("image")}
            />
          </label>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Deskripsi (opsional)
            <textarea
              rows={4}
              className="input w-full"
              placeholder="Deskripsi Produk..."
              {...form.register("deskripsi")}
            />
            {addProductLoading && <Loading />}
            <h1 className="pl-1 mt-2 text-sm text-red-500">
              {addProductError}
            </h1>
          </label>
          <div className="flex gap-2 justify-end mt-3">
            <button type="button" className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950">
              Batal
            </button>
            <button type="submit" className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
              Tambah Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
