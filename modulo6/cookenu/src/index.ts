import app from "./app"
import { userRouter } from "./routes/userRouter"
import { recipeRouter } from "./routes/recipeRouter"

app.use("/user", userRouter)
app.use("/recipe", recipeRouter)