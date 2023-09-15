import express, { Request, Response, json } from "express"
// import { User } from "protocols/user-protocol"

const app = express()
app.use(json())


app.get("/person", (req: Request,res: Response) => {
    res.status(200).send("Ok")
})



app.listen(5000, () =>
{
    console.log("server is running")
})