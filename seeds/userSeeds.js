const { User } = require('../models');

const userData = [
    { "username": "mquenby0", "email": "gdrynan0@cocolog-nifty.com", "password": "12345678" },
    { "username": "espalton1", "email": "hslyman1@ed.gov", "password": "12345678" },
    { "username": "jmaclleese2", "email": "nmacswayde2@1688.com", "password": "12345678" },
    { "username": "imitton3", "email": "bscholl3@nbcnews.com", "password": "12345678" },
    { "username": "jlilion4", "email": "acummine4@twitter.com", "password": "12345678" },
    { "username": "jboreham5", "email": "mchart5@tinyurl.com", "password": "12345678y" },
    { "username": "lquiney6", "email": "nrawlyns6@sina.com.cn", "password": "12345678" },
    { "username": "pshuttlewood7", "email": "kbowskill7@hud.gov", "password": "12345678" },
    { "username": "solagene8", "email": "tgrumbridge8@cnbc.com", "password": "12345678" },
    { "username": "tbenedick9", "email": "baylward9@virginia.edu", "password": "12345678" }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;