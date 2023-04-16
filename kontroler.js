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


// Menambah data ke database
exports.tambahMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    
    connection.query('INSERT INTO mahasiswa  (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data kedalam database!", res)
            }
        });

};