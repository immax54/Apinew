import type { DataSource } from "typeorm";
import type { IncomingMessage, ServerResponse } from "http";
import { Health } from "../entities/Health";

export async function healthPost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse,
  req: IncomingMessage
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
  req
    .on("error", (err: string) => {
      res.write(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", () => {
      GetData(res);
      if (isJsonString(body) === true) {
        const resjson = JSON.parse(body.toString());
        const health = new Health();
        health.Users = resjson.user;
        health.ConnectionUserProfessions = resjson.connectionUserProfession;
        health.okz = resjson.okz;
        health.anginamark = resjson.anginamark;
        health.diagnos = resjson.diagnos;
        health.passtowork = false;
        const created = new Date();
        health.date = `${created.getDate()}-${
          created.getMonth() + 1
        }-${created.getFullYear()}`;
        health.signSupervisor = false;
        health.signWorker = false;
        if (
          typeof health.signSupervisor === "boolean" &&
          typeof health.signWorker === "boolean" &&
          health.Users != null &&
          health.okz != null &&
          typeof health.okz === "boolean" &&
          health.anginamark != null &&
          typeof health.anginamark === "boolean" &&
          health.diagnos != null &&
          health.passtowork != null &&
          typeof health.passtowork === "boolean" &&
          typeof health.ConnectionUserProfessions === "number"
        ) {
          AppDataSource.manager.save(health);
          res.write(`Health has been added${JSON.stringify(health)}`);
          res.end();
          // console.log("Health post");
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
