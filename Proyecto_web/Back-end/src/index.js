const express = require('express');
const app = express();
const path = require('path');
require('./database');


app.set('port', process.env.PORT || 3000);

app.use(require('./routes/longin'));

app.listen(app.get('port') , ()=> {
    console.log('server on port', app.get('port'));
} )