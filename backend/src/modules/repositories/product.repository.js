import prisma from "../../db/index.js";
import capitalizeWord from "../../utils/capitalizeWord.js";

class ProductRepository {
  async findAllProduct() {
    const product = await prisma.product.findMany({
      include: {
        category: true,
        order_items: true,
        carts: true
      }
    });

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
        category_id: parseInt(productData.categoryId),
      },
    });

    return product;
  }

  async editProduct(productId, productData) {
    const data = {
      name: capitalizeWord(productData.name),
      price: parseInt(productData.price),
      stock: parseInt(productData.stock),
      description: productData.description,
      category_id: parseInt(productData.categoryId),
    };

    // hanya update gambar jika ada file baru yang diupload
    if (productData.imageUrl) {
      data.image_url = productData.imageUrl;
    }

    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data,
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

  async decrementStock(productId, quantity) {
    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });

    return product;
  }
}

export default new ProductRepository();
