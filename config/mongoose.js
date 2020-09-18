// requiring the library
const mongoose = require('mongoose');
//connecting to the mongogb database
mongoose.connect('mongodb://localhost/contacts_list_db');
// connection gives access to the db
//acquire connection and check if successfull
const db = mongoose.connection;
//error handling
db.on('error', console.error.bind(console, 'error connecting to db'));
//if no error, once connection is open for me to interact with db
db.once('open', function() {
    console.log("Successfully connected to the db");
});