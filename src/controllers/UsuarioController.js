const knex = require ('../database/connections')

module.exports = {
    async create(req, res) {
        const { nome, telefone, email, senha} = req.bory;

        const senha_crypted = AuthService.encryptPassword(senha)

        try {

            validation.validate(nome, telefone, email, senha)

            const usuario = new Usuario();
            usuario.setNome(nome);
            usuario.setTelefone(telefone);
            usuario.setEmail(email);
            usuario.setSenha(senha_crypted);


            return response.status(201).json({ usuario: usuarioAllInfo.usuario})


        } catch (error) {
            return response.status(500).json({ error })
        }

    }


}
