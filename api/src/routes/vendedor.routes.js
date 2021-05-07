const { Router } = require('express');
const controller = require('../controllers/vendedor')
const router = Router();

router.get('/get/vendedores', async (req, res) => {
    controller.get(req, res);
});

router.post('/save/vendedor', async (req, res) => {
    controller.save(req, res);
});

router.get('/vendedor/clear', async (req, res) => {
    controller.clearCollection(req, res);
});

module.exports = router;