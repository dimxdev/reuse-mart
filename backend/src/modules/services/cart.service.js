import {
  deleteAllCart,
  deleteCart,
  editCart,
  findAllCartByUserId,
  findCartById,
  findCartByUserIdAndProductId,
  insertCart,
} from "../repositories/cart.repository.js";

const getCartById = async (cartId) => { 
  const cart = await findCartById(cartId); 
  if (!cart) {
    throw new Error("cart tidak tersedia");
  } 

  return cart;
};

const createCartService = async (cartData, userId) => {
  const cartByUserIdAndProductId = await findCartByUserIdAndProductId(
    cartData,
    userId
  );
  if (cartByUserIdAndProductId) {
    throw new Error("product sudah ada di dalam cart!");
  }

  const dataValidation = !cartData.productId;
  if (dataValidation) {
    throw new Error("data yang dimasukkan tidak lengkap!");
  } 

  const cart = await insertCart(cartData, userId);

  return cart;
};

const getUserCartService = async (userId) => {
  const cart = await findAllCartByUserId(userId);

  return cart;
};

const editCartByIdService = async (cartId, cartData) => {
  await getCartById(cartId);

  if (cartData.quantity === undefined) {
    throw new Error("quantity harus diisi!");
  }

  const cart = await editCart(cartId, cartData);

  return cart;
};

const deleteCartByIdService = async (cartId) => {
  await getCartById(cartId);
  await deleteCart(cartId);
};

const deleteAllCartByUserIdService = async (userId) => {
  await deleteAllCart(userId);
};

export {
  createCartService,
  getUserCartService,
  editCartByIdService,
  deleteCartByIdService,
  deleteAllCartByUserIdService,
};
