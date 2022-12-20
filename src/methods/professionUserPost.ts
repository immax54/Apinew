import type { DataSource } from "typeorm";
import { ConnectionUserProfession } from "../entities/ConnectionUserProfession";

export async function proffessionUserPost(
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
    const profession = new ConnectionUserProfession();
    profession.User = resjson.user;
    profession.Profession = resjson.profession;
    if (
      typeof profession.User === "number" &&
      typeof profession.Profession === "number"
    ) {
      AppDataSource.manager.save(profession);
      res.write(`Connection has been added${JSON.stringify(profession)}`);
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
