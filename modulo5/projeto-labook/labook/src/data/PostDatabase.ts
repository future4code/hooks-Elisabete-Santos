import post from "../model/post"
import { typePostSortedByType } from "../model/postSortedTypeDTO";
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

  async find (id:string):Promise<any>{
    try {
      const result = await PostDatabase.connection
      .select("*")
      .where({ id })
      .from(PostDatabase.TABLE_NAME)
    
      return result
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  async selectAllPostsByPage(page: number) {
    try {
      const size = 5

      let offset = size * (page - 1)

      const result = await BaseDatabase.connection(PostDatabase.TABLE_NAME)
        .select("*")
        .limit(size)
        .offset(offset)

        return result
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  async selectPostByType(value: typePostSortedByType) {
    try {
        const result = await BaseDatabase.connection(PostDatabase.TABLE_NAME)
            .select("*")
            .where("type", "like", `${value.type}`)
            .orderBy(value.sort, value.order)
            
        return result
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.sqlMessage || error.message)
    }
}

}
