import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Department } from "../entities/Department";

export async function departmentPost(
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
    const department = new Department();
    department.name = resjson.name;
    if (typeof department.name === "string") {
      AppDataSource.manager.save(department);
      res.write(`Department has been added${JSON.stringify(department)}`);
      res.end();
      //  console.log("Department post");
    } else {
      res.write("ERROR! data error Data");
      res.end();
    }
  } else {
    res.write("ERROR! Input isnt JSON");
    res.end();
  }
}
