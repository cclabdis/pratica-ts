import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres", // seu user
  password: "121018", // sua senha
  database: "pratica-ts"
})

export { connection };

