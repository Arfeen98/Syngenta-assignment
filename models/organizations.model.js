const {model, Schema}= require('mongoose');

const OrganizationSchema=new Schema({
   crop_name: { type: String, required: true },
   season: { type: String, required: true },
   region: {type: String, required: true},
   property: { type: String, required: true },
   field: { type: String, required: true },
})

const OrganizationModel = model ('Organization',OrganizationSchema);
module.exports=OrganizationModel;
