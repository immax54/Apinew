import type { DataSource } from "typeorm";
import e from "cors";
import { User } from "../entities/User";

function GetData(body: any[string], res: any[string]) {
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
export function getUser(
  AppDataSource: DataSource,
  res: any[string],
  body: any[string],
  req: any[string]
) {
  function writeend(data: any[string]): void {
    res.write(data);
    res.end();
  }

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
        const rolesRepository = AppDataSource.getRepository(User);
        if (typeof resjson.id === "number") {
          rolesRepository
            .createQueryBuilder("User")
            .where(`User.id = ${resjson.id}`)
            .leftJoin("User.ConnectionUserRole", "ConnectionUserRole")
            .addSelect(["ConnectionUserRole.Role"])
            .leftJoin("ConnectionUserRole.Role", "Role")
            .addSelect(["Role.name"])
            .leftJoin(
              "User.ConnectionUserProfession",
              "ConnectionUserProfession"
            )
            .addSelect(["ConnectionUserProfession.Profession"])
            .leftJoin("ConnectionUserProfession.Profession", "Profession")
            .addSelect(["Profession.name"])
            .leftJoin("User.Health", "Health")
            .addSelect("Health.signWorker")
            .leftJoin("User.Bracklog", "Bracklog")
            .addSelect(["Bracklog.id"])
            .leftJoin("User.TemperatureСontrolLog", "TemperatureСontrolLog")
            .addSelect(["TemperatureСontrolLog.id"])
            .getMany()
            .then((data) => writeend(JSON.stringify(data)));
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
