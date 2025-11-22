import {
  loginUserService,
  registerUserService,
} from "../services/auth.service.js";

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const user = await registerUserService(userData);

    res.status(201).send({
      message: "register berhasil",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const loginUserController = async (req, res) => {
  try {
    const userData = req.body;
    const user = await loginUserService(userData);

    res.status(200).send({
      message: "login berhasil",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export { createUserController, loginUserController };
