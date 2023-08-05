const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    req.uniqueFilename = `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`;
    cb(null, req.uniqueFilename);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024 // 20 MB file size limit
  }
});

exports.multerMiddleware = (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).render('uploadError', { error: 'LIMIT_FILE_SIZE' });
    }

    if (err) {
      return res.status(500).render('uploadError', { error: 'An error occurred during file upload.' });
    }
    next();
  });
};
