const Delivery = require('../../models/delivery');

async function index(req, res) {
    const deliveries = await Delivery.find({});
    res.status(200).json(deliveries);
}

async function create(req, res) {
    const delivery = await Delivery.create(req.body);
    res.status(201).json(delivery);
}

module.exports = {
index,
create
};

