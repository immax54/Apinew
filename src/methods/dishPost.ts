import type { DataSource } from "typeorm";
import { Dishes } from "../entities/Dishes";

let res: any;
export async function dishPost(
  body: any[string],
  AppDataSource: DataSource,
  res: any
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
  GetData(body, res);
  if (isJsonString(body) === true) {
    const resjson = JSON.parse(body);
    const dish = new Dishes();
    dish.active = true;
    dish.dish = resjson.dish;
    dish.Category = resjson.category;
    if (typeof dish.dish === "string" && typeof dish.Category === "number") {
      AppDataSource.manager.save(dish);
      res.write(`Connection has been added${JSON.stringify(dish)}`);
      res.end();
      console.log("Connection post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
