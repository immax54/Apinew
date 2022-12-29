import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { User } from "../entities/User";

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export async function userPost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse
): Promise<void> {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  if (isJsonString(body.toString()) === true) {
    const resjson = JSON.parse(body.toString());
    const user = new User();
    user.name = resjson.name;
    user.surname = resjson.surname;
    user.otch = resjson.otch;
    user.deleted = false;
    user.banned = false;
    if (
      user.name != null &&
      user.surname != null &&
      user.otch != null &&
      typeof user.deleted === "boolean" &&
      typeof user.banned === "boolean"
    ) {
      AppDataSource.manager.save(user);
      res.write(`User has been added${JSON.stringify(user)}`);
      res.end();
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
