import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users, USER_TYPE } from "./data"

const app = express()

app.use(express.json())
app.use(cors())


//Ex1
// a. Qual método HTTP você deve utilizar para isso?
//GET
// b. Como você indicaria a **entidade** que está sendo manipulada?
// /user
app.get('/allUsers', (req:Request, res:Response) => {
   let statusCode: number = 500

   try {
      const usersList: User[] | undefined = users.filter((user) => {
         return user
      })

      if(!usersList){
         statusCode = 404
         throw new Error('Usuário não encontrado :(')
      }

      res.status(201).send(usersList)

   } catch (error) {
      res.status(statusCode).send(error.message)
   }
})


//Ex2
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//  Passei como query, 
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// Sim, apenas passando uma validação.
app.get('/users', (req:Request, res:Response) => {
   let statusCode: number = 500
   try {
      const type: string = req.query.type as string

      const userList: User[] | undefined = users.filter((user) => user.type === type)

      if (!userList) {
         statusCode = 404 //not found
         throw new Error("Usuário não encontrado")
      }

      if (type !== "ADMIN" && type !== "NORMAL") {
         statusCode = 404
         throw new Error("Usuário não encontrado")
      }

      if (userList.length === 0) {
         statusCode = 422
         throw new Error("O type só aceita as strings 'ADMIN' ou 'NORMAL'")
      }

      res.status(200).send(userList)

  } catch (error) {
      res.status(statusCode).send(error.message)
  }
})


// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// O query ou path params
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/users/:name", (req: Request, res: Response) => {
   let statusCode: number = 500
   try {
       const name: string = req.params.name as string

       if (!name) {
           statusCode = 404 
           throw new Error("Usuário não encontrado")
       }

       const user: User | undefined = users.find((user) => user.name === name)

       if (!user) {
           statusCode = 404 //not found
           throw new Error("Usuário não encontrado")
       }

       res.status(200).send(user)

   } catch (error) {
       res.status(statusCode).send(error.message)
   }
})


//Exercício 4
//a) Mesmo mudando para PUT, ainda continua criando novos usuários
//b) Não é apropriado, pois o PUT deve somente modificar e não criar
app.post("/create/users", (req: Request, res: Response) => {
   let statusCode = 400
   try {
       const { name, email, type, age }: User = req.body
    
       if ( !name || !email || !type || !age) {
         statusCode = 422
         throw new Error("Um ou mais campos estão vazios")
       }

      const newUser: User = {
         id: (users.length + 1),
         name,
         email,
         type,
         age
      }

      if(typeof name !== "string" ) {
         statusCode = 422
         throw new Error("Name deve ser do tipo string ")
      }
   
      if(typeof email !== "string" ) {
         statusCode = 422
         throw new Error("Email deve ser do tipo string")
      }
   
      if(type !== USER_TYPE.ADMIN && type !== USER_TYPE.NORMAL) {
         statusCode = 422
         throw new Error("Type só aceita as strings 'ADMIN' ou 'NORMAL'")
      }
   
      if(isNaN(age) || age <= 0) {
         statusCode = 422
         throw new Error("Age deve ser do tipo number e não pode ser menor ou igual a 0")
      }

      users.push(newUser)
      res.status(201).send("Usuário criado")

   } catch (error) {
      res.status(statusCode).send(error.message)
   }
})


//Desafio 5
app.put("/users/:id", (req,res) => {
   let statusCode: number = 500
   try {
     const id: number = Number(req.params.id)
 
     const userIndex = users.findIndex(user => user.id === id)
 
     if(userIndex < 0) {
       statusCode = 404
       throw new Error("Usuário não encontrado")
     }
 
     else {
       users[userIndex].name = `${users[userIndex].name}-ALTERADO`
       res.status(200).send(users)
     }
 
   } catch (error) {
     res.status(statusCode).send({ message: error.message })
   }
 })

 
 // Desafio 6 = ???
 
 // Desafio 7
 app.delete('/delete/user/:id', (req, res) => {
    let statusCode = 500
    try {
      const id: number = Number(req.params.id)
       
      if (!id) {
         statusCode = 400
         throw new Error("Id do usuário invalido.")
      }

      const userDelete = users.filter((user) => {
         return id !== user.id
      })

      if (!userDelete) {
         statusCode = 400
         throw new Error("Erro! Sem usuário.")
      }
      
      res.status(200).send('Usuário deletado com sucesso')
         
      } catch (error) {
         res.status(statusCode).send(error.message)
      }
      
   })


app.listen(3003, () => {
   console.log('Server is running in port 3003')
})