import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.post("/signup", userController.createUser);
userRouter.post("/login", userController.login)
userRouter.put("/login/resetPassword", userController.resetPassword)
userRouter.get("/profile", userController.getProfile)
userRouter.post("/follow", userController.followUser)
userRouter.post("/unfollow", userController.unfollowUser)
userRouter.get("/feed", userController.getFeed)
userRouter.delete("/delete/:id", userController.deleteUser)
userRouter.get("/:id", userController.getOtherProfile)