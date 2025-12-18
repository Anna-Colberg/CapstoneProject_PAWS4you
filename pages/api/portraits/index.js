import dbConnect from "@/db/connect";
import Portraits from "@/db/models/Portraits";

export default async function portraithandler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const portraits = await Portraits.find();
        response.status(200).json(portraits);
        return;
    }
    response.status(405).json({ status: "Method not allowed."})
}
