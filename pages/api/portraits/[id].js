import dbConnect from "@/db/connect";
import Portraits from "@/db/models/Portraits";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method !== "GET") {
    return response.status(405).json({ status: "Method not allowed." });
  }

  try {
    const portrait = await Portraits.findById(id);

    if (!portrait) {
      return response
        .status(404)
        .json({ status: "Hunderasse nicht gefunden !" });
    }

    return response.status(200).json(portrait);
  } catch (error) {
    return response.status(400).json({ status: "Ungültige ID" });
  }
}
