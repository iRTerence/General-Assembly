const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sei:12345@sei.cbg48.azure.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, 
    useCreateIndex: true,
   }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});