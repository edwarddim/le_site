var mongoose = require('mongoose');

var FrontPictureSchema = mongoose.Schema({
    filePath: {
        type: String,
        required: true,
        trim: true
    },
    fileName: String,
    imageTitle: {
        type: String,
        default: ''
    },
    imageAlt: {
        type: String,
        default: ''
    },
    fileType: String,
    fileSize: String,
    fileDestination: String
});

const FrontMedia = module.exports = mongoose.model('frontUploads', FrontPictureSchema)

module.exports.addNewFile = (newFile, callback)=>{
    newFile.save(callback)
}