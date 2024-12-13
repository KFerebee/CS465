const express = require('express');
const router = express.Router();

//This is where we import the controller we will route
const tripsController = require('../controllers/trips');

// Define the route for the trips endpoint
router
    .route('/trips')  // Ensure it starts with '/'
    .get(tripsController.tripsList);  // GET Method routes to tripsList

// GET Method routes tripsFindByCode - requires parameters 
router
    .route('/trips/:tripCode')  // Ensure it starts with '/'
    .get(tripsController.tripsFindByCode);  // GET Method routes to tripsList

module.exports = router;