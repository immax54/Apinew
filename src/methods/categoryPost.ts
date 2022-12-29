import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Categories } from "../entities/Categories";

export async function categoryPost(
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
    const category = new Categories();
    category.name = resjson.name;
    if (typeof category.name === "string") {
      AppDataSource.manager.save(category);
      res.write(`Connection has been added${JSON.stringify(category)}`);
      res.end();
      // console.log("Connection post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
