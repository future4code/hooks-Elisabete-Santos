import app from "./app"
import { userRouter } from "./routes/userRoute"

app.use('/user/', userRouter)
