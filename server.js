const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();


const http = require('http').Server(app);
const io = require('socket.io')(http);
const {Messages} = require('./models/');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;
//use .env because we don't know what port the server will use

const sess = {
  secret: 'Super secret secret', //in industry you will use uuid to generate a random key
  cookie: {},// use max and min for when user logs out?
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('message', (message) => {
    console.log('Received message:', message);
    Messages.create({ message_text: message})
      .then((message) => {
        console.log('Message stored in the database:', message);
        let newMessage = message.get({ plain: true })
        // io.emit('message', newMessage.message_text); // Broadcast the message to all connected clients
        io.emit('message', 'messageAdded')
      })
      .catch((error) => {
        console.error('Error storing message in the database:', error);
      });
  });
});




sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`));
});