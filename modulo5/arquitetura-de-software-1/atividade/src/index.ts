import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/", async function(){
   console.log("endpoint teste")
})

app.post('/user', userController.createUser)
app.get('/user/all', userController.get)
app.delete('/user/delete/:id', userController.deleteUser)


