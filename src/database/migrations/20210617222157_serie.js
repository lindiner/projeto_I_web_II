exports.up = knex => knex.schema.createTable('filme' , table =>{
    table.increments();
    table.string('nome').notNullable();
    table.string('atores').unique().notNullable();
    table.string('categoria').unique().notNullable();
    table.number('ano').unique();
    
}) 

exports.down = knex => knex.schema.dropTable('filme')