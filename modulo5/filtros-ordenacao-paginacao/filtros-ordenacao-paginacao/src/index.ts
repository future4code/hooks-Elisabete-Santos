import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import {getAllUsersName} from "./endpoints/getAllUserName"
import {getAllUsersType} from "./endpoints/getUserType"
import {getAllUsersByOrder} from "./endpoints/getAllUserByOrder"
import {getAllUserPage} from "./endpoints/getAllUserPage"


app.get("/user-name", getAllUsersName)

app.get("/user-type/:type", getAllUsersType)

app.get("/user-order", getAllUsersByOrder )

app.get("/user-order-page", getAllUserPage )