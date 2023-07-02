// This seeds the database with data from Mockaroo.  Mockaroo exports JSON so it was really slick.  It creates 10 users, 5 rooms and 50 messages.  The associations between the files were randomly generated.
const seedUsers = require('./userSeeds');
const seedRooms = require('./roomSeeds');
const seedMessages = require('./messagesSeeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedRooms();
  console.log('\n----- ROOMS SEEDED -----\n');

  await seedMessages();
  console.log('\n----- MESSAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();
