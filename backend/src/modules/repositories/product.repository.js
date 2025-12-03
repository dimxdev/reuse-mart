import prisma from "../../db/index.js";
import capitalizeWord from "../../utils/capitalizeWord.js";

const findAllProduct = async () => {
  const product = await prisma.product.findMany();

  return product; 
};

const findProductById = async (productId) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return product;
};  

const insertProduct = async (productData) => {
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
};

const editProduct = async (productId, productData) => {
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
};

const deleteProduct = async (productId) => {
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
};


export {
  findAllProduct,
  findProductById,
  insertProduct,
  editProduct,
  deleteProduct,
};
