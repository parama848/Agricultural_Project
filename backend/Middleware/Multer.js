// import multer from "multer";

// // Create storage configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Optional: specify upload directory
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Save with original name
//         // Or add timestamp: cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// // Create upload middleware
// const upload = multer({ storage });

// export default upload;


import multer from "multer";
import fs from "fs";

// Ensure uploads folder exists
const uploadPath = 'uploads/';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

export default upload;
