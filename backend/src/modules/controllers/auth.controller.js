import authService from "../services/auth.service.js";

class AuthController {
  async registerCustomerController(req, res) {
    try {
      const customerData = req.body;
      const customer = await authService.registerCustomerService(customerData);

      res.status(201).send({
        message: "register berhasil",
        data: customer,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async registerAdminController(req, res) {
    try {
      const adminData = req.body;
      const admin = await authService.registerAdminService(adminData);

      res.status(201).send({
        message: "register berhasil",
        data: admin,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async registerOwnerController(req, res) {
    try {
      const ownerData = req.body;
      const owner = await authService.registerOwnerService(ownerData);

      res.status(201).send({
        message: "register berhasil",
        data: owner,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async loginUserController(req, res) {
    try {
      const userData = req.body;
      const user = await authService.loginUserService(userData);

      res.status(200).send({
        message: "login berhasil",
        data: user,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  async deleteAdminByIdController(req, res) {
    try {
      const adminId = parseInt(req.params.adminId);
      await authService.deleteAdminByIdService(adminId);

      res.status(200).send({
        message: "admin berhasil dihapus",
      });
    } catch (error) {
      res.status(404).send({
        error: error.message,
      });
    }
  }

  async getAllAdminController(req, res) {
    try {
      const admin = await authService.getAllAdminService();

      res.status(200).send(admin);
    } catch (error) {
      res.status(400).send({
        error: error.mesaage,
      });
    }
  }
}

export default new AuthController();
