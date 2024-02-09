const dataSource  = require('../models');

class Services {
    constructor(nomeDoModelo){
        this.model = nomeDoModelo;
    }

    async pegaTodosOsRegistros(){
        try{
            return await dataSource[this.model].findAll();
        }catch(error){
            console.log(error);
        }
    }

    // async pegaUmRegistroPorId(id){
    //     try{
    //         return await dataSource[this.model].findOne({where: {id: Number(id)}});
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    // async criaNovoRegistro(dados){
    //     try{
    //         return await dataSource[this.model].create(dados);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    async atualizaRegistro(dadosAtualizados, id){
        const ListadeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados,
            {where: 
                {
                    id: id
                }
            });
        if (ListadeRegistrosAtualizados[0] === 0) {
            return false;
        }

        return true;

        // try{
        //     await dataSource[this.model].update(dadosAtualizados, 
        //         {where: 
        //             {
        //                 id: Number(id)
        //             }
        //         });
        //     return true;
        // }catch(error){
        //     console.log(error);
        // }
    }
}

module.exports = Services;