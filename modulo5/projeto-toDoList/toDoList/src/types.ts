export type User = {
   id: string,
   name: string,
   nickname: string,
   email: string
}

export enum STATUS {
   TODO = "To Do",
   DOING = "Doing",
   DONE = "Done",
}

export type Task = {
   id: string,
   title: string,
   description: string,
   limit_date: Date,
   status: STATUS,
   creator_user_id: string
}