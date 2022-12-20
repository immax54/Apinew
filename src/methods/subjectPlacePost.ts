import type { DataSource } from "typeorm";

import { ConnectionSubjectPlaces } from "../entities/ConnectionSubjectPlaces";

export async function subjectPlacePost(
  body: any[string],
  AppDataSource: DataSource,
  res: any,
  req: any[string]
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
  req
    .on("error", (err: string) => {
      console.error(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", () => {
      GetData(body, res);
      if (isJsonString(body) === true) {
        const resjson = JSON.parse(body);
        const connect = new ConnectionSubjectPlaces();
        connect.Places = resjson.place;
        connect.Department = resjson.department;
        connect.Subject = resjson.subject;
        if (
          typeof connect.Subject === "number" &&
          typeof connect.Places === "number" &&
          typeof connect.Department === "number"
        ) {
          AppDataSource.manager.save(connect);
          res.write(`Connection has been added${JSON.stringify(connect)}`);
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
    });
}
