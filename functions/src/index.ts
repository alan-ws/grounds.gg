import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";

const app = initializeApp();
const db = app.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const storeProfile = functions.https.onRequest(
  async (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    const body = JSON.parse(request.body);
    const docId = (
      await db
        .collection("Games")
        .where("name", "==", "league of legends")
        .get()
    ).docs[0].id;

    const doc = await db.collection("GamerProfiles").add({
      locale: {
        postalCode: body.postalCode,
      },
      accountInfo: {
        level: body.level,
        accountId: body.accountId,
        summonerId: body.summonerId,
        name: body.name,
        iconId: body.iconId,
        puuid: body.puuid,
        verified: body.verified,
        gameId: `/Games/${docId}`,
      },
    });
    response.status(200).json({
      id: doc.id,
    });
  }
);
