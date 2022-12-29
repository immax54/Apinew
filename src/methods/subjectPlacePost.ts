import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import type { IncomingMessage } from "http";
import { ConnectionSubjectPlaces } from "../entities/ConnectionSubjectPlaces";

export async function subjectPlacePost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse,
  req: IncomingMessage
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
      response.write(err);
    });
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
  }
  req
    .on("error", (err: string) => {
      res.write(err);
    })
    .on("data", (chunk: string) => {
      body.push(chunk);
    })
    .on("end", () => {
      GetData(res);
      if (isJsonString(body) === true) {
        const resjson = JSON.parse(body.toString());
        const connect = new ConnectionSubjectPlaces();
        connect.Place = resjson.place;
        connect.Departments = resjson.department;
        connect.Subjects = resjson.subject;
        if (
          typeof connect.Subjects === "number" &&
          typeof connect.Place === "number" &&
          typeof connect.Departments === "number"
        ) {
          AppDataSource.manager.save(connect);
          res.write(`Connection has been added${JSON.stringify(connect)}`);
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
    });
}
