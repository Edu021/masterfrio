const express = require('express');
const app = express();
const database = require('./infra/crud')

//
// páginas
//

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/inicio', (req,res) => {
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/agenda', (req,res) => {
    res.sendFile(__dirname + '/view/agenda.html');
});

app.get('/clientes', (req,res) => {
    res.sendFile(__dirname + '/view/clientes.html');
});

app.get('/add', (req,res) => {
    res.sendFile(__dirname + '/view/registrar.html');
});

//
// api 
//

app.get('/clientes-lista', (req,res) => {
    database().select('*', 'tb_cliente')
    .then(resolve => {
        res.send(resolve);
    })
    .catch(reject => {
        res.send(reject);
    });
})

app.listen(80);