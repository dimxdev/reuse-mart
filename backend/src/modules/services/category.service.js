import {
  deleteCategory,
  editCategory,
  findAllCategory,
  findCategoryById,
  insertCategory,
} from "../repositories/category.repository.js";

const getAllCategoryService = async () => {
  const category = await findAllCategory();

  return category;
};

const getCategoryByIdService = async (categoryId) => {
  const category = await findCategoryById(categoryId);

  if (!category) {
    throw new Error("Category Not Found!");
  }

  return category;
};

const createCategoryService = async (categoryData) => {
  if (!categoryData.name) {
    throw new Error("nama category wajib diisi!");
  }

  const category = await insertCategory(categoryData);

  return category;
};

const editCategoryByIdService = async (categoryId, categoryData) => {
  await getCategoryByIdService(categoryId);
  const category = await editCategory(categoryId, categoryData);

  return category;
};

const deleteCategoryByIdService = async (categoryId) => {
  await getCategoryByIdService(categoryId);
  await deleteCategory(categoryId);
};


export {
  getAllCategoryService,
  getCategoryByIdService,
  createCategoryService,
  editCategoryByIdService,
  deleteCategoryByIdService,
};
