const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'masterfrio.mysql.uhserver.com',
    user: 'root7894561',
    password: 'Qnf3gLd38J7ruM@5',
    database: 'masterfrio',
    port: 3306
});
con.connect();
function db (){
    return{
        select: function(campos, tabela) {
                const promise = new Promise((resolve,reject) => {
                    
                    con.query(`select ${campos} from ${tabela}`, (err, rows, result) => {
                        if(err){
                            reject(new Error(err));
                        } else {
                            resolve(JSON.parse(JSON.stringify(rows)));
                        }
                });
            });
            return promise;
        },
        selectServico: function() {
            const promise = new Promise((resolve, reject) => {
				
                con.query(`
                SELECT s.id_servico,
                c.id_cliente,
                c.nm_cliente,
                s.nm_rua,
                s.nr_casa,
                s.nm_bairro,
                s.tipo_servico,
                DATE_FORMAT(s.dt_servico, "%d/%m/%Y às %H:%i") as dt_servico,
                s.vl_pago,
                s.vl_desconto,
                s.observacao
                FROM masterfrio.tb_servicos as s, masterfrio.tb_cliente as c WHERE c.id_cliente = s.id_cliente order by dt_servico;`, (err,rows,result) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(JSON.parse(JSON.stringify(rows)));
                }
            });
        })
        
        return promise;
        },
        insertCliente: function(campo) {
            
            con.query(`insert into tb_cliente (nm_cliente,nm_rua,nr_casa,nm_bairro,tl_telefone,email) values (${campo});`,(err) => {
                if(err) console.error('Insert Cliente: ' + err);
            });
            
        },
        insertServico: function(campo) {
            
            con.query(`insert into tb_servicos (id_cliente,nm_rua,nr_casa,nm_bairro,tipo_servico,dt_servico,vl_pago,vl_desconto,observacao) values (${campo})`, (err) => {
                if(err) console.error('Insert Servico: ' + err);
            });
            
        },
        updateServico: function(id_servico,rua,numero,bairro,categoria,dt_servico,preco,observacao) {
            
            con.query(`
            UPDATE tb_servicos SET 
            nm_rua = "${rua}",
            nr_casa = "${numero}", 
            nm_bairro = "${bairro}", 
            tipo_servico = "${categoria}",
            dt_servico = "${dt_servico}",
            vl_pago = "${preco}",
            observacao = "${observacao}"

            WHERE id_servico = ${id_servico};`, err => {
                if(err) console.log(`Update ` + err)
            })
        },
        delete: function(tabela, condicao) {
            con.query(`DELETE FROM ${tabela} WHERE ${condicao};`, err => {
                if(err) console.log(`Delete ` + err)
            })
        }
    }
}

module.exports = db;