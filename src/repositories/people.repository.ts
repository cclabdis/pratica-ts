import { connection } from "./../database/database";

async function countPeople(){
   const calc = await connection.query(
        `SELECT COUNT(*) FROM people `
    );
    return calc
}

async function getPeople(id: number){
    const people = await connection.query(
        `SELECT * FROM people WHERE id = $1;`
    );
    return people
}

export const peopleRepository ={ countPeople, getPeople}