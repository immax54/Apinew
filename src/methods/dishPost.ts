import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Dishes } from "../entities/Dishes";

export async function dishPost(
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
    const dish = new Dishes();
    dish.active = true;
    dish.dish = resjson.dish;
    dish.Category = resjson.category;
    if (typeof dish.dish === "string" && typeof dish.Category === "number") {
      AppDataSource.manager.save(dish);
      res.write(`Connection has been added${JSON.stringify(dish)}`);
      res.end();
      //  console.log("Connection post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
