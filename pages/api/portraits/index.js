import dbConnect from "@/db/connect";
import Portraits from "@/db/models/Portraits";

// Portrait-Daten werden aus der Datenbank abgerufen

export default async function portraithandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const { dogId } = request.query;

    if (dogId) {
      const dog = await Portraits.findById(dogId);

      if (!dog) {
        return response.status(404).json({ status: "Dog not found" });
      }
      return response.status(200).json(dog.notices || []);
    }

    const portraits = await Portraits.find();
    return response.status(200).json(portraits);
  }

  if (request.method === "POST") {
    const { dogId, text, time } = request.body;
    if (!dogId || !text) {
      return response.status(400).json({ status: "Missing data" });
    }

    const dog = await Portraits.findById(dogId);

    if (!dog) {
      return response.status(404).json({ status: "Dog not found" });
    }
    const newNotice = { text, time };
    dog.notices.push(newNotice);
    await dog.save();

    return response.status(201).json(newNotice);
  }
  response.status(405).json({ status: "Method not allowed." });
}
