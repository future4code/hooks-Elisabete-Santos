import express from 'express'
import cors from 'cors' 
import { toDoList } from './data'

import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

// Extra listar tudo
app.get('/listAll', (req, res) => {
   res.status(200).send(toDoList)
})

//Exercício 1
app.get('/ping', (req, res) => {
   res.send('Pong 🏓')
})


// Exercício 4 
app.get('/allTask', (req, res) => {
   try {
      const allTask = toDoList.filter((task) => task.completed === true)

      res.status(200).send(allTask) 

   } catch (error) {
      res.send(error)
   }
  
})


// Exercício 5
app.post('/createTask', (req, res) => {
   try {
      const { userId, id, title, completed } = req.body

      if (!userId || !id || !title || !completed) throw new Error("É necessário informar userId, id, título e se a tarefa está completa ou não")
      
      toDoList.push({ userId, id, title, completed})

      res.status(201).json({
         "message": "Tarefa criada com sucesso",
         toDoList
      })

   } catch (error) {
      res.send(error)
   }
})


// Exercício 6
app.put('/upTask/:id', (req, res) => {
   const id:Number = Number(req.params.id);
   let newCompleted = req.body.completed
   const change = toDoList.find((task) => {
      if(task.id == id) {
         return task.completed = newCompleted;
      }})
   
   res.status(200).json({
      "mensagem": "Tarefa atualizada com sucesso",
      change
  })
})


// Exercício 7
app.delete('/task/:id', (req, res) => {
   const userId:number = Number(req.params.id)

   const deleteTask = toDoList.filter((task) => {
      return task.id === userId
   })

   res.status(200).json({
      "message": "Tarefa deletada com sucesso",
      deleteTask
   })
})


// Exercício 8
app.get('/task/:userId', (req, res) => {
   const userId:number = Number(req.params.userId)

   const taskUser = toDoList.filter((task) => {
      return task.userId === userId
   })

   res.status(200).send(taskUser)
})




const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`)
   } else {
     console.error(`Failure upon starting server.`)
   }
})

