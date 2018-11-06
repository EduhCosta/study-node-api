'use strict';

import * as Sequelize from 'sequelize';
// Connections
import sequelize from 'config/connectionDatabase';

const User = sequelize.define('Users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export const ShowUser = sequelize.define('Users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
    unique: true
  }
});

export default User;
