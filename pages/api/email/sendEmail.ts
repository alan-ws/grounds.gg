import { NextApiRequest, NextApiResponse } from "next";

export const ALLOWED_ORIGINS = ["http://localhost:3000/"];

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

  const { email } = req.query;
  const key = process.env.SENDINBLUE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
  const response = await fetch(url);
  const data: IResults = await response.json();

  if (data.results.length < 1) {
    res.status(404).json({
      message: "Postcode not found",
    });
    return;
  }

  let postcode: AddressComponent | undefined;
  for (const result of data.results) {
    if (postcode !== undefined) break;
    postcode = result.address_components.find(
      (value: AddressComponent) =>
        value.types.includes("postal_code_prefix") ||
        value.types.includes("postal_code")
    );
  }

  if (postcode === undefined) {
    res.status(404).json({
      message: "Postcode not found",
    });
    return;
  }

  res.status(200).json({
    postcode: postcode.long_name,
  });
}
