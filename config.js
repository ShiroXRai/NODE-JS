const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'temancoding'
});

con.connect(function(error) {
    if(error) throw error;
    console.log(('koneksi berhasil!'));
});

module.exports = con;