import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {lat, lng} = req.query;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
  const response = await fetch(url);
  const data: {results: any[]} = await response.json();

  const postcode = data.results.filter((address: any) => {
    if (address.types.includes('postal_code')) {
      address.address_components.filter((component: any) => {
        console.log(component)
        if (component.types.includes('postal_code') && component.types.length === 1) {
          return component.long_name;
        }
      })
    }
  })

  if (!postcode) res.status(404).json({
    message: 'No postcode found'
  });

  res.status(200).json({
    postcode
  });
}