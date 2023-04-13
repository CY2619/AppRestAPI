'use strict';

var response = require('./res')
var connection = require('./koneksi')

exports.index = function (req, res) {
    response.ok("Aplikasi REST API sudah berjalan", res)
}

//menampilkan semua data mahasiswa 
exports.tampilDataMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            connection.log(error);
        }
        else { 
            response.ok(rows,res)
        }
    })
}

// meanmpilkan data mahasiswa berdasarkan id 
exports.tampilData_ID = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE jurusan = "Teknik Mesin" ', function (error, rows, fileds) {
        if (error) {
            connection.log(error)
        }
        else {
            response.ok(rows, res)
        }
    })
}