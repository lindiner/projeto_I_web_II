
import knex from "knex";

const deploy = process.env.NODE_ENV || "main"

const config = require("../knexfile")[deploy];

const connection = knex(config)

if(deploy === 'main'){
    connection.migrate.latest()
}
    
export default  connection;