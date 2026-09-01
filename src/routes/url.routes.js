const express = require('express');
const {
    createShortUrl,
} = require('../controllers/url.controller');
const { getUrlAnalytics } = require('../controllers/analytics.controller');
const { validateUrl } = require('../middleware/url.middleware');

const router = express.Router();

// API Router
router.post('/',validateUrl, createShortUrl);

// URL Analytics
router.get("/:shortCode/analytics", getUrlAnalytics);

module.exports = router;