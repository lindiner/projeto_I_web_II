const knex = require ('../database/connections')

module.exports = {
    
    async create(req, res, next) {
        try{
            const { nome, atores, ano, categoria } = req.body

            await knex('filme').insert({
                nome,
                atores,
                ano,
                categoria
            })

            return res.status(201).send
        } catch (error) {
            next(error)
        }

    },
    async update(req, res, next) {
        try{
            const {name} = req.body

            await knex ('users')
            .update()

        } catch (error) {
            next(error)
        }

    },
    async delete(req, res, next) {
        try{
            const { id } = req.parans

            await knex(filmes)
            .where({id})
            .del()

            return res.send()
        }catch (error) {
            next(error)
        }
        
    }

}
