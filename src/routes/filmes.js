const express = require('express');
const router = express.Router();
const filme = require('../models');

//recuperar todos os registros
router.get('/', async (req, res) =>{
    try{ 
        const filmes =  await Filme.find({});
        res.json({ error:false, filmes})

    } catch (err) {
        res.json({error:true, mesagem: err.message});

    }
});

//pegar somente o registro com id
router.get('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const filme = await Filme.findById(id);
        res.json({ erro: false, filme})

    } catch (err) {
        res.json({error:true, mesagem: err.message});
    }

});

//criar um registro
router.post('/', async (req, res) =>{
    try {
        const filme = req.body;
        await new Filme(filme).save();
        res.json({ erro: false, filme: response });
    } catch (err) {
        res.json({ erro: true, message: erro.message })
    }

});

//atualizar somente o registro com id
router.put('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const novo_filme = req.body;
            const filmeAtualizado = await Filme.findByIdAndUpdate(id, novo_filme);
            res.json({ erro: false, filme})

    } catch (err) {
        res.json({error:true, mesagem: err.message});
    }

});

//pegar somente o registro com id
router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const deleted = await Filme.findByIdAndDelete(id);
        res.json({ erro: false})

    } catch (err) {
        res.json({error:true, mesagem: err.message});
    }

});

module.exports = router
