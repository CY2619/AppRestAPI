'use strict'

const { json } = require('body-parser')

module.exports = function (app) {
    var jsonku = require('./kontroler')
    
    app.route('/')
        .get(jsonku.index)


}