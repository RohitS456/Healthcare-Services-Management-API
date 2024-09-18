const express = require('express');
const serviceController = require('../controllers/serviceController');
const router = express.Router();

// Route to add a new service
router.post('/', serviceController.addService);

// Route to get all services
router.get('/', serviceController.getAllServices);

// Route to update a service
router.put('/:id', serviceController.updateService);

// Route to delete a service
router.delete('/:id', serviceController.deleteService);

module.exports = router;
