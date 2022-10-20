import { PostDatabase} from "../data/PostDatabase"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"
import { PostInputDTO } from "../model/postDTO"
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

//    public getPostById =async (id: string) => {
//    try {
   
//        const postDatabase = await this.postDatabase.getPostById(id)
//        if(!postDatabase){
//          throw new Error("Post não localizado");
//        }
   
//        const result = {
//          id: postDatabase.id,
//          photo: postDatabase.photo,
//          description: postDatabase.description,
//          type: postDatabase.type,
//          created_at: postDatabase.created_at,
//          author_id: postDatabase.author_id,
//        }
   
//        return result;

//    } catch (error:any) {
//       throw new Error(error.sqlMessage || error.message)
//    }
//   }
}
