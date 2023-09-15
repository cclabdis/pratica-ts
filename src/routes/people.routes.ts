import { getPeople } from "../controllers/people.controller";
import { Router } from "express";

const peopleRouter = Router()

peopleRouter.get('/person', getPeople)

export default peopleRouter;