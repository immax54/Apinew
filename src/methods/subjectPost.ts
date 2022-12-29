import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Subject } from "../entities/Objects";

export async function subjectPost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse
): Promise<void> {
  function isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  function GetData(response: ServerResponse) {
    response.on("error", (err: string) => {
      response.write(err);
    });
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
  }
  GetData(res);
  if (isJsonString(body.toString()) === true) {
    const resjson = JSON.parse(body.toString());
    const object = new Subject();
    object.name = resjson.name;
    object.type = resjson.type;
    object.address = resjson.address;
    if (
      typeof object.name === "string" &&
      typeof object.type === "string" &&
      typeof object.address === "string"
    ) {
      AppDataSource.manager.save(object);
      res.write(`Subject has been added${JSON.stringify(object)}`);
      res.end();
      // console.log("Subject post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
