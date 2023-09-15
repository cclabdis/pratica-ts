import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "bubble.db.elephantsql.com",
  port: 5432,
  user: "qcdcasrl", // seu user
  password: "gAowkZ65m4Gjz3g5n9PCBgRmE6CFGKmr", // sua senha
  database: "/qcdcasrl"
})

export { connection };

