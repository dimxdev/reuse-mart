/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../atom/Loading";
import useEditCategory from "../../api/useEditCategory";
import useGetCategoryById from "../../api/useGetCategoryById";

function EditCategoryForm({ close, categoryId }) {
  const form = useForm();
  const [category, setCategory] = useState([]);
  const { editCategoryError, editCategoryLoading, handleEditCategory } =
    useEditCategory();
  const {
    getCategoryByIdError,
    getCategoryByIdLoading,
    handleGetCategoryById,
  } = useGetCategoryById();

  useEffect(() => {
    const getCategoryById = async () => {
      const category = await handleGetCategoryById(categoryId);
      setCategory(category);
    };

    getCategoryById();
  }, []);

  useEffect(() => {
    form.setValue("namaCategory", category.name);
    form.setValue("deskripsi", category.description);
  }, [category]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center fixed inset-0 z-10">
      <div className="bg-tema-100 rounded-md w-[500px] px-8 py-8 overflow-y-auto max-h-[90vh] animate-scale-in">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Edit Kategori
        </h1>
        <form
          onSubmit={form.handleSubmit((values) =>
            handleEditCategory(values, categoryId, close)
          )}
        >
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Nama Kategori
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
            <button
              onClick={close}
              type="button"
              className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950"
            >
              Batal
            </button>
            <button
              type="submit"
              className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950"
            >
              Edit Kategori
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCategoryForm;
