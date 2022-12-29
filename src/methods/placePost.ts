import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Places } from "../entities/Places";

export async function placePost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse
): Promise<void> {
  function isJsonString(str: string[]) {
    try {
      JSON.parse(str.toString());
    } catch (e) {
      return false;
    }
    return true;
  }
  function GetData(response: ServerResponse) {
    response.on("error", (err: string) => {
      response.write(err);
    });
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
  }
  GetData(res);
  if (isJsonString(body) === true) {
    const resjson = JSON.parse(body.toString());
    const place = new Places();
    place.name = resjson.name;
    if (typeof place.name === "string") {
      AppDataSource.manager.save(place);
      res.write(`Place has been added${JSON.stringify(place)}`);
      res.end();
      // console.log("Place post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
