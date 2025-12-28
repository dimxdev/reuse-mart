import prisma from "../../db/index.js";
import capitalizeWord from "../../utils/capitalizeWord.js";

class ProductRepository {
  async findAllProduct() {
    const product = await prisma.product.findMany();

    return product;
  }

  async findProductById(productId) {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        category: true,
      },
    });

    return product;
  }

  async insertProduct(productData) {
    const product = await prisma.product.create({
      data: {
        name: capitalizeWord(productData.name),
        price: parseInt(productData.price),
        stock: parseInt(productData.stock),
        description: productData.description,
        image_url: productData.imageUrl,
        category_id: productData.categoryId,
      },
    });

    return product;
  }

  async editProduct(productId, productData) {
    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: capitalizeWord(productData.name),
        price: parseInt(productData.price),
        stock: parseInt(productData.stock),
        description: productData.description,
        image_url: productData.imageUrl,
        category_id: productData.categoryId,
      },
    });

    return product;
  }

  async deleteProduct(productId) {
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}

export default new ProductRepository();
