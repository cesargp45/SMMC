const { Schema, model } = require('mongoose');

const VentaSchema = new Schema({
    id : Number,
    vendedor: String,
    fecha: String,
    producto: String   
});

module.exports = model('venta', VentaSchema);