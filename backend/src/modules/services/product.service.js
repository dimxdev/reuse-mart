import productRepository from "../repositories/product.repository.js";

class ProductService {
  async getAllProductService() {
    const product = await productRepository.findAllProduct();

    return product;
  }

  async getProductByIdService(productId) {
    const product = await productRepository.findProductById(productId);

    if (!product) {
      throw new Error("Product not found!");
    }

    return product;
  }

  async createProductService(productData) {
    const wajibMemasukkanDataValidation =
      !productData.name ||
      productData.price == null ||
      productData.stock == null ||
      !productData.categoryId;

    if (wajibMemasukkanDataValidation) {
      throw new Error("data yang dimasukkan tidak lengkap");
    }

    const product = await productRepository.insertProduct(productData);

    return product;
  }

  async editProductByIdService(productId, productData) {
    await this.getProductByIdService(productId);
    const product = await productRepository.editProduct(productId, productData);

    return product;
  }

  async deleteProductByIdService(productId) {
    await this.getProductByIdService(productId);
    await productRepository.deleteProduct(productId);
  }
}

export default new ProductService();
