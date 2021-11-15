const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');

const connectDb = async () => {
  await mongoose.connect(DATABASE_URL, { useNewUrlParser: true }).then((db) => {
    const client = db.connection;
    client.once('open', () => {
      console.log('Database connection successful ->', DATABASE_URL);
    });

    client.on('error', (err) => {
      console.log('Connection Error: ', err);
    });
  });
};

module.exports = {
  connectDb,
};
