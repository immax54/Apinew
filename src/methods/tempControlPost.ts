import type { DataSource } from "typeorm";
import { TemperatureControlLog } from "../entities/TemperatureControl";
import { NotificationsTempcontrolLog } from "../entities/NotificationsTempcontrolLog";

export async function tempControlPost(
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
  function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
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
    .on("end", async () => {
      GetData(body, res);
      if (isJsonString(body) == true) {
        const TempcontrolRepository = AppDataSource.getRepository(
          TemperatureControlLog
        );
        const resjson = JSON.parse(body);
        const TemperatureСontrol = new TemperatureControlLog();
        TemperatureСontrol.user = resjson.user;
        TemperatureСontrol.temperature = resjson.temperature;
        TemperatureСontrol.vlazhn = resjson.vlazhn;
        TemperatureСontrol.sign = false;
        TemperatureСontrol.Appliance = resjson.appliance;
        const created = new Date();
        TemperatureСontrol.date = `${created.getDate()}-${
          created.getMonth() + 1
        }-${created.getFullYear()}`;
        TemperatureСontrol.time = `${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`;
        if (typeof TemperatureСontrol.user === "number") {
          if (typeof TemperatureСontrol.temperature === "number") {
            if (typeof TemperatureСontrol.vlazhn === "number") {
              if (typeof TemperatureСontrol.Appliance === "number") {
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
                  console.log("TemperatureControl post");
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
