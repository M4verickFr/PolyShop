const express = require('express');

//to access form data
const bodyParser = require('body-parser');

//to access the database stored in MongoDB
const mongoose = require('mongoose');

//access the environment file
require('dotenv').load();

const app = express();

const morgan = require('morgan');

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  transports: [

    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));

//connects to the MongoDB database
//database = 'mongodb://localhost:27017/m1';

mongoose.connect(process.env.database, (err)=> {

  if (err) {

    logger.error(err);

  }
  else {

    logger.info("Connected to the database");

  }

});

//used to fetch the data from forms on HTTP POST
app.use(bodyParser.urlencoded({

  extended : true

}));

app.use(bodyParser.json());

app.use(morgan('combined'));

const CoreRoutes = require('./core/routes');
app.use(CoreRoutes);

const ToDoRoutes = require('./todo/routes');
app.use(ToDoRoutes);

const APIRoutes = require('./api/routes');
app.use(APIRoutes);

const UnknownRoutes = require('./core/middleware/errorhandlers');

app.use(UnknownRoutes.notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
logger.info('App server running on port ' + PORT);
