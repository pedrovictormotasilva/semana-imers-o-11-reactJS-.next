const Sequelize = require('sequelize');

const sequelize = new Sequelize('trabalho', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão feita con sucesso!");
}).catch(() => {
    console.log("Erro: Conexão não realizado com sucesso!");
});

module.exports = sequelize;