const express = require('express');
const app = express();
const path = require('path');
require('./database');

app.set('view engine' , '.html');

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.use(require('./routes/login'));

app.listen(app.get('port') , ()=> {
    console.log('server on port', app.get('port'));
} )