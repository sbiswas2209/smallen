import db from "./db";
import URL from "./models/url";

const storedIds = [];

async function makeid(length: number): Promise<string> {
  if (storedIds.length === 0) {
    const urlDocuments = await (await db()).collection("urls").find();
    await urlDocuments.forEach((doc) => {
      storedIds.push(doc.shortenedId);
    });
  }
  var result: string = "";
  while (storedIds.includes(result)) {
    var characters: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength: number = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}
export default makeid;
