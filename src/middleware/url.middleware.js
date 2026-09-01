const validateUrl = async (req, res, next) => {
    const { originalUrl } = req.body;

    if ( !originalUrl) {
        return res.status(400).json({
            success : false, 
            message : 'Original URL is Required!'
        });
    };

    try {
        
        const url = new URL(originalUrl);

        if ( !['http:' , 'https:'].includes(url.protocol)) {
            return res.status(400).json({
                success : false, 
                message : 'Only HTTP and HTTPS Url Allowed!'
            });
        };

        next();

    } catch (err) {
        console.log(`Validation Error : ${err.message}`);

        return res.status(400).json({
            success: false,
            message: "Please provide a valid URL!"
        });
    };
};

module.exports = {
    validateUrl
}