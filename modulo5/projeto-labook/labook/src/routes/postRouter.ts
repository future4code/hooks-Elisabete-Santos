import express from 'express'
import { PostController } from '../controller/PostController'

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/", postController.createPost)
postRouter.get("/find/:id", postController.find)
postRouter.get("/all/:page", postController.getPostsByPage)
postRouter.get("/all-posts-sorted", postController.getPostsByTypeAndOrder)