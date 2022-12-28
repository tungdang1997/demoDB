const mysql = require('mysql');

class Connection {
     configToMysql = {
        host: '127.0.0.1',
        user: 'root',
        password:'123456',
        charset: 'utf8_general_ci',
        database: 'manager'
    }
    getConnection(){
        return mysql.createConnection(this.configToMysql)
    }
    connected(){
        this.getConnection().connect(err =>{
            if(err){
                console.log(err);
            }
            else{
                console.log('connection');
            }
        })
    }
}

module.exports = new Connection();

