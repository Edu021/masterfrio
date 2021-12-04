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
        insert: function() {
            
        },
        update: function() {

        },
        delete: function() {

        }
    }
}

module.exports = db;