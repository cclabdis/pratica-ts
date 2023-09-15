import express, { Request, Response, json } from "express"
import { User } from "protocols/user-protocol"

const app = express()
app.use(json())


app.get("/health", (req: Request,res: Response) => {
    res.status(200).send("Ok")
})

app.post("/users", (req: Request, res: Response) => {
    const body = req.body as User
})

app.listen(5000, () =>
{
    console.log("server is running")
})