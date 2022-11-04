export enum POST_TYPES {
   NORMAL = "NORMAL",
   EVENTO = "EVENTO"
 }

export interface PostInputDTO {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   created_at: string,
   author_id: string
}