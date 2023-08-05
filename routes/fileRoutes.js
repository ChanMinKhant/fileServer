const express = require('express');
const router = express.Router();
const multerMiddleware = require('../middleware/multer')
const { postFile , getUploadPage, getUploadedFile, getDownloadPage,
  downloadFile } = require('../controllers/fileController.js')

router.route('/').get(getUploadPage).post(multerMiddleware.multerMiddleware, postFile);

router.route('/aodj/:id').get(downloadFile);
router.route('/get/:id').get(getDownloadPage);

module.exports = router;
