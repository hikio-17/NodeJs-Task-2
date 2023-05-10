const express = require('express');
const {
  getBiodata,
  postBiodata,
  getBiodataView,
  postBiodataView,
} = require('../controllers/biodata.controller');

const router = express.Router();

router.get('/biodata', getBiodata);
router.post('/biodata', postBiodata);

// view data by ejs
router.get('/views/biodata', getBiodataView);
router.post('/views/biodata', postBiodataView);

module.exports = router;
