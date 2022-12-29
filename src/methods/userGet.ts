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
  } catch (err) {
    return false;
  }
  return true;
}
export function getUser(
  AppDataSource: DataSource,
  res: ServerResponse,
  body: string[],
  req: IncomingMessage
) {
  function writeend(data: string): void {
    res.write(data);
    res.end();
  }

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
        const rolesRepository = AppDataSource.getRepository(User);
        if (typeof resjson.id === "number") {
          rolesRepository
            .createQueryBuilder("User")
            .where(`User.id = ${resjson.id}`)
            .leftJoin("User.ConnectionUserRoles", "ConnectionUserRoles")
            .addSelect(["ConnectionUserRoles.Role"])
            .leftJoin("ConnectionUserRoles.Role", "Role")
            .addSelect(["Role.name"])
            .leftJoin(
              "User.ConnectionUserProfessions",
              "ConnectionUserProfession"
            )
            .addSelect(["ConnectionUserProfession.Professions"])
            .leftJoin("ConnectionUserProfession.Professions", "Profession")
            .addSelect(["Profession.name"])
            .leftJoin("User.Healths", "Health")
            .addSelect("Health.signWorker")
            .leftJoin("User.Bracklogs", "Bracklog")
            .addSelect(["Bracklog.id"])
            .leftJoin("User.TemperatureСontrolLogs", "TemperatureСontrolLog")
            .addSelect(["TemperatureСontrolLog.id"])
            .getMany()
            .then((data) => writeend(JSON.stringify(data)))
            .catch((err) => err);
        } else {
          res.write("ERROR! id isnt number");
          res.end();
        }
      } else {
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
    });
}
