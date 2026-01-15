import dbConnect from "@/db/connect";
import Portraits from "@/db/models/Portraits";


//ID werden aus der URL gelesen,
//einzelne Portraits werden aus DB gezogen,

export default async function eachPortraithandler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    const portrait = await Portraits.findById(id);

    if (!portrait) {
      return response
        .status(404)
        .json({ status: "Portrait not found !" });
    }

 if (request.method !== "GET") {
    return response.status(405).json({ status: "Method not allowed." });
  }

    return response.status(200).json(portrait);
  } catch (error) {
    return response.status(400).json({ status: "Invalid ID" });
  }
}

