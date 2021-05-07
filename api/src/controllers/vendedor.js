const Vendedor = require('../models/vendedor.model');

id = 0;
module.exports = { 
    async save(req, res){
        const { nombre, dpi, apellido, direccion, telefono } = req.body;   
        const v = { id, dpi, nombre,  apellido, direccion, telefono } 
        const vendedor = new Vendedor(v);
        await vendedor.save();
        id ++
        res.send({ status: 1, msg: 'save' });
    },
    async get(req, res){
        const vendedores = await Vendedor.find({})
        res.send({ status: 1, data: vendedores })
    },
    async clearCollection(req, res){
        const status = await Vendedor.remove({});
        res.send({ status : status.ok });
    }    
 };