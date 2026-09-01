const express = require('express');
const {
    createShortUrl,
} = require('../controllers/url.controller');

const { getUrlAnalytics } = require('../controllers/analytics.controller')

const router = express.Router();

// API Router
router.post('/', createShortUrl);

// URL Analytics
router.get("/:shortCode/analytics", getUrlAnalytics);

module.exports = router;