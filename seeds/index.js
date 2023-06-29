const seedUsers = require('./userSeeds');
const seedRooms = require('./roomSeeds');
const seedMessages = require('./messagesSeeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // await seedRooms();
  // console.log('\n----- ROOMS SEEDED -----\n');

  // await seedMessages();
  // console.log('\n----- MESSAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();
