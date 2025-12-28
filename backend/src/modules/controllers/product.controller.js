import productService from "../services/product.service.js";

class ProductController {
  async getAllProductController(req, res) {
    try {
      const product = await productService.getAllProductService();
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getProductByIdController(req, res) {
    try {
      const productId = parseInt(req.params.productId);
      const product = await productService.getProductByIdService(productId);

      res.status(200).send(product);
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async createProductController(req, res) {
    try {
      const productData = req.body;
      const product = await productService.createProductService(productData);

      res.status(201).send({
        message: "create product succesfully",
        data: product,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async editProductByIdController(req, res) {
    try {
      const productId = parseInt(req.params.productId);
      const productData = req.body;
      const product = await productService.editProductByIdService(
        productId,
        productData
      );

      res.status(200).send({
        message: "update data succesfully",
        data: product,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async deleteProductByIdController(req, res) {
    try {
      const productId = parseInt(req.params.productId);
      await productService.deleteProductByIdService(productId);

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

export default new ProductController();
