import type { DataSource } from "typeorm";
import type { IncomingMessage, ServerResponse } from "http";
import { TemperatureControlLog } from "../entities/TemperatureControl";

export async function tempControlPost(
  body: string[],
  AppDataSource: DataSource,
  res: ServerResponse,
  req: IncomingMessage
): Promise<void> {
  function isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  // function sleep(ms: number) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // }
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
    .on("end", async () => {
      GetData(res);
      if (isJsonString(body.toString()) === true) {
        const resjson = JSON.parse(body.toString());
        const TemperatureСontrol = new TemperatureControlLog();
        TemperatureСontrol.user = resjson.user;
        TemperatureСontrol.temperature = resjson.temperature;
        TemperatureСontrol.vlazhn = resjson.vlazhn;
        TemperatureСontrol.sign = false;
        TemperatureСontrol.Appliances = resjson.appliance;
        const created = new Date();
        TemperatureСontrol.date = `${created.getDate()}-${
          created.getMonth() + 1
        }-${created.getFullYear()}`;
        TemperatureСontrol.time = `${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`;
        if (typeof TemperatureСontrol.user === "number") {
          if (typeof TemperatureСontrol.temperature === "number") {
            if (typeof TemperatureСontrol.vlazhn === "number") {
              if (typeof TemperatureСontrol.Appliances === "number") {
                if (typeof TemperatureСontrol.sign === "boolean") {
                  AppDataSource.manager.save(TemperatureСontrol);
                  // async function NotificationPost(data: number) {
                  //   await sleep(2500);
                  //   const Notification = new NotificationsTempcontrolLog();
                  //   Notification.User = resjson.user;
                  //   created = new Date();
                  //   const datanew: any[string] = data + 1;
                  //   Notification.TemperatureControlLog = datanew;
                  //   Notification.statusOfSign = false;
                  //   Notification.statusNotification = false;
                  //   AppDataSource.manager.save(Notification);
                  //   res.write(JSON.stringify(Notification));
                  // }
                  // const { id } = TemperatureСontrol;
                  // const FindOne = TempcontrolRepository.find({
                  //   select: { id: true },
                  //   where: { id },
                  // }).then((data) => data.slice(-1)[0].id);
                  // FindOne.then((data) => NotificationPost(data));
                  res.write(
                    `TemperatureControlLog has been added${JSON.stringify(
                      TemperatureСontrol
                    )}`
                  );
                  res.end();
                  // console.log("TemperatureControl post");
                }
              }
            }
          }
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
