const Url = require ('../models/url.model');

const getUrlAnalytics = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const url = await Url.findOne({ shortCode });

        if (!url) {
            return res.status(404).json({
                success: false,
                message: "Short URL not found!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "URL analytics fetched successfully!",
            data: {
                originalUrl: url.originalUrl,
                shortCode: url.shortCode,
                totalClicks: url.totalClicks,
                clicks: url.clicks
            }
        });

    } catch (err) {
        console.log(`Analytics Error: ${err.message}`);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error!"
        });
    }
};


module.exports = {
    getUrlAnalytics
}