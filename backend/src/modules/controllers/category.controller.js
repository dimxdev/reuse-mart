import {
  createCategoryService,
  deleteCategoryByIdService,
  editCategoryByIdService,
  getAllCategoryService,
  getCategoryByIdService,
} from "../services/category.service.js";

const getAllCategoryController = async (req, res) => {
  try {
    const category = await getAllCategoryService();

    res.status(200).send(category);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getCategoryByIdController = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const category = await getCategoryByIdService(categoryId);

    res.status(200).send(category);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};

const createCategoryController = async (req, res) => {
  try {
    const categoryData = req.body;
    const category = await createCategoryService(categoryData);

    res.status(201).send({
      message: "create category succesfully",
      data: category,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const editCategoryByIdController = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const categoryData = req.body;
    const category = await editCategoryByIdService(categoryId, categoryData);

    res.status(200).send({
      message: "update data succesfully",
      data: category,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const deleteCategoryByIdController = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    await deleteCategoryByIdService(categoryId);

    res.status(200).send({
      message: "data deleted!",
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

export {
  getAllCategoryController,
  getCategoryByIdController,
  createCategoryController,
  editCategoryByIdController,
  deleteCategoryByIdController,
};
