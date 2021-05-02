const Delivery = require('../../models/delivery');

module.exports = {
index,
create,
show,
update,
delete: deleteOne,
};

async function index(req, res) {
    const deliveries = await Delivery.find({});
    res.status(200).json(deliveries);
}

async function create(req, res) {
    const delivery = await Delivery.create(req.body);
    res.status(201).json(delivery);
}

async function show(req, res) {
    const delivery = await Delivery.findById(req.params.id);
    res.status(200).json(delivery);
}

async function update(req, res) {
    const updatedDelivery = await Delivery.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedDelivery);
}

async function deleteOne(req, res) {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedDelivery);
}