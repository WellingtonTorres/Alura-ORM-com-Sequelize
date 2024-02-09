class Controller{
    constructor(nomeDoServico){
        this.entidadeService = nomeDoServico;
    }

    async pegaTodos(req, res){
        try{
            const todosOsRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(todosOsRegistros);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    async pegaUmPorId(req, res){
        const { id } = req.params;
        try{
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(id);
            return res.status(200).json(umRegistro);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    async criaNovoRegistro(req, res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await this.entidadeService.criaNovoRegistro(novoRegistro);
            return res.status(200).json(novoRegistroCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            //isUpdated
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({ mensagem: 'registro não foi atualizado' });
            }
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (erro) {
            // erro
        }
    }



}

module.exports = Controller;