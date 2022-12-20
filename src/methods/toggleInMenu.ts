import type { DataSource } from "typeorm";
import { Dishes } from "../entities/Dishes";

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
let res: any;
export async function toggleInMenu(
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
        if (
          typeof resjson.dishToggleIn !== "object" &&
          typeof resjson.dishdishToggleOff !== "object"
        ) {
          res.write("ERROR! dish isnt array error");
          res.end();
        }
        for (let i = 0; i < resjson.dishToggleIn.length; i++) {
          const dishRepository = AppDataSource.getRepository(Dishes);

          if (typeof resjson.dishToggleIn[i] !== "number") {
            res.write(`ERROR! dish ${resjson.dish[i]} not number error`);
            resjson.dishToggleIn[i] = resjson.dishToggleIn[i + 1];
          }
          const dishRepositoyrToUpdate: any[string] =
            await dishRepository.findOneBy({
              id: resjson.dishToggleIn[i],
            });
          dishRepositoyrToUpdate.active = true;
          dishRepository.manager.save(dishRepositoyrToUpdate);
          res.write(
            `Dish has been toggled${JSON.stringify(dishRepositoyrToUpdate)}`
          );
          res.end();
        }
        for (let i = 0; i < resjson.dishToggleOff.length; i++) {
          const dishRepository = AppDataSource.getRepository(Dishes);

          if (typeof resjson.dishToggleOff[i] !== "number") {
            res.write(`ERROR! dish ${resjson.dish[i]} not number error`);
            resjson.dishToggleOff[i] = resjson.dishToggleOff[i + 1];
          }
          const dishRepositoyrToUpdate: any[string] =
            await dishRepository.findOneBy({
              id: resjson.dishToggleOff[i],
            });
          dishRepositoyrToUpdate.active = false;
          dishRepository.manager.save(dishRepositoyrToUpdate);
          res.write(
            `Dish has been toggled${JSON.stringify(dishRepositoyrToUpdate)}`
          );
          res.end();
        }
      } else {
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
    });
}
