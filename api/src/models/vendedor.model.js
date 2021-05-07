const { Schema, model } = require('mongoose');

const VendedorSchema = new Schema({
    id: Number,
    dpi: String,
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String
});

module.exports = model('vendedor', VendedorSchema);