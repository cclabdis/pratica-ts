import httpStatus from "http-status";
import { Request, Response} from "express"
import { peopleService } from "services/people.service";


export async function getPeople(req: Request, res: Response){
    const peoples = await peopleService.getPeople()
    console.log(peoples)
    res.status(httpStatus.OK).send(peoples)
}

peopleService