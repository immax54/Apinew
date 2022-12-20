import "reflect-metadata";
import { DataSource } from "typeorm";
// var XLSX = require('xlsx');
import * as http from "http";
import * as ngrok from "ngrok";
import {
  listotch,
  listnames,
  listfam,
  listcategory,
  listdishesgarnire,
  listdishesnapit,
  listdishessalats,
  listprof,
  listroles,
} from "./data/arrays";
import { User } from "./entities/User";
import { Bracklog } from "./entities/Brack";
import { Health } from "./entities/Health";
import { TemperatureControlLog } from "./entities/TemperatureControl";
import { Account } from "./entities/Accounts";
import { Profession } from "./entities/Professions";
import { Categories } from "./entities/Categories";
import { Dishes } from "./entities/Dishes";
import { Roles } from "./entities/Roles";
import { ConnectionUserRole } from "./entities/ConnectionUserRole";
import { Subject } from "./entities/Objects";
import { Places } from "./entities/Places";
import { Department } from "./entities/Department";
import { ConnectionUserProfession } from "./entities/ConnectionUserProfession";
import { Appliance } from "./entities/Devices";
import { NotificationsTempcontrolLog } from "./entities/NotificationsTempcontrolLog";
import { ConnectionSubjectPlaces } from "./entities/ConnectionSubjectPlaces";
import { tempControlPost } from "./methods/tempControlPost";
import { healthPost } from "./methods/healthPost";
import { brackPost } from "./methods/brackPost";
import { userPost } from "./methods/userPost";
import { accountPost } from "./methods/accountPost";
import { categoryPost } from "./methods/categoryPost";
import { dishPost } from "./methods/dishPost";
import { subjectPlacePost } from "./methods/subjectPlacePost";
import { proffessionPost } from "./methods/proffessionPost";
import { proffessionUserPost } from "./methods/professionUserPost";
import { subjectPost } from "./methods/subjectPost";
import { placePost } from "./methods/placePost";
import { departmentPost } from "./methods/departmentPost";
import { appliancePost } from "./methods/appliancePost";
import { toggleInMenu } from "./methods/toggleInMenu";
import { getUser } from "./methods/userGet";
import { placesGet } from "./methods/placesGet";
import { applianceGet } from "./methods/applianceGet";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "postgres",
  entities: [
    User,
    NotificationsTempcontrolLog,
    ConnectionSubjectPlaces,
    Bracklog,
    Appliance,
    Health,
    TemperatureControlLog,
    Account,
    Dishes,
    Profession,
    Categories,
    Roles,
    ConnectionUserRole,
    Places,
    Subject,
    Department,
    ConnectionUserProfession,
  ],
  synchronize: true,
});
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => console.log(error));

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function GetData(body: any[string], res: any[string]) {
  body = Uint8Array.toString();
  res.on("error", (err: string) => {
    console.error(err);
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
}

ngrok.authtoken("2GuBDDtmUMvGx04gv6xhgUaVsPc_5Pyi3ytd1Ej7d14XkDiLf");
ngrok.connect(8080).then((data: string) => console.log(data));
http
  .createServer(async function (req: any[string], res: any) {
    const { url } = req;
    const { method } = req;
    function Get(Class: any[string]) {
      const userRepository = AppDataSource.getRepository(Class);
      userRepository.find().then((data) => writeend(JSON.stringify(data)));
    }
    function writeend(data: any[string]): void {
      res.write(data);
      res.end();
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Max-Age", 86400000000);

    if (url.toString() === `/tempControlPost` && method === "POST") {
      const body: any[string] = [];
      tempControlPost(body, AppDataSource, res, req);
    } else if (url.toString() === `/healthPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          healthPost(body, AppDataSource, res, req);
        });
    } else if (url.toString() === `/brackPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          GetData(body, res);
          if (isJsonString(body) === true) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            if (
              (await brackPost(body, AppDataSource, res).then(
                (data) => data
              )) === true
            ) {
              res.write("Post Brackpost");
              res.end();
            }
          } else {
            res.write("Error JSON");
            res.end();
          }
        });
    } else if (url.toString() === `/userPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          GetData(body, res);
          userPost(body, AppDataSource, res, req);
        });
    } else if (url.toString() === `/accountPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          accountPost(body, AppDataSource, res, req);
        });
    } else if (url.toString() === `/categoryPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          categoryPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/dishPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          dishPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/professionPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", () => {
          proffessionPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/professionUserPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", () => {
          proffessionUserPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/subjectPlacePost` && method === "POST") {
      const body: any[string] = [];
      subjectPlacePost(body, AppDataSource, res, req);
    } else if (url.toString() === `/subjectPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", () => {
          subjectPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/placePost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", () => {
          placePost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/departmentPost` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", () => {
          departmentPost(body, AppDataSource, res);
        });
    } else if (url.toString() === `/rolePost` && method === "POST") {
      const body: any[string] = [];
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
            const role = new Roles();
            role.name = resjson.name;
            if (typeof role.name === "string") {
              AppDataSource.manager.save(role);
              res.write(`Role has been added${JSON.stringify(role)}`);
              res.end();
              console.log("Role post");
            } else {
              res.write("ERROR! data error Data");
              res.end();
            }
          } else {
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
        });
    } else if (url.toString() === `/roleOnUserPost` && method === "POST") {
      const body: any[string] = [];
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
            const connect = new ConnectionUserRole();
            connect.Role = resjson.role;
            connect.User = resjson.user;
            if (
              typeof connect.Role === "number" &&
              typeof connect.User === "number"
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
    } else if (url.toString() === `/appliancePost` && method === "POST") {
      const body: any[string] = [];
      appliancePost(body, AppDataSource, res, req);
    } else if (url.toString() === `/userUpdate` && method === "POST") {
      const body: any[string] = [];
      userPost(body, AppDataSource, res, req);
    } else if (url.toString() === `/passwordRestore` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          GetData(body, res);
          if (isJsonString(body) === true) {
            const resjson = JSON.parse(body);
            const accRepository = AppDataSource.getRepository(Account);
            const accRepositoyrToUpdate: any[string] =
              await accRepository.findOneBy({
                id: resjson.account,
              });
            accRepositoyrToUpdate.password = resjson.password;
            if (resjson.password != null) {
              accRepository.manager.save(accRepositoyrToUpdate);
              res.write(
                `Account has been updated${JSON.stringify(
                  accRepositoyrToUpdate
                )}`
              );
              res.end();
              console.log("Password update");
            } else {
              res.write("ERROR! data error Data");
              res.end();
            }
          } else {
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
        });
    } else if (url.toString() === `/toggleDishInMenu` && method === "POST") {
      const body: any[string] = [];
      toggleInMenu(body, AppDataSource, res, req);
    } else if (url.toString() === `/updateDish` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          GetData(body, res);
          if (isJsonString(body) === true) {
            const resjson = JSON.parse(body);
            const dishRepository = AppDataSource.getRepository(Dishes);
            const dishRepositoyrToUpdate: any[string] =
              await dishRepository.findOneBy({
                id: resjson.id,
              });
            dishRepositoyrToUpdate.dish = resjson.dish;
            if (typeof resjson.dish === "string") {
              dishRepository.manager.save(dishRepositoyrToUpdate);
              console.log("Dish updated");
              res.write(
                `Dish has been updated${JSON.stringify(dishRepositoyrToUpdate)}`
              );
              res.end();
            } else {
              res.write("ERROR! data error Data");
              res.end();
            }
          } else {
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
        });
    } else if (url.toString() === `/roleonUserUpdate` && method === "POST") {
      const body: any[string] = [];
      req
        .on("error", (err: string) => {
          console.error(err);
        })
        .on("data", (chunk: string) => {
          body.push(chunk);
        })
        .on("end", async () => {
          GetData(body, res);
          if (isJsonString(body) === true) {
            const resjson = JSON.parse(body);
            const userRepository =
              AppDataSource.getRepository(ConnectionUserRole);
            const userRepositoyrToUpdate: any[string] =
              await userRepository.findOneBy({
                User: resjson.user,
              });
            userRepositoyrToUpdate.Role = resjson.role;

            if (
              typeof userRepositoyrToUpdate.Role === "number" &&
              userRepositoyrToUpdate != null
            ) {
              userRepository.manager.save(userRepositoyrToUpdate);
              res.write(
                `Role has been updated${JSON.stringify(userRepositoyrToUpdate)}`
              );
              res.end();
              console.log("Role updated");
            } else {
              res.write("ERROR! data error Data");
              res.end();
            }
          } else {
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
        });
    } else if (url.toString() === `/userGetDetail` && method === "POST") {
      const body: any[string] = [];
      getUser(AppDataSource, res, body, req);
    } else if (url.toString() === `/usersget`) {
      Get(User);
    } else if (url.toString() === `/categoriesGet`) {
      Get(Categories);
    } else if (url.toString() === "/rolesGet") {
      Get(Roles);
    } else if (url.toString() === "/departmentsGet") {
      Get(Department);
    } else if (url.toString() === `/placesGet`) {
      placesGet(AppDataSource,res)
    } else if (url.toString() === "/appliancesGet") {
      applianceGet(AppDataSource,res)
    } else if (url.toString() === "/subjectsGet") {
      Get(Subject);
    } else if (url.toString() === `/professionsGet`) {
      Get(Profession);
    } else if (url.toString() === `/dishesGet`) {
      const rolesRepository = AppDataSource.getRepository(Dishes);
      rolesRepository
        .createQueryBuilder("Dishes")
        .leftJoin("Dishes.Category", "Category")
        .addSelect("Category.name")
        .getMany()
        .then((data) => writeend(JSON.stringify(data)));
    } else if (url.toString() === `/brackGet`) {
      Get(Bracklog);
    } else if (url.toString() === `/accountGet`) {
      Get(Account);
    } else if (url.toString() === `/tempControlGet`) {
      const TempcontrolRepository = AppDataSource.getRepository(
        TemperatureControlLog
      );
      TempcontrolRepository.createQueryBuilder("Tempcontrol")
      Get(TemperatureControlLog)
        // .leftJoin("Tempcontrol.Appliance", "Appliance")
        // .addSelect(["Appliance.name"])
        // .leftJoin("Appliance.Subject", "Subject")
        // .addSelect(["Subject.name"])
        // .leftJoin("Appliance.Place", "Place")
        // .addSelect(["Place.name"])
        // .leftJoin("Appliance.Department", "Department")
        // .addSelect(["Department.name"])
        // .getMany()
        // .then((data) => writeend(JSON.stringify(data)));
    } else if (url.toString() === `/healthget`) {
      Get(Health);
      } else if (url.toString() === "/dishes1") {
        var created = new Date();
        for (let i = 0; i <= listdishesgarnire.length - 1; i++) {
          const dishes = new Dishes();
          dishes.dish = listdishesgarnire[i];
          dishes.active = true;
          dishes.Category = 1;
          AppDataSource.manager.save(dishes);
        }
        for (let i = 0; i <= listdishesnapit.length - 1; i++) {
          const dishes = new Dishes();
          dishes.dish = listdishesnapit[i];
          dishes.active = true;
          dishes.Category = 2;
          AppDataSource.manager.save(dishes);
        }
        for (let i = 0; i <= listdishespech.length - 1; i++) {
          const dishes = new Dishes();
          dishes.dish = listdishespech[i];
          dishes.active = true;
          dishes.Category = 3;
          AppDataSource.manager.save(dishes);
        }
        for (let i = 0; i <= listdishessalats.length - 1; i++) {
          const dishes = new Dishes();
          dishes.dish = listdishessalats[i];
          dishes.active = true;
          dishes.Category = 4;
          AppDataSource.manager.save(dishes);
        }
        res.write("Done dishes");
        res.end();
    } else if (url.toString() === "/category1") {
      const created = new Date();
      for (let i = 0; i <= listcategory.length - 1; i++) {
        const category = new Categories();
        category.name = listcategory[i];
        AppDataSource.manager.save(category);
      }
      res.write("Done categories");
      res.end();
    } else if (url.toString() === "/roles1") {
      for (let i = 0; i <= listroles.length - 1; i++) {
        const role = new Roles();
        role.name = listroles[i];
        AppDataSource.manager.save(role);
      }
      res.write("Done roles");
      res.end();
    } else if (url.toString() === "/users1") {
      for (let i = 0; i < listnames.length; i++) {
        const user = new User();
        user.name = listnames[i];
        user.surname = listfam[i];
        user.otch = listotch[i];
        user.deleted = false;
        user.banned = false;
        AppDataSource.manager.save(user);
      }
      res.write("Done users");
      res.end();
    } else if (url.toString() === "/professions1") {
      for (let i = 0; i <= listprof.length - 1; i++) {
        const prof = new Profession();
        prof.name = listprof[i];
        AppDataSource.manager.save(prof);
      }
      res.write("Done profs");
      res.end();
    } else {
      res.write("ERROR! No API");
      res.end();
    }
  })
  .listen(8080, function () {
    console.log("Server started at 8080 port");
  });
