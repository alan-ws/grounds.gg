import { NextApiRequest, NextApiResponse } from "next";
import { ALLOWED_ORIGINS } from "../google/getPostcode";

const ERROR_STATS = {
  401: "unauthorised",
  403: "forbidden",
  404: "no data",
  405: "not allowed",
  429: "rate limit",
  500: "server error",
  503: "service unavailable",
};

//https://ddragon.leagueoflegends.com/api/versions.json
//https://ddragon.leagueoflegends.com/cdn/0.151.2/data/en_US/profileicon.json
//https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/9.png
//https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/10.png
const ICON_IDS = [9, 10];

type Summoner = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

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

  const { region, gameName, postcode } = req.query;
  const key = process.env.RIOT_DEV_API_KEY;
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(
    gameName as string
  )}`;
  const response = await fetch(url, {
    headers: {
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Riot-Token": key ?? "",
    },
  });

  if (ERROR_STATS[response.status]) {
    console.error("ERROR", ERROR_STATS[response.status]);
    res.status(response.status).json({
      message: ERROR_STATS[response.status],
    });
    return;
  }

  const data: Summoner = await response.json();

  const userPartial = {
    postalCode: postcode,
    level: data.summonerLevel,
    accountId: data.accountId,
    summonerId: data.id,
    name: data.name,
    iconId: data.profileIconId,
    puuid: data.puuid,
    verified: false,
  };

  const account = await fetch(
    "http://localhost:5001/grounds-1cfae/us-central1/storeProfile",
    {
      method: "POST",
      body: JSON.stringify(userPartial),
    }
  );

  res.status(200).json({
    message: "success",
    callbackId: account.json()["id"],
    icon: {
      current: data.profileIconId,
      change: data.profileIconId === ICON_IDS[0] ? ICON_IDS[1] : ICON_IDS[0],
    },
  });
}
