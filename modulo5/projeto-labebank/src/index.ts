import express from 'express'
import cors from 'cors'
import { Transaction, User, users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/allusers", (req, res) => {
   res.status(200).send(users)
 })




app.listen(3003, () => {
   console.log('Server is running in port 3003')
})