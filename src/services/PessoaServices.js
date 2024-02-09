const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor(){
        super('Pessoa');
    }

    // async pegaTodosOsRegistros(where = {}){
    //     return await dataSource[this.model].findAll({where: {...where}});
    // }
}

module.exports = PessoaServices;