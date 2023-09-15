import { errors } from "errors/errors";
import { peopleRepository } from "../repositories/people.repository";
import { Person } from "protocols/people.protocol";

async function getPeople(): Promise<Person>{
    const count:number = await peopleRepository.countPeople()
    const id = Math.floor(Math.random()* count) +1;

    const result = await peopleRepository.getPeople(id)
    return result
}

export const peopleService = {getPeople}