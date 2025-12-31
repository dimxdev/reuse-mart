import prisma from "../../db/index.js";

class CartRepository {
  async insertCart(cartData, userId) {
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
  }

  async findCartById(cartId) {
    const cart = await prisma.cart.findUnique({
      where: {
        id: cartId,
      },
    });

    return cart;
  }

  async findCartByUserIdAndProductId(cartData, userId) {
    const cart = await prisma.cart.findFirst({
      where: {
        product_id: cartData.productId,
        user_id: userId,
      },
    });

    return cart;
  }

  async findAllCartByUserId(userId) {
    const cart = await prisma.cart.findMany({
      where: {
        user_id: userId,
      },
      include: {
        product: true,
      },
    });

    return cart;
  }

  async editCart(cartId, cartData) {
    const cart = await prisma.cart.update({
      where: {
        id: cartId,
      },
      data: {
        quantity: cartData.quantity,
      },
    });

    return cart;
  }

  async deleteCart(cartId) {
    await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });
  }

  async deleteAllCart(userId) {
    await prisma.cart.deleteMany({
      where: {
        user_id: userId,
      },
    });
  }
}

export default new CartRepository();
