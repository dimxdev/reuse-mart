import {
  createOrderService,
  editOrderStatusByIdService,
  getAllOrderByUserIdService,
  getAllOrderDikemasService,
  getAllOrderDikirimService,
  getAllOrderService,
  getOrderByIdService,
} from "../services/order.service.js";

const createOrderController = async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = req.body;
    const order = await createOrderService(userId, orderData);

    res.status(201).send({
      message: "order berhasil dibuat!",
      data: order,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getAllOrderByUserIdController = async (req, res) => {
  try {
    const userId = req.user.id;
    const order = await getAllOrderByUserIdService(userId);

    res.status(200).send({
      message: "berhasil mengambil semua order",
      data: order,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getAllOrderController = async (req, res) => {
  try {
    const order = await getAllOrderService();

    res.status(200).send({
      message: "berhasil mengambil data order",
      data: order,
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const getOrderByIdController = async (req, res) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const order = await getOrderByIdService(orderId);

    res.status(200).send({
      message: "berhasil mengambil order data",
      data: order,
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const editOrderStatusByIdController = async (req, res) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const orderData = req.body;
    const order = await editOrderStatusByIdService(orderId, orderData);

    res.status(201).send({
      message: `order status berhasil dirubah ke ${orderData.status}`,
      data: order,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getAllOrderDikemasController = async (req, res) => {
  try {
    const order = await getAllOrderDikemasService();

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getAllOrderDikirimController = async (req, res) => {
  try {
    const order = await getAllOrderDikirimService();

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export {
  createOrderController,
  getAllOrderByUserIdController,
  getAllOrderController,
  getOrderByIdController,
  editOrderStatusByIdController,
  getAllOrderDikemasController,
  getAllOrderDikirimController,
};
