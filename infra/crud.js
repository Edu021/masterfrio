const mysql = require('mysql2');
const con = mysql.createConnection({
    host: '192.168.1.8',
    user: 'edu',
    password: 'Paimae00_',
    database: 'masterfrio'
});

function db (){
    return{
        select: function(campos, tabela) {
                const promise = new Promise((resolve,reject) => {
                    con.connect();
                    con.query(`select ${campos} from ${tabela}`, (err, rows, result) => {
                        if(err){
                            reject(new Error(err));
                        } else {
                            resolve(JSON.parse(JSON.stringify(rows)));
                        }
                });
            });
            con.end;
            return promise;
        },
        insertCliente: function(campo) {
            con.connect();
            con.query(`insert into tb_cliente (nm_cliente,nm_rua,nr_casa,nm_bairro,tl_telefone,email) values (${campo});`,(err) => {
                if(err) console.error('Erro: ' + err);
            });
            con.end();
        },
        insertServico: function(campo) {
            con.connect();
            con.query(`insert into tb_servicos (id_cliente,nm_rua,nr_casa,nm_bairro,tipo_servico,dt_servico,vl_pago,vl_desconto,observacao) values (${campo})`, (err) => {
                if(err) console.error('Erro: ' + err);
            });
            con.end();
        },
        
        update: function() {

        },
        delete: function() {

        }
    }
}

module.exports = db;