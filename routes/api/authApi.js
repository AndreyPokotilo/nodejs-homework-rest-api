const express = require("express");
const router = express.Router();
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { userCtrl } = require("../../controllers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  userCtrl.register
);

router.post("/login", validateBody(schemas.loginSchema), userCtrl.login);

router.get("/current", authenticate, userCtrl.current);

router.post("/logout", authenticate, userCtrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), userCtrl.updateAvatar);

module.exports = router;
