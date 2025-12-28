import categoryRepository from "../repositories/category.repository.js";

class CategoryService {
  async getAllCategoryService() {
    const category = await categoryRepository.findAllCategory();

    return category;
  }

  async getCategoryByIdService(categoryId) {
    const category = await categoryRepository.findCategoryById(categoryId);

    if (!category) {
      throw new Error("Category Not Found!");
    }

    return category;
  }

  async createCategoryService(categoryData) {
    if (!categoryData.name) {
      throw new Error("Nama category wajib diisi!");
    }

    const category = await categoryRepository.insertCategory(categoryData);

    return category;
  }

  async editCategoryByIdService(categoryId, categoryData) {
    await this.getCategoryByIdService(categoryId);
    const category = await categoryRepository.editCategory(
      categoryId,
      categoryData
    );

    return category;
  }

  async deleteCategoryByIdService(categoryId) {
    await this.getCategoryByIdService(categoryId);
    await categoryRepository.deleteCategory(categoryId);
  }
}

export default new CategoryService();
