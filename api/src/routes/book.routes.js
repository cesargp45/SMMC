const { Router } = require('express');
const controller = require('../controllers/book')
const router = Router();

router.get('/get/books', async (req, res) => {
    controller.get(req, res);
});

router.post('/save/book', async (req, res) => {
    controller.save(req, res);
});

router.get('/book/clear', async (req, res) => {
    controller.clearCollection(req, res);
});

module.exports = router;