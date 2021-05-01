const express = require('express');
const router = express.Router();
const deliveriesCtrl = require('../../controllers/api/deliveries');

/* GET /api/deliveries */
router.get('/', deliveriesCtrl.index);
router.post('/', deliveriesCtrl.create);


module.exports = router;