'use strict';

// Utils
import bcrypt from 'bcrypt';

export default ({
    up: (queryInterface, Sequelize) => {
        const commonPassword = bcrypt.hashSync('Secret123', 10);
        const now = Sequelize.literal('NOW()');
        return queryInterface.bulkInsert('Users', [{
            name: 'Eduardo Costa',
            email: 'eduhcosta@live.com',
            nickName: 'EduhCosta',
            team: 'SOLO',
            cpf: 12312312312,
            password: commonPassword,
            createdAt: now,
            updatedAt: now
        },{
            name: 'Swane Moares',
            email: 'swane.mo@gmail.com',
            nickName: 'Sw',
            team: 'SOLO',
            cpf: 32132132132,
            password: commonPassword,
            createdAt: now,
            updatedAt: now
        },{
            name: 'Andriele Ferreira',
            email: 'andriele.fe@gmail.com',
            nickName: 'Adri',
            team: 'SOLO',
            cpf: 32145612365,
            password: commonPassword,
            createdAt: now,
            updatedAt: now
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
});