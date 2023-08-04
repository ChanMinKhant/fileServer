//const asyncHandller = require ('express-async-handller');
const path = require('path')

exports.getUploadPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
}



exports.postFile = (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    res.json({ message: 'File uploaded successfully.' });
  } catch (err) {
    if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
      // Multer error for exceeding file size limit
      return res.status(400).json({ error: 'File size exceeds the limit (20 MB).' });
    }

    // Handle any other error that occurred during file upload
    res.status(500).json({ error: 'An error occurred during file upload.' });
  }
};

