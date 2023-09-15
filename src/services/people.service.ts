import { errors } from "errors/errors";
import { peopleRepository } from "repositories/people.repository";

async function getPeople(){
    const count = await peopleRepository.countPeople()
    const id = Math.random()*count


    const result = await peopleRepository.getPeople(id)
    return result


}

export const peopleService = {getPeople}