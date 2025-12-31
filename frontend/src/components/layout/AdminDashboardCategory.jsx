/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useGetCategory from "../../api/useGetCategory";
import { useWindow } from "../../context/WindowContext";
import AddCategoryForm from "./AddCategoryForm";
import { SquarePen, Trash } from "lucide-react";
import EditCategoryForm from "./EditCategoryForm";
import useDeleteCategory from "../../api/useDeleteCategory";

function AdminDashboardCategory() {
  const { categories, handleGetCategory, setCategories } = useGetCategory();
  const [showEditCategoryForm, setShowEditCategoryForm] = useState(false);
  const [selectCategoryId, setSelectCategoryId] = useState();
  const { handleDeleteCategory } = useDeleteCategory();
  const { refreshWindow, showHiddenComponent, handleShowHiddenComponent } =
    useWindow();

  useEffect(() => {
    const GetCategory = async () => {
      const category = await handleGetCategory();
      setCategories(category);
    };

    GetCategory();
  }, [refreshWindow]);

  return (
    <div>
      <div className="flex justify-between mb-6 items-center">
        <h2 className="text-3xl font-bold text-gray-800 ">
          Manajemen Kategori
        </h2>
        <button
          onClick={handleShowHiddenComponent}
          className="px-4 py-2 cursor-pointer bg-tema-500 text-white rounded-lg font-medium hover:bg-tema-600 transition-colors"
        >
          + Add Kategori
        </button>{" "}
        {showHiddenComponent && <AddCategoryForm />}
        {showEditCategoryForm && (
          <EditCategoryForm
            close={() => setShowEditCategoryForm(false)}
            categoryId={selectCategoryId}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-tema-100 rounded-lg px-6 pt-6 shadow-sm border border-gray-200"
          >
            <h3 className="text-md font-bold text-gray-800 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600">{category.products.length} produk</p>
            <div className="pt-4 text-gray-600 justify-end flex gap-2 -translate-y-4">
              <button
                onClick={() => {
                  setShowEditCategoryForm(true);
                  setSelectCategoryId(category.id);
                }}
                className="group cursor-pointer"
              >
                <SquarePen className="group-hover:text-tema-500" />
              </button>
              <button
                disabled={category.products.length !== 0}
                onClick={() => handleDeleteCategory(category.id)}
                className="group"
              >
                <Trash
                  className={`transition-all ${
                    category.products.length !== 0
                      ? "text-black/20"
                      : "group-hover:text-red-400 cursor-pointer"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboardCategory;
