const router = require("express").Router();
const fileController = require('./../controllers/fileController')

router.route("/upload").post(fileController.uploadFile);

modules.export = router;
