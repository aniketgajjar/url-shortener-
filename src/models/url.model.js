const mongoose = require('mongoose');

// const clickSchema = new mongoose.Schema ({
//     ip : {
//         type: String, 
//         default: 'Unknown'
//     }, 
//     userAgent : {
//         type: String, 
//         default: 'Unknown'
//     }, 
//     referrer : {
//         type : String, 
//         default: 'Direct'
//     },
// }, 
//     { timestamps : true }
// );


const urlSchema = new mongoose.Schema = ({
    originalUrl: { 
        type: String, 
        required: true, 
        trim : true
    },
    shortCode: { 
        type: String, 
        required: true, 
        unique: true, 
        trim : true
    },
    clicks: [clickSchema], 
    totalClicks: { 
        type: Number, 
        default: 0 
    },
},
    { timestamps : true }
);

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;