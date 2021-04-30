const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    recipientName: { type: String, required: true },
    weight: { type: Number, required: true },
    location: { type: String, required: true },
    deliveryStatus: { type: Boolean, default: false },
    trackingNumber: {
        type: String,  
        default: function () {
        return '#' + Math.round((Math.random() * 36 ** 12)).toString(36).toUpperCase(); 
        }
    }, 
    timestamps: true 
 });

module.exports = mongoose.model('Delivery', deliverySchema);