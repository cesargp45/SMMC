const Venta = require('../models/venta.model');

id = 0;
module.exports = { 
    async save(req, res){
        const { vendedor, producto } = req.body
        const f = new Date()
        const fecha = f.toLocaleDateString()
        const v = { id, vendedor, fecha , producto }
        const venta = new Venta(v);
        await venta.save();
        id ++
        res.send({ status: 1, msg: 'save' });
    },
    async get(req, res){
        const ventas = await Venta.find({})
        res.send({ status: 1, data: ventas })
    },
    async clearCollection(req, res){
        const status = await Venta.remove({});
        res.send({ status : status.ok });
    }    
 };