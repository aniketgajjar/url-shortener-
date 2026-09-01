const crypto = require ('crypto');
const Url = require ('../models/url.model');

const createShortUrl = async (req, res) => {
    
    try {
        const { originalUrl } = req.body;

        if ( !originalUrl ) {
            return res.status(400).json({
                success : false,
                message : 'original URL is Required!'
            });
        };

        // Generate short code !

        const shortCode = crypto.randomBytes(4).toString("hex");

        // Create URL !

        const url = await Url.create({
            originalUrl, 
            shortCode
        });

        const shortUrl = `${process.env.BASE_URL}/${url.shortCode}`;

        return res.status(201).json({
            success : true, 
            message : 'Short URL Generate SuccessFully!', 
            data : {
                originalUrl : originalUrl, 
                shortCode : shortCode, 
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

        return res.redirect( url.originalUrl );


    } catch (err) {
        console.log(`Redirect Error : ${err.message}`);

        return res.status(500).json({
            success : false, 
            message : 'Internal Server Error!'
        });
    };
};

module.exports = {
    createShortUrl, 
    redirectUrl
};