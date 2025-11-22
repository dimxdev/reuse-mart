import {
  deleteProduct,
  editProduct,
  findAllProduct,
  findProductById, 
  insertProduct,
} from "../repositories/product.repository.js";

const getAllProductService = async () => {
  const product = await findAllProduct();

  return product;
};

const getProductByIdService = async (productId) => {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("Product not found!");
  }

  return product;
};

const createProductService = async (productData) => {
  const wajibMemasukkanDataValidation =
    !productData.name ||
    productData.price == null ||
    productData.stock == null ||
    !productData.imageUrl ||
    !productData.categoryId;

  if (wajibMemasukkanDataValidation) {
    throw new Error("data yang dimasukkan tidak lengkap");
  }

  const product = await insertProduct(productData);

  return product;
};

const editProductByIdService = async (productId, productData) => {
  await getProductByIdService(productId);
  const product = await editProduct(productId, productData);

  return product;
};

const deleteProductByIdService = async (productId) => {
  await getProductByIdService(productId);
  await deleteProduct(productId);
}; 

export {
  getAllProductService,
  getProductByIdService,
  createProductService,
  editProductByIdService,
  deleteProductByIdService,
};
