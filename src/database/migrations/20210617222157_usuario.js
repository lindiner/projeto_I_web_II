exports.up = knex => knex.schema.createTable('usuario' , table =>{
    table.increments();
    table.string('nome').notNullable();
    table.string('telefone').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('senha').notNullable();


}) 

exports.down = knex => knex.schema.dropTable('usuario')