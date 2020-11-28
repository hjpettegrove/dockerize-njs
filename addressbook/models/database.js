const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOSTNAME,
        port: parseInt(process.env.DB_PORT),
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: parseInt(process.env.DB_POOL_MAX),
            min: parseInt(process.env.DB_POOL_MIN) || 0,
            acquire: parseInt(process.env.DB_POOL_ACQUIRE),
            idle: parseInt(process.env.DB_POOL_IDLE)
        }
    }
);


const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = {
    sequelize: sequelize,
    Person: Person
}