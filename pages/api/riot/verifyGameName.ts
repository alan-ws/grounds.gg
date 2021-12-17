import { NextApiRequest, NextApiResponse } from "next";
import { ALLOWED_ORIGINS } from "../google/getPostcode";

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

  const { gameName } = req.query;
  const key = process.env.RIOT_DEV_API_KEY;
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(
    gameName as string
  )}`;
  const response = await fetch(url, {
    headers: {
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Riot-Token": key ?? "",
    },
  });
  const data = await response.json();

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
