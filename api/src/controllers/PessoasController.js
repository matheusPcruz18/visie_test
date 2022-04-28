const Pessoa = require('../models/Pessoa');

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    console.log(req.params);

    const { search } = req.params;

    try {
      const pessoas = await Pessoa.findAll({
        attributes: ['id_pessoa', 'nome', 'data_admissao'],
        where: {
          nome: { [Op.like]: `%${search !== undefined ? search : ''}%` },
        },
      });

      return res.status(200).json({ pessoas: pessoas })
    } catch (error) {
      console.log(error)
    }
  },

  async getPersonById(req, res) {
    console.log(req.params);
    const messages = {
      success: 'Usuário listado com sucesso!',
      error: 'Não foi possível listar este usuário. Tente novamente mais tarde.',
    };

    const { person_id } = req.params;

    try {
      const person = await Pessoa.findOne({ 
        where: { id_pessoa: person_id } 
      });

      return res.status(200).json({ person });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: messages.error });
    }
  },

  async updatePersonById(req, res) {
    const messages = {
      success: 'Usuário editado com sucesso!',
      error: 'Não foi possível editar este usuário. Tente novamente mais tarde.',
    };

    const { person_id } = req.params;

    const {
      nome,
      rg,
      cpf,
      data_nasc,
      data_admissao
    } = req.body.data;

    const nasc_splited = data_nasc.split('/');
    const nasc_joined = nasc_splited[2] + '-' + nasc_splited[1] + '-' + nasc_splited[0];

    const admission_splited = data_admissao.split('/');
    const admission_joined = admission_splited[2] + '-' + admission_splited[1] + '-' + admission_splited[0];
    
    try {
      await Pessoa.update(
        {
          nome: nome,
          rg: rg,
          cpf: cpf,
          data_nascimento: nasc_joined,
          data_admissao: admission_joined,
        },
        { where: { id_pessoa: person_id } }
      )

      return res.status(200).json({ message: messages.success });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: messages.error });
    }
  },

  async deletePerson(req, res) {
    const messages = {
      success: 'Usuário excluído com sucesso!',
      error: 'Não foi possível apagar este usuário. Tente novamente mais tarde.',
    };

    const { person_id } = req.params;

    try {
      await Pessoa.truncate(
        { where: { id_pessoa: person_id } }
      )

      return res.status(200).json({ message: messages.success });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: messages.error });
    }
  },

  async createPerson(req, res) {
    const messages = {
      success: 'Usuário criado com sucesso!',
      error: 'Não foi possível criar este usuário. Tente novamente mais tarde.',
    };

    const {
      nome,
      rg,
      cpf,
      data_nasc,
      data_admissao
    } = req.body.data;

    try {

      const nasc_splited = data_nasc.split('/'); 18/05/1999
      const nasc_joined = nasc_splited[2] + '-' + nasc_splited[1] + '-' + nasc_splited[0];

      const admission_splited = data_admissao.split('/');
      const admission_joined = admission_splited[2] + '-' + admission_splited[1] + '-' + admission_splited[0];

      console.log(nome,
        rg,
        cpf,
        nasc_joined,
        admission_joined)

      await Pessoa.create({
        nome,
        rg,
        cpf,
        data_nascimento: new Date(nasc_joined),
        data_admissao: new Date(admission_joined),
      })

      return res.status(200).json({ message: messages.success });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: messages.error });
    }
  }
}
