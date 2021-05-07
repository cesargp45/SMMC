const { Router } = require('express');
const controller = require('../controllers/venta')
const router = Router();

router.get('/get/ventas', async (req, res) => {
    controller.get(req, res);
});

router.post('/save/venta', async (req, res) => {
    controller.save(req, res);
});

router.get('/venta/clear', async (req, res) => {
    controller.clearCollection(req, res);
});

module.exports = router;