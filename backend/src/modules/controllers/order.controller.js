import orderService from "../services/order.service.js";

class OrderController {
  async createOrderController(req, res) {
    try {
      const userId = req.user.id;
      const orderData = req.body;
      const order = await orderService.createOrderService(userId, orderData);

      res.status(201).send({
        message: "order berhasil dibuat!",
        data: order,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getAllOrderByUserIdController(req, res) {
    try {
      const userId = req.user.id;
      const order = await orderService.getAllOrderByUserIdService(userId);

      res.status(200).send({
        message: "berhasil mengambil semua order",
        data: order,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getAllOrderController(req, res) {
    try {
      const order = await orderService.getAllOrderService();

      res.status(200).send({
        message: "berhasil mengambil data order",
        data: order,
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async getOrderByIdController(req, res) {
    try {
      const orderId = parseInt(req.params.orderId);
      const order = await orderService.getOrderByIdService(orderId);

      res.status(200).send({
        message: "berhasil mengambil order data",
        data: order,
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async editOrderStatusByIdController(req, res) {
    try {
      const orderId = parseInt(req.params.orderId);
      const orderData = req.body;
      const order = await orderService.editOrderStatusByIdService(
        orderId,
        orderData
      );

      res.status(201).send({
        message: `order status berhasil dirubah ke ${orderData.status}`,
        data: order,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getAllOrderDikemasController(req, res) {
    try {
      const order = await orderService.getAllOrderDikemasService();

      res.status(200).send(order);
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getAllOrderDikirimController(req, res) {
    try {
      const order = await orderService.getAllOrderDikirimService();

      res.status(200).send(order);
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }
}

export default new OrderController();
