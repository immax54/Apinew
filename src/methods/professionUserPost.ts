import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { ConnectionUserProfession } from "../entities/ConnectionUserProfession";

export async function proffessionUserPost(
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
      res.write(err);
    });
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
  }
  GetData(res);
  if (isJsonString(body) === true) {
    const resjson = JSON.parse(body.toString());
    const profession = new ConnectionUserProfession();
    profession.Users = resjson.user;
    profession.Professions = resjson.profession;
    if (
      typeof profession.Users === "number" &&
      typeof profession.Professions === "number"
    ) {
      AppDataSource.manager.save(profession);
      res.write(`Connection has been added${JSON.stringify(profession)}`);
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
