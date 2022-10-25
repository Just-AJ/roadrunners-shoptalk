// imports 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// accessing PORT and express 
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// setup express session and connects session to database 
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
app.use(session(sess));

// import helper functions 
const helpers = require('./utils/helpers');

// handlebars engine and setup
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// adding middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(require('./controllers/'));


// turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening to Around the World!'));
});