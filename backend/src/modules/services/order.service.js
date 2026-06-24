import cartRepository from "../repositories/cart.repository.js";
import orderRepository from "../repositories/order.repository.js";
import productRepository from "../repositories/product.repository.js";

class OrderService {
  async createOrderService(userId, orderData) {
    const validationInputOrderData = !orderData.address || !orderData.phone;
    if (validationInputOrderData) {
      throw new Error("Data yg dimasukkan tidak lengkap!");
    }

    const carts = await cartRepository.findAllCartByUserId(userId);
    if (carts.length === 0) {
      throw new Error("Cart masih kosong!");
    }

    // pastikan stok semua produk mencukupi sebelum checkout
    for (const cart of carts) {
      if (cart.quantity > cart.product.stock) {
        throw new Error(
          `Stok ${cart.product.name} tidak mencukupi (tersisa ${cart.product.stock})`
        );
      }
    }

    const total = carts.reduce((sum, current) => {
      return sum + current.quantity * current.product.price;
    }, 0);

    const order = await orderRepository.insertOrder(userId, orderData, total);

    for (const cart of carts) {
      await orderRepository.insertOrderItem(order, cart);
      // kurangi stok produk sesuai jumlah yang dibeli
      await productRepository.decrementStock(cart.product_id, cart.quantity);
    }

    const orderFinal = await this.getOrderByIdService(order.id);

    await cartRepository.deleteAllCart(userId);

    return orderFinal;
  }

  async getAllOrderByUserIdService(userId) {
    const order = await orderRepository.findOrderByUserId(userId);

    return order;
  }

  async getAllOrderService() {
    const order = await orderRepository.findAllOrder();

    return order;
  }

  async getOrderByIdService(orderId) {
    const order = await orderRepository.findOrderById(orderId);

    if (!order) {
      throw new Error("order tidak ditemukan");
    }

    return order;
  }

  async editOrderStatusByIdService(orderId, orderData) {
    const validationForm = !orderData.status;
    if (validationForm) {
      throw new Error("data status tidak boleh kosong!");
    }

    await this.getOrderByIdService(orderId);

    const order = orderRepository.editOrderStatus(orderId, orderData);

    return order;
  }

  async getAllOrderDikemasService() {
    const order = await orderRepository.findAllOrderDikemas();

    return order;
  }

  async getAllOrderDikirimService() {
    const order = await orderRepository.findAllOrderDikirim();

    return order;
  }
}

export default new OrderService();
