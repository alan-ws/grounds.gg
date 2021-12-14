import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {lat, lng} = req.query;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
  const response = await fetch(url);
  const data = await response.json();

  console.debug(data);

  const postcode = data.results.map((address: any) => {
    if (address.types.includes('postal_code')) {
      address.address_components.map((component: any) => {
        if (component.types.includes('postal_code')) {
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