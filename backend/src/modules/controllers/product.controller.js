import {
  createProductService,
  deleteProductByIdService,
  editProductByIdService,
  getAllProductService,
  getProductByIdService,
} from "../services/product.service.js";

const getAllProductController = async (req, res) => {
  try {
    const product = await getAllProductService();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    const product = await getProductByIdService(productId);

    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const createProductController = async (req, res) => {
  try {
    const productData = req.body;
    const product = await createProductService(productData);

    res.status(201).send({
      message: "create product succesfully",
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message, 
    });
  }
};

const editProductByIdController = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    const productData = req.body;
    const product = await editProductByIdService(productId, productData);

    res.status(200).send({
      message: "update data succesfully",
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const deleteProductByIdController = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    await deleteProductByIdService(productId);

    res.status(200).send({
      message: "data deleted!"
    });
  } catch (error) {
    res.status(404).send({
      error: error.message, 
    });
  }
};

export {
  getAllProductController,
  getProductByIdController,
  createProductController,
  editProductByIdController,
  deleteProductByIdController,
};
