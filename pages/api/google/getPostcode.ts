import { NextApiRequest, NextApiResponse } from "next";

export type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type Geo = {
  location: {
    lat: number;
    lng: number;
  };
};

export type Result = {
  address_components: AddressComponent[];
  geometry: Geo;
};

export interface IResults {
  results: Result[];
}

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

  const { lat, lng } = req.query;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
  const response = await fetch(url);
  const data: IResults = await response.json();

  if (data.results.length < 1) {
    res.status(404).json({
      message: "Postcode not found",
    });
    return;
  }

  const postcodeObject = data.results[0].address_components.find(
    (value: AddressComponent) =>
      value.types.includes("postal_code_prefix") ||
      value.types.includes("postal_code")
  );

  if (postcodeObject === undefined) {
    res.status(404).json({
      message: "Postcode not found",
    });
    return;
  }

  res.status(200).json({
    postcode: postcodeObject.long_name,
  });
}
