import type { DataSource } from "typeorm";
import { Bracklog } from "../entities/Brack";

export async function brackPost(
  body: any[string],
  AppDataSource: DataSource,
  res: any
): Promise<boolean> {
  function isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  function GetData(body: string | any[], res: any) {
    body = Uint8Array.toString();
    res.on("error", (err: string) => {
      console.error(err);
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
  }
  GetData(body, res);
  if (isJsonString(body) === true) {
    const resjson = JSON.parse(body);
    const brack = new Bracklog();
    brack.user = resjson.user;
    brack.serveTime = resjson.serveTime;
    brack.dish = resjson.dish;
    brack.rating = resjson.rating;
    brack.timespend = resjson.timespend;
    brack.userdone = resjson.userdone;
    brack.note = resjson.note;
    const created = new Date();
    brack.date = `${created.getDate()}-${
      created.getMonth() + 1
    }-${created.getFullYear()}`;
    if (
      brack.user != null &&
      typeof brack.serveTime === "number" &&
      typeof brack.dish === "number" &&
      (brack.rating === 1 || brack.rating === 2 || brack.rating === 3) &&
      typeof brack.timespend === "number" &&
      brack.userdone != null &&
      brack.note != null
    ) {
      AppDataSource.manager.save(brack);
      res.write(`Brackpost has been added${JSON.stringify(brack)}`);
      res.end();
      return true;
    }
    return res.write("Data Error ");
  }
  return false;
}
