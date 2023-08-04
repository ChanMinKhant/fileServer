const express = require('express');
const router = express.Router();
const multerMiddleware = require('../middleware/multer')
const { postFile , getUploadPage} = require('../controllers/fileController.js')

router.route('/upload').get(getUploadPage).post(multerMiddleware.multerMiddleware, postFile);

module.exports = router;
