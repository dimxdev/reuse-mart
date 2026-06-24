import cartRepository from "../repositories/cart.repository.js";
import productRepository from "../repositories/product.repository.js";

class CartService {
  async getCartById(cartId) {
    const cart = await cartRepository.findCartById(cartId);
    if (!cart) {
      throw new Error("cart tidak tersedia");
    }

    return cart;
  }

  async createCartService(cartData, userId) {
    const dataValidation = !cartData.productId;
    if (dataValidation) {
      throw new Error("data yang dimasukkan tidak lengkap!");
    }

    // pastikan produk ada dan stoknya tidak habis
    const product = await productRepository.findProductById(
      parseInt(cartData.productId)
    );
    if (!product) {
      throw new Error("produk tidak ditemukan");
    }
    if (product.stock < 1) {
      throw new Error("stok produk habis!");
    }

    const cartByUserIdAndProductId =
      await cartRepository.findCartByUserIdAndProductId(cartData, userId);
    if (cartByUserIdAndProductId) {
      throw new Error("product sudah ada di dalam cart!");
    }

    const cart = await cartRepository.insertCart(cartData, userId);

    return cart;
  }

  async getUserCartService(userId) {
    const cart = await cartRepository.findAllCartByUserId(userId);

    return cart;
  }

  async editCartByIdService(cartId, cartData) {
    await this.getCartById(cartId);

    if (cartData.quantity === undefined) {
      throw new Error("quantity harus diisi!");
    }

    const cart = await cartRepository.editCart(cartId, cartData);

    return cart;
  }

  async deleteCartByIdService(cartId) {
    await this.getCartById(cartId);
    await cartRepository.deleteCart(cartId);
  }

  async deleteAllCartByUserIdService(userId) {
    await cartRepository.deleteAllCart(userId);
  }
}

export default new CartService();
