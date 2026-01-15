import dbConnect from "@/db/connect";
import Pets from "@/db/models/Pets";

export default async function newPetsHandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const pets = await Pets.find({});
    return response.status(200).json(pets);
  }

  if (request.method === "POST") {
    try {
      const newPet = await Pets.create(request.body);
      return response.status(201).json(newPet);
    } catch (error) {
      return response.status(400).json({ status: "Could not create pet" });
    }
  }

  if (request.method === "DELETE") {
    try {
      const { id } = request.body;
      await Pets.findByIdAndDelete(id);
      return response.status(200).json({ status: "Pet deleted" });
    } catch (error) {
      return response.status(400).json({ status: "Could not delete pet" });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedPet = request.body;
      const pet = await Pets.findByIdAndUpdate(
        updatedPet._id,
        updatedPet,
        {new: true}
      );
      return response.status(200).json(pet);
    } catch (error) {
      return response.status(400).json({ status: "Could not update pet"});
    }
  }

  return response.status(405).json({ status: "Method not allowed" });
}
