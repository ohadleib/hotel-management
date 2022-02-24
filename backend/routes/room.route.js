let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// BedRoom Model
let roomSchema = require('../models/Room');

// CREATE BedRoom
router.route('/create-room').post((req, res, next) => {
  roomSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ available BedRooms
router.route('/available').get((req, res) => {
  roomSchema.find({noOfGuests: 0},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// READ BedRooms
router.route('/').get((req, res) => {
  roomSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// READ couples bedrooms
router.route('/couples').get((req, res) => {
  roomSchema.find({noOfGuests: 2},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single BedRoom
router.route('/edit-bedroom/:id').get((req, res) => {
  roomSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update BedRoom
router.route('/update-bedroom/:id').put((req, res, next) => {
  roomSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('BedRoom updated successfully !')
    }
  })
})

// Delete BedRoom
router.route('/delete-bedroom/:id').delete((req, res, next) => {
  roomSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;