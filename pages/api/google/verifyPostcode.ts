import { NextApiRequest, NextApiResponse } from "next";
import { ALLOWED_ORIGINS, IResults } from "./getPostcode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers.referer === undefined) {
    res.status(404).json({
      message: "Not allowed",
    });
    return;
  }

  if (!ALLOWED_ORIGINS.includes(req.headers.referer)) {
    res.status(404).json({
      message: "Not allowed",
    });
    return;
  }

  const { postcode } = req.query;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${key}`;
  const response = await fetch(url);
  const data: IResults = await response.json();

  if (data.results.length < 1) {
    res.status(404).json({
      message: "Postcode not found",
    });
    return;
  }

  const { lat, lng } = data.results[0].geometry.location;

  res.status(200).json({
    message: lat && lng ? "success" : "fail",
  });
}
