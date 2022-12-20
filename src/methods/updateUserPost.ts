import type { DataSource } from "typeorm";
import { User } from "../entities/User";

function GetData(body: string | any[], res: any) {
  body = Uint8Array.toString();
  res.on("error", (err: string) => {
    console.error(err);
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
}
function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
let res: any;
export async function userPost(
  body: any[string],
  AppDataSource: DataSource,
  res: any,
  req: any
): Promise<any> {
  req
    .on("error", (err: string) => {
      console.error(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", async () => {
      GetData(body, res);
      if (isJsonString(body) === true) {
        const resjson = JSON.parse(body);
        const userRepository = AppDataSource.getRepository(User);

        const userToUpdate: any[string] = await userRepository.findOneBy({
          id: resjson.user,
        });
        userToUpdate.deleted = resjson.deleted;
        userToUpdate.banned = resjson.banned;
        userToUpdate.requestToChange = resjson.requestToChange;
        if (
          typeof resjson.banned === "boolean" &&
          typeof resjson.deleted === "boolean" &&
          typeof resjson.passwordToChange === "boolean"
        ) {
          userRepository.manager.save(userToUpdate);
          res.write(`User has been updated${JSON.stringify(userToUpdate)}`);
          res.end();
          console.log("User update");
        } else {
          res.write("ERROR! data error Data");
          res.end();
        }
      } else {
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
    });
}
