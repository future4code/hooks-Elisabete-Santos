export enum POST_TYPES {
   NORMAL = "NORMAL",
   EVENTO = "EVENTO"
 }

export default class Post {
   constructor(
       private id: string,
       private photo: string,
       private description: string,
       private type: POST_TYPES,
       private created_at: string,
       private author_id: string
   ) { }
   
   public getId() {
       return this.id
   }

   public getPhoto() {
       return this.photo
   }
   public getDescription() {
       return this.description
   }

   public getType() {
       return this.type
   }

   public getCreateAt() {
       return this.created_at
   }

   public getAutorId() {
       return this.author_id
   }
}