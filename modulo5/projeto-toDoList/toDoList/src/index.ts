import app from './app'
import {Request, Response} from 'express'
import connection from "./connection"
import {v4 as generateId} from 'uuid'
import { User, Task} from './types'


app.get("/users", async (req: Request, res: Response) => {
   try {

     const result = await connection.raw(`
       SELECT * FROM TodoListUser;
     `)
 
     res.status(200).send(result[0] || [])

   } catch (error) {
     res.status(400).send(error.message)
   }
})


app.post("/user", async (req: Request, res:Response) => {
   let errorCode = 500
   try {
      const { name, nickname, email } = req.body

      if (name !== String(name) || nickname !== String(nickname) || email !== String(email)) {
         errorCode = 422
         throw new Error("Please check the fields!")
      }

      if (!name || !nickname || !email) {
         errorCode = 422
         throw new Error("Empty fild!")
      }

      const newUser: User = {
         id: generateId(),
         name,
         nickname,
         email
      }
      
      await connection.raw(`
      INSERT INTO TodoListUser(id, name, nickname, email)
      VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
    `)
  
      if (!newUser) {
         errorCode = 400
         throw new Error("Error creating a user.")
      }

      res.status(200).json({mensagem: "Created!", newUser})

   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})


app.get("/user/:id", async (req: Request, res: Response) => {
   let errorCode = 500
   try {
      const id = req.params.id

      if (!id) {
         errorCode = 400
         throw new Error("Id not found or invalid!")
      }

      if (id !== id) {
         errorCode = 400
         throw new Error("Id invalid!")
      }

      const result = await connection.raw(`
         SELECT * FROM TodoListUser
         WHERE id = "${id}";
      `)

      if (!result || result.length === 0) {
         errorCode = 400
         throw new Error("Error getting the user!")
      }
     
      res.status(200).send(result[0])

   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})


app.put("/user/edit/:id", async (req:Request, res:Response) => {
   let errorCode = 400
    
   try {
      const id = req.params.id
      const { name, nickname } = req.body

      if (!name || !nickname) {
         errorCode = 422
         throw new Error("It is necessary to name and nickname")
      }

      await connection.raw(`
         UPDATE TodoListUser
         SET name = "${name}" WHERE id = "${id}";
         UPDATE TodoListUser
         SET nickname = "${nickname}"
         WHERE id = "${id}";
      `)

   res.status(200).send("User changed successfully")
   
   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})


app.post("/task", async (req: Request, res:Response) => {
   let errorCode = 500

   try {
      let { title, description,status, limit_date, creator_user_id } = req.body

      if(!title || !description || !status || !limit_date || !creator_user_id) {
         errorCode = 422
         throw new Error("Please check the fields!")
      }

      const newTask: Task = {
         id: generateId(),
         title,
         description,
         status,
         limit_date,
         creator_user_id
      }
      
      await connection.raw(`
      INSERT INTO TodoListTask(id,title,description, status, limit_date, creator_user_id)
      VALUES("${newTask.id}", "${newTask.title}", "${newTask.description}","${newTask.status}", "${newTask.limit_date}", "${newTask.creator_user_id}")
    `)
  
      if (!newTask) {
         errorCode = 400
         throw new Error("Error creating a task.")
      }

      res.status(200).json({mensagem: "Created!", newTask})

   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})


app.get("/tasks", async (req: Request, res: Response) => {
   try {

     const result = await connection.raw(`
       SELECT * FROM TodoListTask;
     `)
 
     res.status(200).send(result[0] || [])

   } catch (error) {
     res.status(400).send(error.message)
   }
})


 
app.get("/task/:id", async (req: Request, res: Response) => {
   let errorCode: number = 400

  try {
   const id = req.params.id
    
   const result = await connection("TodoListUser")
      .select("id", "title", "description", "status", "limit_date", "creator_user_id")
      .from("TodoListTask")
      .where({ id: id })
    
   if(result.length === 0) {
      errorCode = 422
      throw new Error("Task não encontrada. Verifique se o id passado está correto")
   }

   const newResult = result.map((item) => {
   const dataDate = item.limit_date

   const data = `${dataDate.getDate()}/${dataDate.getMonth() + 1}/${dataDate.getFullYear()}`

   return {
      id: item.id,
      title: item.title,
      description: item.description,
      status: item.status,
      limitDate: data,
      creatorUserId: item.creator_user_id
      }
   })

   res.status(200).send(newResult)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})


app.get("/user_nickname", async (req, res) => {
   let errorCode = 500
   try {
       const query = req.query.query

       if (!query) {
         errorCode = 400
         throw new Error("User nikcs not found!")
       }

       const result = await connection("TodoListUser")
           .select("id", "nickname")
           .where({ nickname: query })

       res.status(200).send(result)

   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})



app.post("/task/responsible", async (req, res) => {
   let errorCode = 500
   try {
       const { task_id, responsible_user_id } = req.body

       if (task_id !== Number(task_id) || responsible_user_id !== Number(responsible_user_id)) {
         errorCode = 400
         throw new Error("Please check the fields!")
       }

       if (!task_id || !responsible_user_id) {
         errorCode = 422
         throw new Error("Empty fild!")
       }

       const result = await connection("TodoListResponsibleUserTaskRelation")
           .insert({
               task_id: task_id,
               responsible_user_id: responsible_user_id
           })

       if (!result) {
         errorCode = 422
         throw new Error("Error creating a relation task.")
       }

       res.status(200).send("Created!")

   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})


app.delete("/user/:id", async (req: Request, res: Response) => {
   let errorCode = 400
   try {
     const id = req.params.id
 
     const user = await connection.raw(`
       SELECT * FROM TodoListUser
       WHERE id = "${id}";
     `)
 
     if (user[0].length === 0) {
       throw new Error("User cannot be found")
     }
 
     await connection.raw(`
       DELETE FROM TodoListUser
       WHERE id = "${id}";
     `)
 
     res.status(200).send("User deleted successfully")

   } catch (error) {
     res.status(errorCode).send(error.message)
   }
})
 