import { app } from "./app";
import { userRouter } from "./routes/userRouter";
import { productRouter } from "./routes/productRouter";

app.use("/user", userRouter);
app.use("/product", productRouter);