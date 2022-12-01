import "reflect-metadata"
const http =  require("http");
import { DataSource} from "typeorm";
// var XLSX = require('xlsx');
import {User} from "./entities/Client";
import { Bracklog } from "./entities/Brack";
import { Health } from "./entities/Health";
import { TemperatureСontrolLog } from "./entities/TemperatureСontrol";
import { Account } from "./entities/Accounts";
import {Professions} from "./entities/Professions"
import {Categories} from "./entities/Categories"
import { Dishes } from "./entities/Dishes";
import { ConnectionCategoryDish} from "./entities/ConnectionCategoryDish";
import { Roles } from "./entities/Roles";
import { ConnectionUserRole } from "./entities/ConnectionUserRole";
import { Objects } from "./entities/Objects";
import { Places } from "./entities/Places";
import { Typedepartment } from "./entities/Objects copy";
import { ConnectionDepartmentPlaces } from "./entities/ConnectionDepartmentPlaces";
import { Fridges } from "./entities/Fridges";
import { Lamps } from "./entities/Lamps";
import { ConnectionFridgesTemperatureLog } from "./entities/ConnectionFridgesTemperatureLog";
import { ConnectionLampsTemperatureLog } from "./entities/ConnectionLampsTemperatureLog";
 const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", 
    port: 5432,
    username: "postgres",
    password:"123",
    database: "postgres",
    entities:[User, Bracklog, Health,TemperatureСontrolLog,Account,Dishes,Professions, Categories, ConnectionCategoryDish,Roles,ConnectionUserRole,Places,Objects,Typedepartment,ConnectionDepartmentPlaces,Fridges,Lamps,ConnectionFridgesTemperatureLog,ConnectionLampsTemperatureLog],
    synchronize:true
})
AppDataSource.initialize()
    .then(() => {
      console.log('Connected to DB')
    })
    .catch((error) => console.log(error))
    var listdishesgarnire:string[]
    listdishesgarnire = ["Капуста жареная 150г","Капуста жареная кг","Капуста жареная с яйцом 150г","Капуста пекинская жареная с помидороми 150г","Картофель Айдахо дольками 100г","Картофель Айдахо из с/мороженого кг","каша перловая с луком и грибами 150г","Картофель жареный с луком 200г","Каша перловая со свеклой и овощами 150г","Лапша рисовая 200г","Лапша рисовая с куриным филе 350г","Лапша рисовая с орехами и овощами 370г","Лапша Соба 200г","Лапша Соба с курицей 360г","Макароны с жареными шампиньонами 150г","Паста карбонара с соусом бешамель(ветчиной,грибами,сыром)250г","Пюре картофельное по-домашнему 200г","Рис(жареный) с карри 150г","Рис золотистый 150г","Рис со стручковой фасолью и овощами 150г","Цветное овощное рагу 150г","Чечевица с овощами и грибами 200г","Фасоль с овощами 150г","Булгур с овощами 150г","Булгур с овощами","Кабачки жареные 200г","Кабачки тушеные с помидорами 200г","Капуста тушеная 200г","Капуста тушеная с помидорами 200г","Капуста цветная с растительным маслом 90/10г","Картофель отварной кг","Картофель отварной с маслом,зеленью 140/10/1г","Картофель фри/для салатов/кг","Картофель фри 100г","Каша гречневая постная 150г","Каша гречневая рассыпчатая 150г","Каша гречневая с грибами и луком 150г","Каша перловая кг","Каша перлова я овощами 130/20г","Овощная смесь с растительным маслом 90/10г","Пюре гороховое 200г","Пюре картофельное 200г","Рагу овощное 200г","Рагу овощное с баклажанами 150г","Рагу овощное с кабачками 200г","Рис отварной150г","Рис отварной с овощами(лук,морковь)150г","Рис пикантный150г","Рис постный150г","Рис с грибами и луком150г","Рис с овощами(морковь,лук,кукуруза,з/горошек)150г","Фасоль стручковая с маслом растительным90/10г","Рожки отварные200г","Спагети отварные150г","Фасоль с овощами150г"]
    var listdishespech:string[]
    listdishespech = ["безе со сливками и ананасом75г","беляш особый(свинина,капуста)80г","булочка осетинская (картофель,сыр,м-з,чеснок)100г","булочка осетинская (сыр,м-з,чеснок)100г","булочка сластена(творожная масса)50г","булочка французская с шоколадом70г","ватрушка с ветченой,сыром75г"]
    var listdishessalats:string[]
    listdishessalats = ["винегрет с горошком120","винегрет с сельдью80/30г","рыба под маринадом/горбуша/50/50г","пикша50/50г","салат аида с грецкими орехами100г","салат алеша 100г"]
    var listdishesnapit:string[]
    listdishesnapit =["компот из апельсинов 200г","компот из клубники200г","компот из малины200г","компот из облепихи200г","компот из свежих яблок с корицей и мятой200г","компот из черники200г","компот из черной смородины200г"]
    var listprof:string[]
    listprof = ["Заведующий производством","Повар","Пекарь кондитер","Кондитер","Мойщик кухонной посуды","Мойщик сервизной посуды","Помощник повара","Мойщик производственных помещений","Кассир","Продавец продовольственных товаров","Кладовщик","Заведующий складом","Калькулятор","Коренщик"]
    var listcategory = ["Напитки","Горячее","Гарниры","Выпечка","Салаты"]
    var listroles = ["managerstolovaya","director","superadmin","keeper","cooker","managerkeeper","cleaner","seller","calculator"]
    var listnames:string[]
    var listfam:string[]
    var listotch:string[]
    listnames=["Семён","Богдан","Кира","Максим","Полина","Кирилл"]
    listfam=["Кузнецов","Максимов","Морозова","Симонов","Макеева","Алексеев"]
    listotch=["Глебович","Львович","Адамовна","Семёнович","Фёдоровна","Леонидович"]
    // var workbook = XLSX.readFile('./src/tech.xlsx');
    // var worksheet = workbook.Sheets["Sheet1"]
    // var desired_cell;
    // for (var i=1; i <= 7; i++) {
    // desired_cell = worksheet['A'+i];
    // console.log(desired_cell.v);
    // }

    function isJsonString(str:string) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }
  
  function GetData(body:any,res:any)
  {
    body = Buffer.concat(body).toString();
    res.on('error', (err:string) => {
      console.error(err);
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
  }

    const ngrok = require('ngrok');
    ngrok.authtoken('2GuBDDtmUMvGx04gv6xhgUaVsPc_5Pyi3ytd1Ej7d14XkDiLf');
    ngrok.connect(8080).then((data:any)=>console.log(data))
    http.createServer(function (req:string|any, res:any) {

    const url = req.url;
    const method = req.method; 
    function Get(Class:any){
      function writeend(data:string):void {
        res.write(data)
        res.end()
      }
      const userRepository =  AppDataSource.getRepository(Class)
        userRepository.find().then(data=>writeend(JSON.stringify(data)))
    }

    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 86400000000);

    if (url.toString()  === `/tempcontrolpost` && method === 'POST') {
    
      let body:any| Uint8Array[]= [];
      req.on('error', (err:string) => {
        console.error(err);
      }).on('data', (chunk:string) => {
        body.push(chunk);
      }).on('end', async () => {
        GetData(body,res)
      if(isJsonString(body)==true)
        {
        let resjson = (JSON.parse(body))
        const TemperatureСontrol = new TemperatureСontrolLog()
        TemperatureСontrol.user = resjson.user
        TemperatureСontrol.temperature = resjson.temperature
        TemperatureСontrol.vlazhn = resjson.vlazhn
        TemperatureСontrol.sign = resjson.sign
        TemperatureСontrol.ConnectionDepartmentPlaces = resjson.connectionDepartmentPlace
        var created = new Date  
        TemperatureСontrol.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        TemperatureСontrol.time = `${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`
        if(typeof(TemperatureСontrol.user)=="number")
        {
          if(typeof(TemperatureСontrol.temperature)=="number")
          {
            if(typeof(TemperatureСontrol.vlazhn)=="number")
            {
              if(typeof(TemperatureСontrol.ConnectionDepartmentPlaces)=="number")
              {
                if(typeof(TemperatureСontrol.sign)== 'boolean')
                {
        AppDataSource.manager.save(TemperatureСontrol)
        res.write("TemperatureControlLog has been added"+JSON.stringify(TemperatureСontrol));
        res.end();
        console.log('TemperatureControl post')
      }}}}}
      else{
        res.write("ERROR! data error Data");
        res.end();
      }
    }
      else{
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
      });
    }
    else if (url.toString()  === `/healthpost` && method === 'POST') {
    
      let body:any| Uint8Array[]= [];
      req.on('error', (err:string) => {
        console.error(err);
      }).on('data', (chunk:string) => {
        body.push(chunk);
      }).on('end', () => {
        GetData(body,res)
      if(isJsonString(body)==true)
        {
        let resjson = (JSON.parse(body))
        const health = new Health()
        health.User = resjson.user
        health.Professions= resjson.proffesion
        health.okz = resjson.okz
        health.anginamark = resjson.anginamark
        health.diagnos = resjson.diagnos
        health.passtowork =resjson.passtowork
        var created = new Date  
        health.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        health.signSupervisor = resjson.signsupervisor
        health.signWorker = resjson.signworker
        
        if((typeof(health.signSupervisor)=='boolean'&&typeof(health.signWorker)=='boolean'&&health.User!=null&&(health.okz!=null&& (typeof(health.okz)=='boolean'))&&(health.anginamark!=null&& (typeof(health.anginamark)=='boolean')))&&health.diagnos!=null&&(health.passtowork!=null&&typeof(health.passtowork)=='boolean')&&typeof(health.Professions)=='number')
        {
        AppDataSource.manager.save(health)
        res.write("Health has been added"+JSON.stringify(health));
        res.end();
        console.log('Health post')
      }
      else{
        res.write("ERROR! data error Data");
        res.end();
      }
    }
      else{
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
      });
    }
    else if (url.toString()  === `/brackpost` && method === 'POST') {
    
      let body:any| Uint8Array[]= [];
      req.on('error', (err:string) => {
        console.error(err);
      }).on('data', (chunk:string) => {
        body.push(chunk);
      }).on('end', () => {
        GetData(body,res)
      if(isJsonString(body)==true)
        {
        let resjson = (JSON.parse(body))
        const brack = new Bracklog()
        brack.user = resjson.user
        brack.serveTime= resjson.serveTime
        brack.dish = resjson.dish
        brack.rating = resjson.rating
        brack.timespend = resjson.timespend
        brack.userdone = resjson.userdone
        brack.note = resjson.note
        var created = new Date  
        brack.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        if(brack.user!=null&&typeof(brack.serveTime)=='number'&&typeof(brack.dish)=='number'&&(brack.rating==1 || brack.rating==2 || brack.rating==3)&&typeof(brack.timespend)=='number'&&brack.userdone!=null&&brack.note!=null)
        {
          AppDataSource.manager.save(brack)
          res.write("BrackLog has been added"+JSON.stringify(brack));
          res.end();
          console.log('BrackLog post')
      }
      else{
        res.write("ERROR! data error Data");
        res.end();
      }
    }
      else{
        res.write("ERROR! Input isnt JSON");
        res.end();
      }
      });
    }
    else if (url.toString()  === `/userpost` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const user = new User()
          user.name = resjson.name
          user.fam = resjson.fam
          user.otch = resjson.otch
          user.deleted = false
          user.banned = false
          user.passwordToChange = false
          user.created = new Date
          if((user.name!=null&&user.fam!=null&&user.otch!=null&&typeof(user.deleted)=="boolean"&&typeof(user.banned)=="boolean"))
          {
            AppDataSource.manager.save(user)
            res.write("User has been added"+JSON.stringify(user));
            res.end();
            console.log('User post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
    }
      else if (url.toString()  === `/accountpost` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const account = new Account()
          account.login = resjson.login
          account.password = resjson.password
          account.user = resjson.user
          account.created = new Date
          if((account.login!=null&&account.password!=null&&account.user!=null))
          {
            AppDataSource.manager.save(account)
            res.write("Account has been added"+JSON.stringify(account));
            res.end();
            console.log('Account post')
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/categorypost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const category = new Categories()
          category.category= resjson.category
          var created = new Date  
          category.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(category.category)=="string")
          {
            AppDataSource.manager.save(category)
            res.write("Connection has been added"+JSON.stringify(category));
            res.end();
            console.log('Connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/professionpost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const profession = new Professions()
          profession.profession= resjson.profession
          if(typeof(profession.profession)=="string")
          {
            AppDataSource.manager.save(profession)
            res.write("Connection has been added"+JSON.stringify(profession));
            res.end();
            console.log('Profession post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/objectpost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const object = new Objects()
          object.object= resjson.object
          if(typeof(object.object)=="string")
          {
            AppDataSource.manager.save(object)
            res.write("Object has been added"+JSON.stringify(object));
            res.end();
            console.log('Object post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/placepost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          var created = new Date()
          var resjson = (JSON.parse(body))
          const place = new Places()
          place.place= resjson.place
          place.Object = resjson.object
          place.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(place.Object)=="number"&&typeof(place.place)=='string')
          {
            AppDataSource.manager.save(place)
            res.write("Place has been added"+JSON.stringify(place));
            res.end();
            console.log('Place post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/departmentpost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          var resjson = (JSON.parse(body))
          const department = new Typedepartment()
          department.department= resjson.department
          if(typeof(department.department)=="string")
          {
            AppDataSource.manager.save(department)
            res.write("Department has been added"+JSON.stringify(department));
            res.end();
            console.log('Department post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/categoryondishpost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const Connect = new ConnectionCategoryDish()
          Connect.Dish = resjson.dish
          Connect.Category= resjson.category
          var created = new Date  
          Connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(Connect.Dish)=="number"&&typeof(Connect.Category)=='number')
          {
            AppDataSource.manager.save(Connect)
            res.write("Connection has been added"+JSON.stringify(Connect));
            res.end();
            console.log('Connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/rolepost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const role = new Roles()
          role.role= resjson.role
          if(typeof(role.role)=="string")
          {
            AppDataSource.manager.save(role)
            res.write("Connection has been added"+JSON.stringify(role));
            res.end();
            console.log('Role post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/fridgepost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const fridge = new Fridges()
          fridge.appliance= resjson.appliance
          fridge.normalpoint = resjson.normalPoint
          fridge.startnormalpoint = resjson.startNormalPoint
          fridge.endnormalpoint = resjson.endNormalPoint
          if(typeof(fridge.appliance)=="string"&&typeof(fridge.startnormalpoint)=='number'&&typeof(fridge.endnormalpoint)=='number'&&typeof(fridge.normalpoint)=='string')
          {
            AppDataSource.manager.save(fridge)
            res.write("Fridge has been added"+JSON.stringify(fridge));
            res.end();
            console.log('Fridge post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/lamppost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const lamp = new Lamps()
          lamp.appliance= resjson.appliance
          lamp.startnormalpoint = resjson.startNormalPoint
          lamp.endnormalpoint = resjson.endNormalPoint
          lamp.normalpoint = resjson.normalPoint
          if(typeof(lamp.appliance)=="string"&&typeof(lamp.startnormalpoint)=='number'&&typeof(lamp.endnormalpoint)=='number'&&typeof(lamp.normalpoint)=='string')
          {
            AppDataSource.manager.save(lamp)
            res.write("Lamp has been added"+JSON.stringify(lamp));
            res.end();
            console.log('Fridge post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/lampintemperaturelog` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const connection = new ConnectionLampsTemperatureLog()
          connection.Lamp= resjson.lamp
          connection.TemperatureСontrolLog = resjson.temperatureControl
          if(typeof(connection.Lamp)=="number"&&typeof(connection.TemperatureСontrolLog)=='number')
          {
            AppDataSource.manager.save(connection)
            res.write("Lamp connection has been added"+JSON.stringify(connection));
            res.end();
            console.log('Lamp connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/fridgeintemperaturelog` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const connection = new ConnectionFridgesTemperatureLog()
          connection.Fridges= resjson.fridge
          connection.TemperatureСontrolLog = resjson.temperatureControl
          if(typeof(connection.Fridges)=="number"&&typeof(connection.TemperatureСontrolLog)=='number')
          {
            AppDataSource.manager.save(connection)
            res.write("Fridge connection has been added"+JSON.stringify(connection));
            res.end();
            console.log('Fridge connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/roleonuserpost` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const connect = new ConnectionUserRole()
          connect.Roles= resjson.role
          connect.User = resjson.user
          var created = new Date  
          connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(connect.Roles)=="number"&&typeof(connect.User)=="number")
          {
            AppDataSource.manager.save(connect)
            res.write("Connection has been added"+JSON.stringify(connect));
            res.end();
            console.log('Connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/departmentofplace` && method === 'POST') {
    
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', () => {
          GetData(body,res)
        if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const connectDepartment = new ConnectionDepartmentPlaces()
          connectDepartment.Place= resjson.place
          connectDepartment.Typedepartment = resjson.department
          var created = new Date  
          connectDepartment.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(connectDepartment.Place)=="number"&&typeof(connectDepartment.Typedepartment)=="number")
          {
            AppDataSource.manager.save(connectDepartment)
            res.write("Connection has been added"+JSON.stringify(connectDepartment));
            res.end();
            console.log('Connection post')
        }
        else{
          res.write("ERROR! data error Data");
          res.end();
        }
      }
        else{
          res.write("ERROR! Input isnt JSON");
          res.end();
        }
        });
      }
      else if (url.toString()  === `/userupdate` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const userRepository = AppDataSource.getRepository(User)
          var userToUpdate:any
          userToUpdate = await userRepository.findOneBy({
            id: resjson.user,
        })        
        userToUpdate.deleted= resjson.deleted
        userToUpdate.banned= resjson.banned
        userToUpdate.passwordToChange = resjson.passwordToChange
        if((typeof(resjson.banned)=='boolean'&&typeof(resjson.deleted)=='boolean'&&typeof(resjson.passwordToChange)=='boolean'))
        {
          userRepository.manager.save(userToUpdate)
          res.write("User has been updated"+JSON.stringify(userToUpdate));
          res.end();
          console.log('User update')
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/passwordrestore` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const accRepository = AppDataSource.getRepository(Account)
          var accRepositoyrToUpdate:any
          accRepositoyrToUpdate = await accRepository.findOneBy({
            id: resjson.account,
        })        
        accRepositoyrToUpdate.password= resjson.password
        if((resjson.password!=null))
        {
          accRepository.manager.save(accRepositoyrToUpdate)
          res.write("Account has been updated"+JSON.stringify(accRepositoyrToUpdate));
          res.end();
          console.log('Password update')
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/toggledishinmenu` && method === 'POST') {
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const dishRepository = AppDataSource.getRepository(Dishes)
          var dishRepositoyrToUpdate:any
          dishRepositoyrToUpdate = await dishRepository.findOneBy({
            id: resjson.dish,
        })        
        dishRepositoyrToUpdate.active= resjson.active
        if((typeof(resjson.active)=='boolean')&&(dishRepositoyrToUpdate!=null))
        {
          dishRepository.manager.save(dishRepositoyrToUpdate)
          res.write("Dish has been toggled"+JSON.stringify(dishRepositoyrToUpdate));
          res.end();
          console.log('Dish toggled')
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/updatedish` && method === 'POST') {
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const dishRepository = AppDataSource.getRepository(Dishes)
          var dishRepositoyrToUpdate:any
          dishRepositoyrToUpdate = await dishRepository.findOneBy({
            id: resjson.id,
        })        
        dishRepositoyrToUpdate.dish = resjson.dish
        if((typeof(resjson.dish)=='string'))
        {
          dishRepository.manager.save(dishRepositoyrToUpdate)
          console.log('Dish updated')
          res.write("Dish has been updated"+JSON.stringify(dishRepositoyrToUpdate));
          res.end();
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
       else if (url.toString()  === `/roleupdate` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          GetData(body,res)
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const userRepository = AppDataSource.getRepository(ConnectionUserRole)
          var userRepositoyrToUpdate:any
          userRepositoyrToUpdate = await userRepository.findOneBy({
            User: resjson.user,
        })        
        userRepositoyrToUpdate.Roles= resjson.role
        
        if((typeof(userRepositoyrToUpdate.Roles)=='number')&&(userRepositoyrToUpdate!=null))
        {
          userRepository.manager.save(userRepositoyrToUpdate)
          res.write("Role has been updated"+JSON.stringify(userRepositoyrToUpdate));
          res.end();
          console.log('Role updated')
        }
          else{
            res.write("ERROR! data error Data");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
else if (url.toString()  === `/usersget`) {
Get(User)
}
else if (url.toString()  === `/fridgesget`) {
Get(Fridges)
}
else if (url.toString()  === `/lampsget`) {
Get(Lamps)
}
else if (url.toString()  === `/categoriesget`) {
  Get(Categories)
}
else if (url.toString() === '/connectioncategorydishget')
{
  Get(ConnectionCategoryDish)
}
else if (url.toString() === '/connectionlampcontrolget')
{
  Get(ConnectionLampsTemperatureLog)
}
else if (url.toString() === '/connectionfridgecontrolget')
{
  Get(ConnectionFridgesTemperatureLog)
}
else if (url.toString() === '/connectionuserroleget')
{
  Get(ConnectionUserRole)
}
else if (url.toString() === '/rolesget')
{
  Get(Roles)
}
else if (url.toString() === '/departmentsget')
{
  Get(Typedepartment)
}
else if (url.toString() === '/placesget')
{
  Get(Places)
}
else if (url.toString() === '/objectsget')
{
  Get(Objects)
}
else if (url.toString()  === `/professionsget`) {
Get(Professions)
}
else if (url.toString()  === `/dishesget`) {
Get(Dishes)
}
else if (url.toString()  === `/brackget`) {  
Get(Bracklog)
}

else if (url.toString()  === `/accountget`) {  
Get(Account)
}
else if (url.toString()  === `/tempcontrolget`) {  
Get(TemperatureСontrolLog)
}
else if (url.toString()  === `/healthget`) {  
Get(Health)
}
else if (url.toString()==='/dishes1')
{
  var created = new Date;
  for(let i=0;i<=listdishesgarnire.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishesgarnire[i]
    dishes.active = true
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishesnapit.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishesnapit[i]
    dishes.active = true
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishespech.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishespech[i]
    dishes.active = true
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishessalats.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishessalats[i]
    dishes.active = true
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
res.write("Done dishes")
res.end();
}
else if (url.toString()==='/category1')
{
  var created = new Date
  for(var i=0;i<=listcategory.length-1;i++)
  {
  const category = new Categories
  category.category = listcategory[i];
  category.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
  AppDataSource.manager.save(category)
  } 
res.write("Done categories")
res.end();
}

else if(url.toString()==='/roles1')
{
  var created = new Date
  for(var i=0;i<=listroles.length-1;i++)
  {
  const role = new Roles
  role.role = listroles[i];
  AppDataSource.manager.save(role)
  
  }
  res.write("Done roles")
  res.end(); 
}

else if (url.toString()==='/connectcategory1')
{
  var created = new Date
for(var i=1;i<=55;i++)
{
const connect = new ConnectionCategoryDish
connect.Dish = i
connect.Category = 2
connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
AppDataSource.manager.save(connect)
}

for(var i=56;i<=63;i++)
{

const connect = new ConnectionCategoryDish
connect.Dish = i
connect.Category = 3
connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
AppDataSource.manager.save(connect)
}
for(var i=64;i<=69;i++)
{
const connect = new ConnectionCategoryDish
connect.Dish = i
connect.Category = 4
connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
AppDataSource.manager.save(connect)
}

for(var i=70;i<=75;i++)
{
const connect = new ConnectionCategoryDish
connect.Dish = i
connect.Category = 5
connect.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
AppDataSource.manager.save(connect)
}

  res.write("Done connection")
res.end();
}
else if (url.toString()==='/users1')
{

  for(let i=0;i<listnames.length;i++)
{
  var created = new Date()
  const user = new User()
  user.name= listnames[i]
  user.fam= listfam[i]
  user.otch= listotch[i]
  user.created = created
  user.deleted = false
  user.banned = false
  user.passwordToChange = false
  AppDataSource.manager.save(user)
}
res.write("Done users")
res.end();
}
else if (url.toString()==='/professions1')
{
  for(let i=0;i<=listprof.length-1;i++)
{
  const prof = new Professions()
  prof.profession= listprof[i]
    AppDataSource.manager.save(prof)
}
res.write("Done profs")
res.end();
}
  else {
    res.write("ERROR! No API")
    res.end()
  }

  
}).listen(8080, function () {
    console.log("Server started at 8080 port");
})