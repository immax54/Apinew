import type { DataSource } from "typeorm";
import { Appliance } from "../entities/Devices";

export async function appliancePost(
  body: any[string],
  AppDataSource: DataSource,
  res: any,
  req: any
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
        const appliance = new Appliance();
        appliance.name = resjson.name;
        appliance.normalpoint = resjson.normalpoint;
        appliance.startnormalpoint = resjson.startnormalpoint;
        appliance.endnormalpoint = resjson.endnormalpoint;
        appliance.ConnectionSubjectPlaces = resjson.place;
        if (
          typeof appliance.name === "string" &&
          typeof appliance.normalpoint === "string" &&
          typeof appliance.startnormalpoint === "number" &&
          typeof appliance.endnormalpoint === "number"&&
          typeof appliance.ConnectionSubjectPlaces ==="number"
        ) {
          AppDataSource.manager.save(appliance);
          res.write(`Connection has been added${JSON.stringify(appliance)}`);
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
