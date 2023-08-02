const router = require("express").Router();
const certificateController = require("../controllers/certificateController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/certificate", authMiddleware, certificateController.certificate);

module.exports = router;
