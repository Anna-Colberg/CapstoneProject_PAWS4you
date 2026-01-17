import dbConnect from "@/db/connect";
import Pets from "@/db/models/Pets";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function petshandler(request, response) {
  await dbConnect();

  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return response.status(401).json({ status: "Unauthorized" });
  }

  const ownerId = session.user.id;

  if (request.method === "GET") {
    const pets = await Pets.find({ ownerId });
    return response.status(200).json(pets);
  }

  if (request.method === "POST") {
    const pet = await Pets.create({
      ...request.body,
      ownerId,
    });
    return response.status(201).json(pet);
  }

  if (request.method === "PUT") {
    const { id, ...updatedData } = request.body;

    const pet = await Pets.findOneAndUpdate({ _id: id, ownerId }, updatedData, {
      new: true,
    });

    if (!pet) {
      return response.status(403).json({ status: "Forbidden" });
    }

    return response.status(200).json(pet);
  }

  if (request.method === "DELETE") {
    const { id } = request.body;

    const pet = await Pets.findOneAndDelete({
      _id: id,
      ownerId,
    });
    if (!pet) {
      return response.status(403).json({ status: "Forbidden" });
    }
    return response.status(200).json({ status: "Deleted" });
  }

  response.status(405).json({ status: "Method not Allowed." });
}
