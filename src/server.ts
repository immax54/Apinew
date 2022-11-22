import "reflect-metadata"
const http =  require("http");
import { DataSource} from "typeorm";
var XLSX = require('xlsx');
import {User} from "./entities/Client";
import { Bracklog } from "./entities/Brack";
import { Health } from "./entities/Health";
import { TemperatureСontrolLog } from "./entities/TemperatureСontrol";
import { Account } from "./entities/Accounts";
import {Professions} from "./entities/Professions"
import { Dishes } from "./entities/Dishes";
 const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", 
    port: 5432,
    username: "ubuntu",
    password:undefined,
    database: "pi",
    entities:[User, Bracklog, Health,TemperatureСontrolLog,Account,Dishes,Professions],
    synchronize:true
})
AppDataSource.initialize()
    .then(() => {
      console.log('DB connect')
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
    // var workbook = XLSX.readFile('./src/tech.xlsx');
    // var worksheet = workbook.Sheets["Sheet1"]
    // var desired_cell;
    // for (var i=1; i <= 7; i++) {
    // desired_cell = worksheet['A'+i];
    // console.log(desired_cell.v);
    // }

    const ngrok = require('ngrok');
    ngrok.authtoken('2GuBDDtmUMvGx04gv6xhgUaVsPc_5Pyi3ytd1Ej7d14XkDiLf');
    ngrok.connect(8080).then((data:any)=>console.log(data))
    http.createServer(function (req:string|any, res:any) {

    const url = req.url;
    const method = req.method; 

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
        body = Buffer.concat(body).toString();
        res.on('error', (err:string) => {
          console.error(err);
        });
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        function isJsonString(str:string) {
          try {
              JSON.parse(str);
          } catch (e) {
              return false;
          }
          return true;
      }
      if(isJsonString(body)==true)
        {
        let resjson = (JSON.parse(body))
        const TemperatureСontrol = new TemperatureСontrolLog()
        TemperatureСontrol.user = resjson.user
        TemperatureСontrol.temperature = resjson.temperature
        TemperatureСontrol.vlazhn = resjson.vlazhn
        TemperatureСontrol.sign = resjson.sign
        TemperatureСontrol.warehouse= resjson.warehouse
        var created = new Date  
        TemperatureСontrol.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        TemperatureСontrol.time = `${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`
        console.log('DB connect')
        var UsersArray:[];
        const userRepository =  AppDataSource.getRepository(User)
        userRepository.find().then(data =>UsersArray)
      if(typeof(TemperatureСontrol.user)=="number")
      {
      if(typeof(TemperatureСontrol.temperature)=="number")
      {
      if(typeof(TemperatureСontrol.vlazhn)=="number")
      {
      if(typeof(TemperatureСontrol.warehouse=="string"))
      {
      if(typeof(TemperatureСontrol.sign)== 'boolean')
      {
        AppDataSource.manager.save(TemperatureСontrol)
        res.write("User has been added"+JSON.stringify(TemperatureСontrol) + JSON.stringify({"created":TemperatureСontrol.date.toString()}));
        res.end();
      }
      else{        res.write("ERROR! sign isnt type bool");
      res.end();}
      }
      else{
        res.write("ERROR! warehouse isnt type string");
        res.end();
      }
    }
    else{
      res.write("ERROR! vlazhn isnt type string");
      res.end();
    }
  }
  else{
    res.write("ERROR! temperature isnt type string");
    res.end();
  }
}
      else{
        res.write("ERROR! User isnt type number");
        res.end();
      }
    }
      else{
        res.write("ERROR! Type of JSON input");
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
        body = Buffer.concat(body).toString();
        res.on('error', (err:string) => {
          console.error(err);
        });
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        function isJsonString(str:string) {
          try {
              JSON.parse(str);
          } catch (e) {
              return false;
          }
          return true;
      }
      if(isJsonString(body)==true)
        {
        let resjson = (JSON.parse(body))
        const health = new Health()
        health.User = resjson.user
        health.proffesion= resjson.proffesion
        health.okz = resjson.okz
        health.anginamark = resjson.anginamark
        health.diagnos = resjson.diagnos
        health.passtowork =resjson.passtowork
        var created = new Date  
        health.date = `${created.getDate()}-${created.getMonth()+1}-${created.getFullYear()}`
        health.signSupervisor = resjson.signsupervisor
        health.signWorker = resjson.signworker
        console.log('DB connect')
        
      if((typeof(health.signSupervisor)=='boolean'&&typeof(health.signWorker)=='boolean'&&health.User!=null&&(health.okz!=null&& (typeof(health.okz)=='boolean'))&&(health.anginamark!=null&& (typeof(health.anginamark)=='boolean')))&&health.diagnos!=null&&(health.passtowork!=null&&typeof(health.passtowork)=='boolean')&&health.proffesion!=null)
      {
        AppDataSource.manager.save(health)
        res.write("User has been added"+JSON.stringify(health));
        res.end();
      }
      else{
        res.write("ERROR! data error JSON");
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
        body = Buffer.concat(body).toString();
        res.on('error', (err:string) => {
          console.error(err);
        });
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        function isJsonString(str:string) {
          try {
              JSON.parse(str);
          } catch (e) {
              return false;
          }
          return true;
      }
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
        console.log('DB connect')
      if(brack.user!=null&&typeof(brack.serveTime)=='number'&&brack.dish!=null&&(brack.rating==1 || brack.rating==2 || brack.rating==3)&&typeof(brack.timespend)=='number'&&brack.userdone!=null&&brack.note!=null)
      {
        AppDataSource.manager.save(brack)
        res.write("User has been added"+JSON.stringify(brack));
        res.end();
      }
      else{
        res.write("ERROR! data error JSON");
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
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const user = new User()
          user.name = resjson.name
          user.fam = resjson.fam
          user.otch = resjson.otch
          user.role = resjson.role
          user.deleted = false
          user.banned = false
          user.created = new Date
          console.log('DB connect')
        if((user.name!=null&&user.fam!=null&&user.otch!=null&&user.role!=null&&typeof(user.deleted)=="boolean"&&typeof(user.banned)=="boolean"))
        {
          AppDataSource.manager.save(user)
          res.write("User has been added"+JSON.stringify(user));
          res.end();
        }
        else{
          res.write("ERROR! data error JSON");
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
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const account = new Account()
          account.login = resjson.login
          account.password = resjson.password
          account.user = resjson.user
          account.created = new Date
          console.log('DB connect')
        if((account.login!=null&&account.password!=null&&account.user!=null))
        {
          AppDataSource.manager.save(account)
          res.write("User has been added"+JSON.stringify(account));
          res.end();
        }
          else{
            res.write("ERROR! data error JSON");
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
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
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
          console.log('DB connect')
        if((resjson.banned!=null&&resjson.deleted!=null))
        {
          userRepository.manager.save(userToUpdate)
          res.write("User has been updated"+JSON.stringify(userToUpdate));
          res.end();
        }
          else{
            res.write("ERROR! data error JSON");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/passwordupdate` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const accRepository = AppDataSource.getRepository(Account)
          var accRepositoyrToUpdate:any
          accRepositoyrToUpdate = await accRepository.findOneBy({
            id: resjson.account,
        })        
        accRepositoyrToUpdate.password= resjson.password
          console.log('DB connect')
        if((resjson.password!=null))
        {
          accRepository.manager.save(accRepositoyrToUpdate)
          res.write("User has been updated"+JSON.stringify(accRepositoyrToUpdate));
          res.end();
        }
          else{
            res.write("ERROR! data error JSON");
            res.end();
          }
        }
          else{
            res.write("ERROR! Input isnt JSON");
            res.end();
          }
          });
      }
      else if (url.toString()  === `/activeupdate` && method === 'POST') {
        
        let body:any| Uint8Array[]= [];
        req.on('error', (err:string) => {
          console.error(err);
        }).on('data', (chunk:string) => {
          body.push(chunk);
        }).on('end', async () => {
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const dishRepository = AppDataSource.getRepository(Dishes)
          var dishRepositoyrToUpdate:any
          dishRepositoyrToUpdate = await dishRepository.findOneBy({
            id: resjson.dish,
        })        
        dishRepositoyrToUpdate.active= resjson.active
          console.log('DB connect')
        if((typeof(resjson.active)=='boolean')&&(dishRepositoyrToUpdate!=null))
        {
          dishRepository.manager.save(dishRepositoyrToUpdate)
          res.write("Dish has been updated"+JSON.stringify(dishRepositoyrToUpdate));
          res.end();
        }
          else{
            res.write("ERROR! data error JSON");
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
          body = Buffer.concat(body).toString();
          res.on('error', (err:string) => {
            console.error(err);
          });
      
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          function isJsonString(str:string) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
          if(isJsonString(body)==true)
          {
          let resjson = (JSON.parse(body))
          const userRepository = AppDataSource.getRepository(User)
          var userRepositoyrToUpdate:any
          userRepositoyrToUpdate = await userRepository.findOneBy({
            id: resjson.user,
        })        
        userRepositoyrToUpdate.role= resjson.role
          console.log('DB connect')
        if((typeof(userRepositoyrToUpdate.role)=='string')&&(userRepositoyrToUpdate!=null))
        {
          userRepository.manager.save(userRepositoyrToUpdate)
          res.write("Users role has been updated"+JSON.stringify(userRepositoyrToUpdate));
          res.end();
        }
          else{
            res.write("ERROR! data error JSON");
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
      function writeend(data:string):void {
        res.write(data)
        res.end()
      }
      const userRepository =  AppDataSource.getRepository(User)
        userRepository.find().then(data=>writeend(JSON.stringify(data)))
      }

    else if (url.toString()  === `/professionsget`) {
      function writeend(data:string):void {
        res.write(data)
        res.end()
      }
      const userRepository =  AppDataSource.getRepository(Professions)
        userRepository.find().then(data=>writeend(JSON.stringify(data)))
      }

      else if (url.toString()  === `/dishesget`) {
        function writeend(data:string):void {
          res.write(data)
          res.end()
        }
        const userRepository =  AppDataSource.getRepository(Dishes)
          userRepository.find().then(data=>writeend(JSON.stringify(data)))
        }

  else if (url.toString()  === `/brackget`) {  
    function writeend(data:string):void {
      res.write(data)
      res.end()
    }
    const BrackRepository =  AppDataSource.getRepository(Bracklog)
    BrackRepository.find().then(data =>writeend(JSON.stringify(data)))
}
else if (url.toString()  === `/accountget`) {  
  function writeend(data:string):void {
    res.write(data)
    res.end()
  }
  const AccountRep =  AppDataSource.getRepository(Account)
  AccountRep.find().then(data =>writeend(JSON.stringify(data)))
}
else if (url.toString()  === `/tempcontrolget`) {  
  function writeend(data:String):void {
    res.write(data)
    res.end()
  }
  const TempRepository =  AppDataSource.getRepository(TemperatureСontrolLog)
  TempRepository.find().then(data =>writeend(JSON.stringify(data)))
}
else if (url.toString()  === `/healthget`) {  
  function writeend(data:string):void {
    res.write(data)
    res.end()
  }
  const HealthRepository =  AppDataSource.getRepository(Health)
  HealthRepository.find().then(data =>writeend(JSON.stringify(data)))
}
else if (url.toString()==='/dishes')
{
  for(let i=0;i<=listdishesgarnire.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishesgarnire[i]
    dishes.active = true
    dishes.category = "Гарниры"
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishesnapit.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishesnapit[i]
    dishes.active = true
    dishes.category = "Напитки"
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishespech.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishespech[i]
    dishes.active = true
    dishes.category = "Выпечка"
    AppDataSource.manager.save(dishes)
}
for(let i=0;i<=listdishessalats.length-1;i++)
{
  const dishes = new Dishes()
    dishes.dish = listdishessalats[i]
    dishes.active = true
    dishes.category = "Салаты"
    AppDataSource.manager.save(dishes)
}
res.write("Done dishes")
res.end();
}
else if (url.toString()==='/professions')
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
