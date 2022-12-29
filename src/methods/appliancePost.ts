import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import type { IncomingMessage } from "http";
import { Appliance } from "../entities/Devices";

export async function appliancePost(
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
      res.write(err);
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
        const appliance = new Appliance();
        appliance.name = resjson.name;
        appliance.normalpoint = resjson.normalpoint;
        appliance.startnormalpoint = resjson.startnormalpoint;
        appliance.endnormalpoint = resjson.endnormalpoint;
        appliance.ConnectionSubjectPlace = resjson.place;
        if (
          typeof appliance.name === "string" &&
          typeof appliance.normalpoint === "string" &&
          typeof appliance.startnormalpoint === "number" &&
          typeof appliance.endnormalpoint === "number" &&
          typeof appliance.ConnectionSubjectPlace === "number"
        ) {
          AppDataSource.manager.save(appliance);
          res.write(`Connection has been added${JSON.stringify(appliance)}`);
          res.end();
          //      console.log("Connection post");
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
