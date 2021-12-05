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

app.get('/agendar-servico', (req,res) => {
    res.sendFile(__dirname + '/view/agendar-servico.html');
});

app.get('/cadastrar-cliente', (req,res) => {
    res.sendFile(__dirname + '/view/cadastrar-cliente.html');
})


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

app.get('/insert-teste', (req,res) => {
    // database().insertCliente("'Eduardo','Rua Apus','123','São Marcos','987485554','eduardo@gmail.com'");
    database().insertServico("'7','Rua Caju','201','Santo Antonio','Instalação - Split','2021-12-09 14:30:00','450','0','askmldhkj'")
});

app.listen(80);