import prisma from "../../db/index.js";

const insertOrder = async (userId, orderData, totalAmount) => {
  const order = await prisma.order.create({
    data: {
      user_id: userId,
      total_amount: totalAmount,
      address: orderData.address,
      phone: orderData.phone,
      penerima: orderData.penerima
    },
  });

  return order;
};

const insertOrderItem = async (orderData, cart) => {
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
};

const findOrderById = async (orderId) => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      order_items: true,
    },
  });

  return order;
};

const findOrderByUserId = async (userId) => {
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
};

const findAllOrder = async () => {
  const order = await prisma.order.findMany({
    include: {
      order_items: true,
    },
  });

  return order;
};

const editOrderStatus = async (orderId, orderData) => {
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
};

export {
  insertOrder,
  insertOrderItem,
  findOrderById,
  findOrderByUserId,
  findAllOrder,
  editOrderStatus,
};
