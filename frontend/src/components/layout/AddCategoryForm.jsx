import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../atom/Loading";
import axiosInstance from "../../lib/axios";

function AddCategoryForm() {
  const form = useForm();
  const [addCategoryLoading, setAddCategoryLoading] = useState(false);
  const [addCategoryError, setAddCategoryError] = useState("");

  const handleAddCategory = async (values) => {
    try {
      setAddCategoryLoading(true);
      setAddCategoryError("");

      await axiosInstance.post("/category", {
        name: values.namaCategory,
        description: values.description,
      });

      setAddCategoryLoading(false);
    } catch (error) {
      setAddCategoryError(error.response.data.error);
    } finally {
      setAddCategoryLoading(false);
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center absolute z-10">
      <div className="bg-tema-100 rounded-md w-[500px] px-8 py-8 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Tambah Category 
        </h1>
        <form onSubmit={form.handleSubmit(handleAddCategory)}>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Nama Category
            <input
              type="text"
              className="input w-full"
              placeholder="Contoh: Peralatan Rumah Tangga"
              {...form.register("namaCategory")}
            />
          </label>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Deskripsi (opsional)
            <textarea
              rows={4}
              className="input w-full"
              placeholder="Deskripsi Category..."
              {...form.register("deskripsi")}
            />
            {addCategoryLoading && <Loading />}
            <h1 className="pl-1 mt-2 text-sm text-red-500">
              {addCategoryError}
            </h1>
          </label>
          <div className="flex gap-2 justify-end mt-3">
            <button className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950">
              Batal
            </button>
            <button className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
