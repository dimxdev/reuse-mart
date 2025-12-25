import {
  deleteAdminByIdService,
  getAllAdminService,
  loginUserService,
  registerAdminService,
  registerCustomerService,
} from "../services/auth.service.js";

const registerCustomerController = async (req, res) => {
  try {
    const customerData = req.body;
    const customer = await registerCustomerService(customerData);

    res.status(201).send({
      message: "register berhasil",
      data: customer,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const registeradminController = async (req, res) => {
  try {
    const adminData = req.body;
    const admin = await registerAdminService(adminData);

    res.status(201).send({
      message: "register berhasil",
      data: admin,
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

const deleteAdminByIdController = async (req, res) => {
  try {
    const adminId = parseInt(req.params.adminId);
    await deleteAdminByIdService(adminId);

    res.status(200).send({
      message: "admin berhasil dihapus",
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

const getAllAdminController = async (req, res) => {
  try {
    const admin = await getAllAdminService() 

    res.status(200).send(admin)
  } catch (error) {
    res.status(400).send({
      error: error.mesaage
    })
  }
}

export {
  registerCustomerController,
  loginUserController,
  registeradminController,
  deleteAdminByIdController,
  getAllAdminController
};
