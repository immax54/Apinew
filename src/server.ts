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
import { Roles } from "./entities/Roles";
import { ConnectionUserRole } from "./entities/ConnectionUserRole";
import { Subject } from "./entities/Objects";
import { Places } from "./entities/Places";
import { Department } from "./entities/Typedepartment";
import { ConnectionUserProfession } from "./entities/ConnectionUserProfession copy";
import { Appliance } from "./entities/Devices";
import { NotificationsTempcontrolLog } from "./entities/NotificationsTempcontrolLog";
 const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", 
    port: 5432,
    username: "postgres",
    password:"123",
    database: "postgres",
    entities:[User,NotificationsTempcontrolLog, Bracklog, Appliance,Health,TemperatureСontrolLog,Account,Dishes,Professions, Categories,Roles,ConnectionUserRole,Places,Subject,Department,ConnectionUserProfession],
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
  function sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
    const ngrok = require('ngrok');
    ngrok.authtoken('2GuBDDtmUMvGx04gv6xhgUaVsPc_5Pyi3ytd1Ej7d14XkDiLf');
    ngrok.connect(8080).then((data:any)=>console.log(data))
    http.createServer(async function (req:string|any, res:any) {

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
        const TempcontrolRepository =  AppDataSource.getRepository(TemperatureСontrolLog)
        let resjson = (JSON.parse(body))
        const TemperatureСontrol = new TemperatureСontrolLog()
        TemperatureСontrol.user = resjson.user
        TemperatureСontrol.temperature = resjson.temperature
        TemperatureСontrol.vlazhn = resjson.vlazhn
        TemperatureСontrol.sign = false
        TemperatureСontrol.Appliance = resjson.appliance
        var created = new Date  
        TemperatureСontrol.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        TemperatureСontrol.time = `${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`
        if(typeof(TemperatureСontrol.user)=="number")
        {
          if(typeof(TemperatureСontrol.temperature)=="number")
          {
            if(typeof(TemperatureСontrol.vlazhn)=="number")
            {
              if(typeof(TemperatureСontrol.Appliance)=="number")
              {
                if(typeof(TemperatureСontrol.sign)== 'boolean')
                {
        AppDataSource.manager.save(TemperatureСontrol)
     async function NotificationPost(data:number){

      await sleep(2500);
      const Notification  = new NotificationsTempcontrolLog()
        Notification.User = resjson.user
        created = new Date()
        Notification.TemperatureСontrolLog=data+1
        Notification.created = created
        Notification.statusOfSign = false
        Notification.statusNotification = false
        AppDataSource.manager.save(Notification)
        res.write(JSON.stringify(Notification))
     }
        var id = TemperatureСontrol.id
        var FindOne =   TempcontrolRepository.find({select:{id:true},where:{id:id}}).then(data=>(data.slice(-1)[0].id))
     FindOne.then(data=>NotificationPost(data))
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
        health.ConnectionUserProfession = resjson.connectionUserProfession
        health.okz = resjson.okz
        health.anginamark = resjson.anginamark
        health.diagnos = resjson.diagnos
        health.passtowork = false
        var created = new Date  
        health.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        health.signSupervisor = false
        health.signWorker = false
        
        if((typeof(health.signSupervisor)=='boolean'&&typeof(health.signWorker)=='boolean'&&health.User!=null&&(health.okz!=null&& (typeof(health.okz)=='boolean'))&&(health.anginamark!=null&& (typeof(health.anginamark)=='boolean')))&&health.diagnos!=null&&(health.passtowork!=null&&typeof(health.passtowork)=='boolean')&&typeof(health.ConnectionUserProfession)=='number')
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
          user.requestToChange = false
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
          category.name= resjson.category
          var created = new Date  
          category.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(category.name)=="string")
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
      else if (url.toString()  === `/dishpost` && method === 'POST') {
    
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
          const dish = new Dishes()
          dish.active = true
          dish.dish= resjson.dish
          dish.Category = resjson.category
          var created = new Date  
          dish.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(dish.dish)=="string"&&typeof(dish.Category)=="number")
          {
            AppDataSource.manager.save(dish)
            res.write("Connection has been added"+JSON.stringify(dish));
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
          profession.name= resjson.profession
          if(typeof(profession.name)=="string")
          {
            AppDataSource.manager.save(profession)
            res.write("Profession has been added"+JSON.stringify(profession));
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
      else if (url.toString()  === `/professionuserpost` && method === 'POST') {
    
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
          const profession = new ConnectionUserProfession()
          profession.User= resjson.user
          profession.Professions= resjson.profession
          const created = new Date()
          profession.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(profession.User)=="number"&&typeof(profession.Professions)=="number")
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
      else if (url.toString()  === `/subjectpost` && method === 'POST') {
    
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
          const object = new Subject()
          object.name= resjson.name
          if(typeof(object.name)=="string")
          {
            AppDataSource.manager.save(object)
            res.write("Subject has been added"+JSON.stringify(object));
            res.end();
            console.log('Subject post')
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
          place.name= resjson.name
          place.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(place.name)=='string')
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
          const department = new Department()
          department.name= resjson.name
          if(typeof(department.name)=="string")
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
          role.name= resjson.name
          if(typeof(role.name)=="string")
          {
            AppDataSource.manager.save(role)
            res.write("Role has been added"+JSON.stringify(role));
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
      else if (url.toString()  === `/appliancepost` && method === 'POST') {
    
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
          const appliance = new Appliance()
          appliance.name= resjson.name
          appliance.normalpoint= resjson.normalpoint
          appliance.startnormalpoint = resjson.startnormalpoint
          appliance.endnormalpoint = resjson.endnormalpoint
          appliance.Subject = resjson.subject
          appliance.Place = resjson.place
          appliance.Department = resjson.department
          var created = new Date  
          appliance.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
          if(typeof(appliance.name)=="string"&&typeof(appliance.normalpoint)=="string"&&typeof(appliance.startnormalpoint)=="number"&&typeof(appliance.endnormalpoint)=="number")
          {
            AppDataSource.manager.save(appliance)
            res.write("Connection has been added"+JSON.stringify(appliance));
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
        userToUpdate.requestToChange = resjson.requestToChange
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
          if(typeof(resjson.dish)!=='object')
          {res.write("ERROR! dish isnt array error");res.end();}
          for(let i = 0; i<resjson.dish.length;i++)
          {
          const dishRepository = AppDataSource.getRepository(Dishes)
          var dishRepositoyrToUpdate:any
          if (typeof(resjson.dish[i])!=='number')
          { res.write(`ERROR! dish ${resjson.dish[i]} not number error`);resjson.dish[i]=resjson.dish[i+1] }
          dishRepositoyrToUpdate = await dishRepository.findOneBy({
            id: resjson.dish[i],
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
       else if (url.toString()  === `/roleonuserupdate` && method === 'POST') {
        
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
else if (url.toString()  === `/categoriesget`) {
  Get(Categories)
}
else if (url.toString() === '/connectionuserroleget')
{
  function writeend(data:any):void {
    res.write(data)
    res.end()
  }
  const rolesRepository =  AppDataSource.getRepository(ConnectionUserRole)
  rolesRepository.createQueryBuilder('RolesOnUser')
  .select("RolesOnUser.User")
  .leftJoin("RolesOnUser.User","User")
  .addSelect(["User.fam","User.name","User.otch"])
  .leftJoin("RolesOnUser.Roles","Roles")
  .addSelect(["Roles.name"])
  .getMany()
  .then(data=>writeend(JSON.stringify(data)))                   
}
else if (url.toString() === '/rolesget')
{
  Get(Roles)
}
else if (url.toString() === '/departmentsget')
{
  Get(Department)
}

else if (url.toString() === '/placesget')
{
  Get(Places)
}


else if (url.toString() === '/appliancesget')
{
  function writeend(data:any):void {
    res.write(data)
    res.end()
  }
  const TempcontrolRepository =  AppDataSource.getRepository(Appliance)
  TempcontrolRepository.createQueryBuilder('Appliance')
  .leftJoin("Appliance.Subject","Subject")
  .addSelect(["Subject.name"])
  .leftJoin("Appliance.Place","Place")
  .addSelect(["Place.name"])
  .leftJoin("Appliance.Department","Department")
  .addSelect(["Department.name"])
  .getMany()
  .then(data=>writeend(JSON.stringify(data)))    
}


else if (url.toString() === '/subjectsget')
{
  Get(Subject)
}
else if (url.toString()  === `/professionsget`) {
Get(Professions)
}
else if (url.toString()  === `/professiononuserget`) {
  function writeend(data:any):void {
    res.write(data)
    res.end()
  }
  const rolesRepository =  AppDataSource.getRepository(ConnectionUserProfession)
  rolesRepository.createQueryBuilder('ProfessionOnUser')
  .select("ProfessionOnUser.User")
  .leftJoin("ProfessionOnUser.User","User")
  .addSelect(["User.fam","User.name","User.otch"])
  .leftJoin("ProfessionOnUser.Professions","Professions")
  .addSelect(["Professions.name"])
  .getMany()
  .then(data=>writeend(JSON.stringify(data)))           
  }
else if (url.toString()  === `/dishesget`) {
  function writeend(data:any):void {
    res.write(data)
    res.end()
  }
  const rolesRepository =  AppDataSource.getRepository(Dishes)
  rolesRepository.createQueryBuilder('Dishes')
  .leftJoin("Dishes.Category","Category")
  .addSelect("Category.name")
  .getMany()
  .then(data=>writeend(JSON.stringify(data)))     
}
else if (url.toString()  === `/brackget`) {  
Get(Bracklog)
}

else if (url.toString()  === `/accountget`) {  
Get(Account)
}
else if (url.toString()  === `/tempcontrolget`) {  
  function writeend(data:any):void {
    res.write(data)
    res.end()
  }
  const TempcontrolRepository =  AppDataSource.getRepository(TemperatureСontrolLog)
  TempcontrolRepository.createQueryBuilder('Tempcontrol')
  .leftJoin("Tempcontrol.Appliance","Appliance")
  .addSelect(["Appliance.name"])
  .leftJoin("Appliance.Subject","Subject")
  .addSelect(["Subject.name"])
  .leftJoin("Appliance.Place","Place")
  .addSelect(["Place.name"])
  .leftJoin("Appliance.Department","Department")
  .addSelect(["Department.name"])
  .getMany()
  .then(data=>writeend(JSON.stringify(data)))                                    
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
    dishes.Category = 1
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishesnapit.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishesnapit[i]
    dishes.active = true
    dishes.Category = 2
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishespech.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishespech[i]
    dishes.active = true
    dishes.Category = 3
    dishes.created = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishessalats.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishessalats[i]
    dishes.active = true
    dishes.Category = 4
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
  category.name = listcategory[i];
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
  role.name = listroles[i];
  AppDataSource.manager.save(role)
  
  }
  res.write("Done roles")
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
  user.requestToChange = false
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
  prof.name= listprof[i]
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