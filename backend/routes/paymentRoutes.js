const router = require("express").Router();
const paymentController = require("../controllers/PaymentController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/payment").post(paymentController.createPaymentRequest);

module.exports = router;
