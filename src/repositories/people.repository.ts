import { Person } from "protocols/people.protocol";
import { connection } from "./../database/database";

async function countPeople(): Promise<number> {
    const calc = await connection.query<Person[]>(
        `SELECT * FROM people `
    );
    return calc.rowCount
}

async function getPeople(id: number): Promise<Person>{
    const people = await connection.query<Person>(
        `SELECT * FROM people WHERE id = $1;`,[id]
    );
    return people.rows[0]
}

export const peopleRepository ={ countPeople, getPeople}