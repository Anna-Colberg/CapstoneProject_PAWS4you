import mongoose from "mongoose";

const {Schema} = mongoose;

const portraitSchema = new Schema({
    name: {type: String, required:true,},
    imageUrl: {type: String},
    fciNumber: {type: String},
    groupsection: {type: String},
    high: {type: String},
    description: {type: String},
});

const Portraits = mongoose.models.Portraits || mongoose.model("Portraits", portraitSchema);

export default Portraits;