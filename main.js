const express = require('express');
const app = express();
const database = require('./infra/crud');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

//
// PAGES
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

app.get('/agendar-servico', (req,res) => {
    res.sendFile(__dirname + '/view/agendar-servico.html');
});

app.get('/cadastrar-cliente', (req,res) => {
    res.sendFile(__dirname + '/view/cadastrar-cliente.html');
})

//
// SOURCES
//

app.get('/controller/clientes.controller.js', (req,res) => {
    res.sendFile(__dirname + '/controller/clientes.controller.js');
});

app.get('/controller/agenda.controller.js', (req,res) => {
    res.sendFile(__dirname + '/controller/agenda.controller.js');
});

app.get('/src/css', (req,res) => {
    res.sendFile(__dirname + '/view/css.css');
});

app.get('/src/masterfrio', (req,res) => {
    res.sendFile(__dirname + '/view/masterfrio.jpg');
});

app.get('/src/nav-icon', (req,res) => {
    res.sendFile(__dirname + '/view/nav-icon.png');
});

app.get('/src/fav-icon', (req,res) => {
    res.sendFile(__dirname + '/view/fav-icon.jpg');
});

//
// API
//

app.get('/clientes-lista', (req,res) => {
    database().select('*', 'tb_cliente')
    .then(resolve => {
        res.send(resolve);
    })
    .catch(reject => {
        res.send(reject);
    });
});

app.get('/clientes-lista/:id', (req,res) => {
    database().select('*','tb_cliente') 
    .then(resolve => {
        for(i in resolve) {
            if(req.params.id == resolve[i].id_cliente) {
                return resolve[i]
            }
        }
    })
    .then(resolve => {res.send(resolve)});
});

app.get('/servicos-lista', (req,res) => {
    database().selectServico().then(resolve =>{res.send(resolve)});
});

app.get('/servicos-lista/:id', (req,res) => {
    database().selectServico()
    .then(resolve => {
        for(i in resolve) {
            if(req.params.id == resolve[i].id_servico) {
                return resolve[i];
            }
        }
    })
    .then(resolve => {res.send(resolve)});
});

app.post('/servicos-lista', (req,res) => {
    database().insertServico(`${req.body.id_cliente}, "${req.body.endereco}", ${req.body.numero}, "${req.body.bairro}", "${req.body.servicos}", "${req.body.data}", ${req.body.valor}, ${req.body.desconto}, "${req.body. observacao}"`)
    console.log(req.body)
    res.redirect('/')
});

app.post('/clientes-lista', (req,res) => {

});

app.listen(80);