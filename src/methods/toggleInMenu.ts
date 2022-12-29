import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import type { IncomingMessage } from "http";
import { Dishes } from "../entities/Dishes";
import e from "cors";

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
function GetData(res: ServerResponse) {
  res.on("error", (err: string) => {
    res.write(err);
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
}
export async function toggleInMenu(
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
        if (
          typeof resjson.dishToggleIn === "object" &&
          typeof resjson.dishToggleOff === "object"
        ) {

        
        for (let i = 0; i < resjson.dishToggleIn.length; i++) {
          const dishRepository = AppDataSource.getRepository(Dishes);

          if (typeof resjson.dishToggleIn[i] !== "number") {
              res.write(`ERROR! dish ${resjson.dish[i]} not number error`);
              res.end;
          }
          var dishRepositoyrToUpdate: Dishes = await dishRepository.findOneBy({
            id: resjson.dishToggleIn[i],
          });
             dishRepositoyrToUpdate.active = true;
            dishRepository.manager.save(dishRepositoyrToUpdate);
          }
        }
        for (let i = 0; i < resjson.dishToggleOff.length; i++) {
          const dishRepository = AppDataSource.getRepository(Dishes);

          if (typeof resjson.dishToggleOff[i] !== "number") {
            res.write(`ERROR! dish ${resjson.dish[i]} not number error`);
            res.end;
          }

          const dishRepositoyrToUpdate:Dishes = await dishRepository.findOneBy({
            id: resjson.dishToggleOff[i],
          });
           dishRepositoyrToUpdate.active = false;
          dishRepository.manager.save(dishRepositoyrToUpdate);
          res.write(
            `Dish has been toggled${JSON.stringify(dishRepositoyrToUpdate)}`
          );
          res.end();
        }
      }
      else{
        res.write("ERROR! dish isnt array error");
        res.end();
      }
    })};
