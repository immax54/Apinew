import type { DataSource } from "typeorm";
import { Profession } from "../entities/Professions";

export async function proffessionPost(
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
    GetData(body, res);
    if (isJsonString(body) === true) {
      const resjson = JSON.parse(body);
      const profession = new Profession();
      profession.name = resjson.profession;
      if (typeof profession.name === "string") {
        AppDataSource.manager.save(profession);
        res.write(`Profession has been added${JSON.stringify(profession)}`);
        res.end();
        console.log("Profession post");
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
