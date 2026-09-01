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


module.exports = {
    createShortUrl
};