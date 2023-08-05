const mongoose = require("mongoose"); 
 const Schema = mongoose.Schema; 
  
 const fileSchema = new Schema({ 
   fileName: { 
     type: String, 
     required: true
   }, 
   filePathName: { 
     type: String, 
     required: true, 
   }, 
   subject: { 
     type: String, 
     required: true, 
   },
   semester: {
     type: String,
     require: true,
   }
   
 }); 
  
 module.exports = mongoose.model("file", fileSchema);