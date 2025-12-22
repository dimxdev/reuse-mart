import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../atom/Loading";
import axiosInstance from "../../lib/axios";

function EditCategoryForm() {
  const form = useForm();
  const [editCategoryLoading, setEditCategoryLoading] = useState(false);
  const [editCategoryError, setEditCategoryError] = useState("");
  const [getCategoryByIdLoading, setGetCategoryByIdLoading] = useState(false)
  const [getCategoryByIdError, setGetCategoryByIdError] = useState("")
  const [category, setCategory] = useState([])

  const handleEditCategory = async (values) => {
    try {
      setEditCategoryLoading(true);
      setEditCategoryError("");

      await axiosInstance.patch(`/category/${category.id}`, {
        name: values.namaCategory,
        description: values.deskripsi,
      });

      setEditCategoryLoading(false);
    } catch (error) {
      setEditCategoryError(error.response.data.error);
    } finally {
      setEditCategoryLoading(false);
    }
  };

  const handleGetCategoryById = async () => {
    try {
        setGetCategoryByIdLoading(true)
        setGetCategoryByIdError("")

        const result = await axiosInstance.get("/category/2")

        setGetCategoryByIdLoading(false)
        return result.data
    } catch (error) {
        setGetCategoryByIdError(error.response.data.error)
    } finally {
        setGetCategoryByIdLoading(false)
    }
  }

  useEffect(() => {
    const getCategoryById = async () => {
        const category = await handleGetCategoryById()
        setCategory(category)
    }

    getCategoryById()
  }, [])

  useEffect(() => {
    form.setValue("namaCategory", category.name)
    form.setValue("deskripsi", category.description)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category])

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center absolute z-10">
      <div className="bg-tema-100 rounded-md w-[500px] px-8 py-8 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Edit Category
        </h1>
        <form onSubmit={form.handleSubmit(handleEditCategory)}>
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
            {editCategoryLoading && <Loading />}
            {getCategoryByIdLoading && <Loading />}
            <h1 className="pl-1 mt-2 text-sm text-red-500">
              {editCategoryError}
              {getCategoryByIdError}
            </h1>
          </label>
          <div className="flex gap-2 justify-end mt-3">
            <button className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950">
              Batal
            </button>
            <button className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
              Edit Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCategoryForm;
