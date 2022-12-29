import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Profession } from "../entities/Professions";

export async function proffessionPost(
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
    GetData(res);
    if (isJsonString(body) === true) {
      const resjson = JSON.parse(body.toString());
      const profession = new Profession();
      profession.name = resjson.profession;
      if (typeof profession.name === "string") {
        AppDataSource.manager.save(profession);
        res.write(`Profession has been added${JSON.stringify(profession)}`);
        res.end();
        // console.log("Profession post");
      } else {
        res.write("ERROR! data error Data");
        res.end();
      }
    } else {
      res.write("ERROR! Input isnt JSON");
      res.end();
    }
  }
}
