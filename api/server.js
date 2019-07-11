const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

//Exportamos el modelo de rutas
const businessRoute = require('./routes/business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Conexion a la base de datos satisfactoria')},
    err => {console.log('No se puede conectar a la base de datos '+ err)}
);

//para produccion, maybe
//app.use(express.static(path.join(__dirname,'../dist/angular7crud')));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/business', businessRoute);

app.use(express.static('./dist/angularcrud'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/angularcrud/index.html'));
});
/* app.use('/',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/angular7crud','index.html'))
}); */

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
    console.log('Listen on port '+ port);
});