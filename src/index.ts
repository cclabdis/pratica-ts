import express, { Request, Response, json } from "express"
import router from "./routes/people.routes"

const app = express()
app.use(json())
app.use(router)

app.listen(5000, () =>
{
    console.log("server is running")
})