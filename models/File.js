const mongoose = require('mongoose');


const FileSchema = new mongoose.Schema({
  shortId: {
    type: String,
    //default: shortid.generate(),
    unique: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: undefined,
    //required: true,
  },
});

module.exports = mongoose.model('File', FileSchema)