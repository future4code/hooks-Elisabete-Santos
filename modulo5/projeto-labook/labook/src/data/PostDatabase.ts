import post from "../model/post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
   private static TABLE_NAME = "labook_posts";

  public createPost = async ({ id, photo, description,type, created_at, author_id }: any) => {
    try {
      await BaseDatabase.connection.insert({
         id,
         photo,
         description,
         type,
         created_at,
         author_id
       })
       .into(PostDatabase.TABLE_NAME);

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
   }

//    async selectById(id: string): Promise<post> {
//     try {
//         const result = await BaseDatabase.connection(PostDatabase.TABLE_NAME)
//             .select("*")
//             .where({ id })

//         return result[0]
//     } catch (error: any) {
//         throw new Error(error.sqlMessage || error.message)
//     }
// }
}