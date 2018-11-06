'use strict';

const database = 'learning_node';

import Sequelize from 'sequelize';

const sequelize = new Sequelize(database, 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected with "${database}"`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;