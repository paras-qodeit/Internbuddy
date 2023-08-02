const router = require("express").Router();
const certificateController = require("../controllers/certificateController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/certificate").post(certificateController.certificate);

module.exports = router;
