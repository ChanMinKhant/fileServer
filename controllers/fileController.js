const File = require('./../models/File')
const path = require('path')
const multer = require('multer')

exports.getUploadPage = async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));

}

exports.getDownloadPage = async (req, res, next) => {
  try{
  const shortId = req.params.id;
  const file = await File.findOne({shortId})
  res.render('download',{shortId,filename: file.originalName
  })
  }
 catch{
   res.render('404')
 }
}

exports.downloadFile =async (req, res, next) => {
  try{
  const file= await File.findOne({shortId:req.params.id})
  res.download(`./uploads/${file.filePath}`, file.originalName);
  }
  catch{
    res.render('404');
  }
};




exports.postFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }


    const uniqueFilename = req.uniqueFilename;
    //console.log('Unique Filename:', uniqueFilename);
    //console.log('Original Filename:', req.file.originalname);
   

    const file = new File({
      filePath: req.uniqueFilename,
      originalName:req.file.originalname
    })
    
    file.save().then(doc=> console.log("file uploaded")).catch(err=> console.log(err));
  
  
   const downloadLink = `${req.protocol}://${req.get('host')}/get/${file.shortId}`;
   
     res.render('Successful', { 
       message: 'File uploaded successfully.',
       Link: downloadLink
     });
     
  } catch (err) {
    res.render('uploadError', { error: 'OTHER_ERROR' });
  }
}
