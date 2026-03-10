import sql from "./src/database/connection.js";

sql`
CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL
);`.then(() => {
    console.log("tabela criada")
})