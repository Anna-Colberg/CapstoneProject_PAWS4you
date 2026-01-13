import dbConnect from "@/db/connect";
import Pets from "@/db/models/Pets";

export default async function petshandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const pets = await Pets.find({});
    return response.status(200).json(pets);
  }

  if (request.method === "POST") {
    const pet = new Pets(request.body);
    await pet.save();
    return response.status(201).json(pet);
  }

  if (request.method === "PUT") {
    try {
      const { id, ...updatedData } = request.body;

      const updatedPet = await Pets.findByIdAndUpdate(id, updatedData, {
        new: true,
      });

      return response.status(200).json(updatedPet);
    } catch (error) {
      return response.status(400).json({ status: "Could not update pet" });
    }
  }

  if (request.method === "DELETE") {
    const { id } = request.body;
    await Pets.findByIdAndDelete(id);
    return response.status(200).json({ status: "Deleted" });
  }

  response.status(405).json({ status: "Method not Allowed." });
}
