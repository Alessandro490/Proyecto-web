const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Proyecto_Web', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err));