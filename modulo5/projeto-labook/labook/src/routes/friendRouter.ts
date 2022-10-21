import express from "express"
import { FriendController } from "../controller/FriendController"

export const friendRouter = express.Router()
const friendController = new FriendController

friendRouter.post("/", friendController.create)
friendRouter.delete("/delete", friendController.delete)
friendRouter.get("/feed/:userId", friendController.feed)