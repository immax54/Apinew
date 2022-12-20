import type { DataSource } from "typeorm";
import { Places } from "../entities/Places";

export async function placePost(
  body: any[string],
  AppDataSource: DataSource,
  res: any
): Promise<any> {
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
    const place = new Places();
    place.name = resjson.name;
    if (typeof place.name === "string") {
      AppDataSource.manager.save(place);
      res.write(`Place has been added${JSON.stringify(place)}`);
      res.end();
      console.log("Place post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
