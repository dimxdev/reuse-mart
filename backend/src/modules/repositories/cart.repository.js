import prisma from "../../db/index.js";

const insertCart = async (cartData, userId) => {
  const cart = await prisma.cart.create({
    data: {
      user_id: userId,
      product_id: cartData.productId,
      quantity: 1,
    },
    include: {
      product: true,
    },
  });

  return cart;
};

const findCartById = async (cartId) => {
  const cart = await prisma.cart.findUnique({
    where: {
      id: cartId,
    },
  });

  return cart;
};

const findCartByUserIdAndProductId = async (cartData, userId) => {
  const cart = await prisma.cart.findFirst({
    where: {
      product_id: cartData.productId,
      user_id: userId,
    },
  });

  return cart;
};

const findAllCartByUserId = async (userId) => {
  const cart = await prisma.cart.findMany({
    where: {
      user_id: userId,
    },
    include: {
      product: true,
    },
  });

  return cart;
};

const editCart = async (cartId, cartData) => {
  const cart = await prisma.cart.update({
    where: {
      id: cartId,
    },
    data: {
      quantity: cartData.quantity,
    },
  });

  return cart;
};

const deleteCart = async (cartId) => {
  await prisma.cart.delete({
    where: {
      id: cartId,
    },
  });
};

const deleteAllCart = async (userId) => {
  await prisma.cart.deleteMany({
    where: {
      user_id: userId,
    },
  });
};

export {
  insertCart,
  findCartByUserIdAndProductId,
  findAllCartByUserId,
  editCart,
  findCartById,
  deleteAllCart,
  deleteCart,
};
