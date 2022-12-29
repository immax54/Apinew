import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import type { IncomingMessage } from "http";
import { User } from "../entities/User";

function GetData(res: ServerResponse) {
  res.on("error", (err: string) => {
    res.write(err);
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
export async function userPost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse,
  req: IncomingMessage
): Promise<void> {
  req
    .on("error", (err: string) => {
      res.write(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", async () => {
      GetData(res);
      if (isJsonString(body.toString()) === true) {
        const resjson = JSON.parse(body.toString());
        const userRepository = AppDataSource.getRepository(User);

        const userToUpdate: User = await userRepository.findOneBy({
          id: resjson.user,
        });
        userToUpdate.deleted = resjson.deleted;
        userToUpdate.banned = resjson.banned;
        if (
          typeof resjson.banned === "boolean" &&
          typeof resjson.deleted === "boolean"
        ) {
          userRepository.manager.save(userToUpdate);
          res.write(`User has been updated${JSON.stringify(userToUpdate)}`);
          res.end();
          // console.log("User update");
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
