import prisma from "../../db/index.js";

class OrderRepository {
  async insertOrder(userId, orderData, totalAmount) {
    const order = await prisma.order.create({
      data: {
        user_id: userId,
        total_amount: totalAmount,
        address: orderData.address,
        phone: orderData.phone,
        penerima: orderData.penerima,
      },
    });

    return order;
  }

  async insertOrderItem(orderData, cart) {
    const orderItem = await prisma.orderItem.create({
      data: {
        order_id: orderData.id,
        product_id: cart.product_id,
        quantity: cart.quantity,
        price: cart.product.price,
        subtotal: cart.product.price * cart.quantity,
      },
    });

    return orderItem;
  }

  async findOrderById(orderId) {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        order_items: true,
      },
    });

    return order;
  }

  async findOrderByUserId(userId) {
    const order = await prisma.order.findMany({
      where: {
        user_id: userId,
      },
      include: {
        order_items: {
          include: {
            product: true,
          },
        },
      },
    });

    return order;
  }

  async findAllOrder() {
    const order = await prisma.order.findMany({
      include: {
        order_items: true,
      },
    });

    return order;
  }

  async editOrderStatus(orderId, orderData) {
    const order = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: orderData.status,
      },
      include: {
        order_items: true,
      },
    });

    return order;
  }

  async findAllOrderDikemas() {
    const order = await prisma.order.findMany({
      where: {
        status: "dikemas",
      },
      include: {
        order_items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    return order;
  }

  async findAllOrderDikirim() {
    const order = await prisma.order.findMany({
      where: {
        status: "dikirim",
      },
      include: {
        order_items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    return order;
  }
}

export default new OrderRepository();
