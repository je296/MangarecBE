import express from "express";
import {
  loginUser,
  registerUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController";
import { authGuard } from "../middleware/AuthMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/editProfile", authGuard, updateProfile);
router.put("/editProfilePicture", authGuard, updateProfilePicture);

export default router;
