const express = require('express');
const router = express.Router();
const deliveriesCtrl = require('../../controllers/api/deliveries');

/* GET /api/deliveries */
router.get('/', deliveriesCtrl.index);
router.post('/', deliveriesCtrl.create);
router.get('/:id', deliveriesCtrl.show);
router.put('/:id', deliveriesCtrl.update);
router.delete('/:id', deliveriesCtrl.delete);

module.exports = router;