// utils/cloudinary.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const uploadImage = async (filePathOrBase64) => {
    try {
        const result = await cloudinary.uploader.upload(filePathOrBase64, {
            folder: 'employees'
        });
        return result.secure_url;
    } catch (err) {
        console.error('Cloudinary upload error:', err.message);
        throw new Error('Failed to upload employee photo');
    }
};

module.exports = uploadImage;