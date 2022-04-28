const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {
  static init(connection) {
    super.init(
      {
        id_pessoa: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        nome: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
        data_admissao: DataTypes.DATEONLY,
        funcao: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'pessoas',
        paranoid: true,
        name: {
          singular: 'pessoa',
          plural: 'pessoas',
        },
      },
    );
    return this;
  }
  static associate() {
  }
}

module.exports = Pessoa;