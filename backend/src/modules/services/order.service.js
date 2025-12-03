import {
  deleteAllCart,
  findAllCartByUserId,
} from "../repositories/cart.repository.js";
import {
  editOrderStatus,
  findAllOrder,
  findOrderById,
  findOrderByUserId,
  insertOrder,
  insertOrderItem,
} from "../repositories/order.repository.js";

const createOrderService = async (userId, orderData) => {
  const validationInputOrderData = !orderData.address || !orderData.phone;
  if (validationInputOrderData) {
    throw new Error("Data yg dimasukkan tidak lengkap!");
  }

  const carts = await findAllCartByUserId(userId);
  if (carts.length === 0) {
    throw new Error("Cart masih kosong!");
  }

  const total = carts.reduce((sum, current) => {
    return sum + current.quantity * current.product.price;
  }, 0);

  const order = await insertOrder(userId, orderData, total);

  for (const cart of carts) {
    await insertOrderItem(order, cart);
  }

  const orderFinal = await getOrderByIdService(order.id);

  await deleteAllCart(userId);

  return orderFinal;
};

const getAllOrderByUserIdService = async (userId) => {
  const order = await findOrderByUserId(userId);

  return order;
};

const getAllOrderService = async () => {
  const order = await findAllOrder();

  return order;
};

const getOrderByIdService = async (orderId) => {
  const order = await findOrderById(orderId);

  if (!order) {
    throw new Error("order tidak ditemukan");
  }

  return order;
};

const editOrderStatusByIdService = async (orderId, orderData) => {
  const validationForm = !orderData.status;
  if (validationForm) {
    throw new Error("data status tidak boleh kosong!");
  }

  await getOrderByIdService(orderId);

  const order = editOrderStatus(orderId, orderData);

  return order;
};

export {
  createOrderService,
  getAllOrderByUserIdService,
  getAllOrderService,
  getOrderByIdService,
  editOrderStatusByIdService,
};
