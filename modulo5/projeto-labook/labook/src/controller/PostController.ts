import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/postDTO"
import { typePostSortedByType } from "../model/postSortedTypeDTO"


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

   async find (req:Request, res:Response):Promise<void>{
        try {
            const  id  = req.params.id as string

            const input = id

            const postBusiness = new PostBusiness()
            const result = await postBusiness.find(input)

            res.status(200).send(result)
        } catch (error:any) {
         res.status(500).send(error.sqlMessage || error.message);
        }
    }

    async getPostsByPage(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string

            const page = Number(req.params.page)

            const post = new PostBusiness()

            const postByPage = await post.getPostsByPage(page, token)

            res.status(201).send(postByPage)

        } catch (error: any) {
            res.send({ message: error.sqlMessage || error.message })
        }
    }

    async getPostsByTypeAndOrder(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string

            let type= String(req.query.type)
            let sort = String(req.query.sort)
            let order = String(req.query.order)

            const postsSorted:typePostSortedByType = {
                type: type,
                sort: sort,
                order: order
            }

            const post = new PostBusiness()

            const postsSortedByType = await post.getPostByType(postsSorted, token)
            
            console.log(postsSortedByType);
            
            res.status(201).send({postsSortedByType})

        } catch (error: any) {
            res.send({ aaaaamessageeee: error.message })
        }
    }
}
