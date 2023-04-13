'use strict'



module.exports = function (app) {
    var jsonku = require('./kontroler')
    
    app.route('/')
        .get(jsonku.index)
    app.route('/tampilData')
        .get(jsonku.tampilDataMahasiswa)
    app.route('/tampil/:id')
        .get(jsonku.tampilData_ID)
}