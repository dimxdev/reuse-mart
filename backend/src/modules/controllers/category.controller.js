import categoryService from "../services/category.service.js";

class CategoryController {
  async getAllCategoryController(req, res) {
    try {
      const category = await categoryService.getAllCategoryService();

      res.status(200).send(category);
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  }

  async getCategoryByIdController(req, res) {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const category = await categoryService.getCategoryByIdService(categoryId);

      res.status(200).send(category);
    } catch (error) {
      res.status(404).send({
        message: error.message,
      });
    }
  }

  async createCategoryController(req, res) {
    try {
      const categoryData = req.body;
      const category = await categoryService.createCategoryService(
        categoryData
      );

      res.status(201).send({
        message: "create category succesfully",
        data: category,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async editCategoryByIdController(req, res) {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const categoryData = req.body;
      const category = await categoryService.editCategoryByIdService(
        categoryId,
        categoryData
      );

      res.status(200).send({
        message: "update data succesfully",
        data: category,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async deleteCategoryByIdController(req, res) {
    try {
      const categoryId = parseInt(req.params.categoryId);
      await categoryService.deleteCategoryByIdService(categoryId);

      res.status(200).send({
        message: "data deleted!",
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }
}

export default new CategoryController();
