import { PostDatabase} from "../data/PostDatabase"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"
import { PostInputDTO } from "../model/postDTO"
import { typePostSortedByType } from "../model/postSortedTypeDTO"
import { generateId } from "../services/generateId"

export class PostBusiness {
   public createPost =  async (input: PostInputDTO) => {
      try{
         const { photo, description, type, created_at, author_id} = input

         if (
            !photo ||
            !description ||
            !type ||
            !created_at||
            !author_id
         ) {
            throw new InvalidRequest()
         }
   
         const postId: string = generateId()

         const postDatabase = new PostDatabase()
   
         await postDatabase.createPost({
            id:postId,
            photo,
            description,
            type,
            created_at,
            author_id
         }) 
   
      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message || error.sqlMessage)
      }
   }

   async find(id: string) {

      if (!id) {
         throw new Error('Not found')
      }

      if (id !== String(id)) {
         throw new Error('Invalid values')
      }

          
      const postDB = await new PostDatabase().find(id)
        
      if (!postDB[0]) {
          const message = "Post not found"
          throw new Error(message)
      }
 
      const post: PostInputDTO = {
          id: postDB[0].id,
          photo: postDB[0].photo,
          description: postDB[0].description,
          type: postDB[0].type,
          created_at: postDB[0].created_at,
          author_id: postDB[0].author_id,
      }

      return post
  }

  async getPostsByPage(page: number, token: string) {

      if (page !== Number(page)) {
       throw new Error('Invalid values')
      }

      if (!token) {
       throw new Error('Please provide a token')
      }

      if (token !== String(token)) {
       throw new Error('Invalid values')
      }

      const postByPage = await new PostDatabase().selectAllPostsByPage(page)

      return postByPage
   }


   async getPostByType(value: typePostSortedByType, token:string){
        
      if (!token) {
          throw new Error('Please provide a token')
      }

      if (token !== String(token)) {
          throw new Error('Invalid values')
      }
      
      if (!value.type || !value.order || !value.sort) {
          throw new Error('Fill in the fields, please')
      }

      if (value.type !== String(value.type) || value.order !== String(value.order) || value.sort !== String(value.sort)) {
          throw new Error('Invalid values')
      }

      const post = {
          type: value.type,
          sort:value.sort,
          order: value.order
      }

      const posts = await new PostDatabase().selectPostByType(post)

      return posts
  }
  
}
