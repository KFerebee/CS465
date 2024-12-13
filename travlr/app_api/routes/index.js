// Import express and initialize the router
const express = require('express');
const router = express.Router();

// Import the trips controller
const tripsController = require('../controllers/trips');

// Define the route for the trips endpoint
router
    .route('/trips')  // Define a route for /trips
    .get(tripsController.tripsList)  // Handle GET requests with tripsList
    .post(tripsController.tripsAddTrip);  // Handle POST requests with tripsAddTrip

// Define a parameterized route for a specific trip based on tripCode
router
    .route('/trips/:tripCode')  // Define a route for /trips/:tripCode
    .get(tripsController.tripsFindByCode)
    .get(tripsController.tripsFindByCode);  // Handle GET requests with tripsFindByCode

// Export the router to be used in app.js or another main file
module.exports = router;

