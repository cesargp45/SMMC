const express = require('express');
const app = new express();
const cors  = require('cors');
require('dotenv').config();

app.use(express.json({ extended: true }))
app.use(cors())

require('../src/database/mongo');

const bookRoutes = require('../src/routes/book.routes');
const vendedorRoutes = require('../src/routes/vendedor.routes');
const ventaRoutes = require('../src/routes/venta.routes');

app.use(bookRoutes);
app.use(vendedorRoutes);
app.use(ventaRoutes);

app.listen(process.env.port || 8080);
console.log('Server on port:', 8080)