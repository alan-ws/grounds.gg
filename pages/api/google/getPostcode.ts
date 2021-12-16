import { NextApiRequest, NextApiResponse } from "next";

type AddressComponent = {
  'long_name': string;
  'short_name': string;
  'types': string[]
}

type Result = {'address_components': AddressComponent[]};

interface IResults {
  results: Result[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lng } = req.query;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
  const response = await fetch(url);
  const data: IResults = await response.json();

  const postcode = data.results.filter((result: Result) => {
    result.address_components.filter((address: AddressComponent) => {
      if (address.types.includes('postal_code_prefix'))
        return address.long_name;

      if (address.types.includes('postal_code'))
        return address.long_name;
    })
  })

  if (postcode.length < 1)
    res.status(404).json({
      message: "No postcode found",
    });

  res.status(200).json({
    postcode: postcode,
  });
}
