import type { DataSource } from "typeorm";
import { Subject } from "../entities/Objects";

export async function subjectPost(
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
      console.log("Subject post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
