const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadPics = async (files) => {
  const urls = [];
  await Promise.all(
    files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);

      urls.push(result.url);
    })
  );

  return urls;
};

export default uploadPics;
