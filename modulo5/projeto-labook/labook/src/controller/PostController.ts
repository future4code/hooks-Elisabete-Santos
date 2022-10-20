import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/postDTO"


export class PostController {

   public createPost = async (
       req: Request,
       res: Response
   ) => {
       try {
           const { id, photo, description, type, created_at, author_id } = req.body

           

           const input: PostInputDTO = {
               id,
               photo,
               description,
               type,
               created_at,
               author_id
           }

           const postBusiness = new PostBusiness()

           await postBusiness.createPost(input)

           res.status(201).send({ message: "Success!" })
       } catch (error: any) {
           res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
       }
   }

//    async getPostById(req: Request, res: Response) {
//     try {
//         const id = req.params.id;
  
//         const result = await this.PostBusiness.getPostById(id)
  
//         res.status(201).send(result);
//       } catch (error: any) {
//         return res.status(400).send(error.message)
//       }
//}
}
