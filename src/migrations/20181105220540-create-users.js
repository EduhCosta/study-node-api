'use strict';

// Models
import Users from 'models/users';

export default ({
    up: () => {
        return Users.sync({ force: true });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
});