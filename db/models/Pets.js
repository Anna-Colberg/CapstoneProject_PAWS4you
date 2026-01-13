import mongoose from "mongoose";

const {Schema} = mongoose;

const petSchema = new Schema({
    name: {type: String, required: true},
    species: {type: String, required: true},
    breed: {type: String, required: true},
    age: {type: Number, required: true},
    needs: {type: String},
    sick: {type: String, default: "no"},
    dead: {type: String, default: "no"},
});

const Pets = mongoose.models.Pets || mongoose.model("Pets", petSchema);

export default Pets;

