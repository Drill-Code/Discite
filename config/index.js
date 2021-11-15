exports.DATABASE_URL = `${process.env.DATABASE_URL}/${process.env.DATABASE}` || 'mongodb://127.0.0.1:27017';
