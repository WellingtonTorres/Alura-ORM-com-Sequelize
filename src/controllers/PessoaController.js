const Controller = require('./Controller.js');
const PessoaServices = require('../services/pessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
}

module.exports = PessoaController;