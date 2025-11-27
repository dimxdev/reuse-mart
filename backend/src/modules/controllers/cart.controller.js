import {
  createCartService,
  deleteAllCartByUserIdService,
  deleteCartByIdService,
  editCartByIdService,
  getUserCartService,
} from "../services/cart.service.js";

const createCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartData = req.body;
    const cart = await createCartService(cartData, userId);

    res.status(201).send({
      message: "add product to cart succesfully",
      data: cart,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const getUserCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await getUserCartService(userId);

    res.status(200).send({
      message: "berhasil mengambil cart",
      data: cart,
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const editCartByIdController = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cartId);
    const cartData = req.body;
    const cart = await editCartByIdService(cartId, cartData);

    res.status(200).send({
      message: "berhasil mengupdate data cart",
      data: cart,
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const deleteCartByIdController = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cartId);
    await deleteCartByIdService(cartId);

    res.status(200).send({
      message: "cart deleted!",
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const deleteAllCartByUserIdController = async (req, res) => {
  try {
    const userId = req.user.id;
    await deleteAllCartByUserIdService(userId);

    res.status(200).send({
      message: "All cart deleted!",
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export {
  createCartController,
  getUserCartController,
  editCartByIdController,
  deleteCartByIdController,
  deleteAllCartByUserIdController,
};
