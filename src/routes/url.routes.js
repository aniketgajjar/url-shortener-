const express = require('express');
const {
    createShortUrl,
    redirectUrl
} = require('../controllers/url.controller');

const router = express.Router();

// API Router
router.post('/', createShortUrl);

// Public URL
// router.get('/:shortCode', redirectUrl);

module.exports = router;