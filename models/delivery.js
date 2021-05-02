const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    recipName: { type: String, required: true },
    itemQty: { type: Number, required: true },
    weight: { type: Number, required: true, default: 3 },
    location: { type: String, required: true },
    status: { type: Boolean, default: false },
    trackNum: { type: String,   default: function () { return '#' + Math.round((Math.random()
     * 36 ** 12)).toString(36).toUpperCase(); } }
    }, {
    timestamps: true 
 });

module.exports = mongoose.model('Delivery', deliverySchema);