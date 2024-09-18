const mongoose = require('mongoose');

// Define the service schema
const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required']
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Price cannot be negative']
  }
});

// Export the model
module.exports = mongoose.model('Service', serviceSchema);
