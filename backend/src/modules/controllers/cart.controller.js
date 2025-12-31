import cartService from "../services/cart.service.js";

class CartController {
  async createCartController(req, res) {
    try {
      const userId = req.user.id;
      const cartData = req.body;
      const cart = await cartService.createCartService(cartData, userId);

      res.status(201).send({
        message: "add product to cart succesfully",
        data: cart,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async getUserCartController(req, res) {
    try {
      const userId = req.user.id;
      const cart = await cartService.getUserCartService(userId);

      res.status(200).send({
        message: "berhasil mengambil cart",
        data: cart,
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async editCartByIdController(req, res) {
    try {
      const cartId = parseInt(req.params.cartId);
      const cartData = req.body;
      const cart = await cartService.editCartByIdService(cartId, cartData);

      res.status(200).send({
        message: "berhasil mengupdate data cart",
        data: cart,
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async deleteCartByIdController(req, res) {
    try {
      const cartId = parseInt(req.params.cartId);
      await cartService.deleteCartByIdService(cartId);

      res.status(200).send({
        message: "cart deleted!",
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async deleteAllCartByUserIdController(req, res) {
    try {
      const userId = req.user.id;
      await cartService.deleteAllCartByUserIdService(userId);

      res.status(200).send({
        message: "All cart deleted!",
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }
}

export default new CartController();
