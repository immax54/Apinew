import type { DataSource } from "typeorm";
import { Health } from "../entities/Health";

export async function healthPost(
  body: any[string],
  AppDataSource: DataSource,
  res: any,
  req: any
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
  req
    .on("error", (err: string) => {
      console.error(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", () => {
      GetData(body, res);
      if (isJsonString(body) === true) {
        const resjson = JSON.parse(body);
        const health = new Health();
        health.User = resjson.user;
        health.ConnectionUserProfession = resjson.connectionUserProfession;
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
          health.User != null &&
          health.okz != null &&
          typeof health.okz === "boolean" &&
          health.anginamark != null &&
          typeof health.anginamark === "boolean" &&
          health.diagnos != null &&
          health.passtowork != null &&
          typeof health.passtowork === "boolean" &&
          typeof health.ConnectionUserProfession === "number"
        ) {
          AppDataSource.manager.save(health);
          res.write(`Health has been added${JSON.stringify(health)}`);
          res.end();
          console.log("Health post");
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
