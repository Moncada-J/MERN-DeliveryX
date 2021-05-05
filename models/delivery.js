const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema(
  {
    recipName: { type: String, required: true },
    itemQty: { type: Number, required: true },
    weight: { type: Number, required: true, default: 3 },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    status: { type: String, default: "Shipped",
      enum: [
        "Shipped",
        "In Route",
        "Delivered to Resident",
        "Left on Doorstep",
        "Unable to Deliver",
      ]},
    trackNum: {
      type: String,
      default: function () {
        return (
          "#" +
          Math.round(Math.random() * 36 ** 12)
            .toString(36)
            .toUpperCase()
        );
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Delivery', deliverySchema);