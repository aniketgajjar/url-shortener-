const crypto = require ('crypto');
const Url = require ('../models/url.model');
const { getUrlAnalytics } = require('./analytics.controller');

const createShortUrl = async (req, res) => {
    
    try {
        const { originalUrl } = req.body;

        // Check if URL already exists
        const existingUrl = await Url.findOne({ originalUrl });

        if (existingUrl) {
            const shortUrl = `${process.env.BASE_URL}/${existingUrl.shortCode}`;

            return res.status(200).json({
                success: true,
                message: "Short URL already exists!",
                data: {
                    originalUrl: existingUrl.originalUrl,
                    shortCode: existingUrl.shortCode,
                    shortUrl
                }
            });
        }

        // Generate unique short code
        let shortCode;
        let isCodeExists = true;

        while (isCodeExists) {
            shortCode = crypto.randomBytes(4).toString("hex");

            const existingCode = await Url.findOne({ shortCode });

            if (!existingCode) {
                isCodeExists = false;
            }
        }

        // Create URL
        const url = await Url.create({
            originalUrl,
            shortCode
        });

        const shortUrl = `${process.env.BASE_URL}/${url.shortCode}`;

        return res.status(201).json({
            success: true,
            message: "Short URL generated successfully!",
            data: {
                originalUrl: url.originalUrl,
                shortCode: url.shortCode,
                shortUrl
            }
        });
    } catch (err) {
        console.log(`URL Error : ${err.message}`);

        return res.status(500).json({
            success : false, 
            message : 'Internal Server Error!'
        });
    };

}; 

const redirectUrl = async (req, res) => {
    
    try {

        const { shortCode } = req.params;

        const url = await Url.findOne({ shortCode });

        if ( !url) {
            return res.status(400).json({
                success : false, 
                message  : 'Short URL is NOT Found!'
            });
        };

        const clickData = {
            ip: req.ip || "Unknown",
            userAgent: req.get("User-Agent") || "Unknown",
            referrer: req.get("Referer") || "Direct"
        };

        await Url.findByIdAndUpdate(
            url._id,
            {
                // add click record
                $push: {
                    clicks: clickData
                },
                // increase counter
                $inc: {
                    totalClicks: 1
                }
            }
        );

        return res.redirect( url.originalUrl );


    } catch (err) {
        console.log(`Redirect Error : ${err.message}`);

        return res.status(500).json({
            success : false, 
            message : 'Internal Server Error!'
        });
    };
};

const deleteShortUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const url = await Url.findOneAndDelete({ shortCode });

        if (!url) {
            return res.status(404).json({
                success: false,
                message: "Short URL not found!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Short URL deleted successfully!",
            data: {
                shortCode: url.shortCode
            }
        });

    } catch (err) {
        console.log(`Delete URL Error: ${err.message}`);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error!"
        });
    }
};


module.exports = {
    createShortUrl, 
    redirectUrl,
    deleteShortUrl
};