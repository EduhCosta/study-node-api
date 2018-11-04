'use strict';

// Database
// import mysql from 'mysql';

const database = 'learning_node';

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: 8889,
//     database: database
// }); 

// connection.connect((err) => {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log(`Connected with "${database}" as id ${connection.threadId}`);
// });

// export default connection;

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