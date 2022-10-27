import "reflect-metadata"
const http =  require("http");
import { DataSource, Not,IsNull, Repository } from "typeorm";
import {User} from "./entities/Client";
import { Bracklog } from "./entities/Brack";
import { Health } from "./entities/Health";
import { TemperatureСontrolLog } from "./entities/TemperatureСontrol";
 const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ubuntu",
    password:undefined,
    database: "pi",
    entities:[User, Bracklog, Health,TemperatureСontrolLog],
    synchronize:true
})
AppDataSource.initialize()
    .then(() => {
      console.log('DB connect')
    })
    .catch((error) => console.log(error))


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
        TemperatureСontrol.warehouse= resjson.warehouse
        TemperatureСontrol.created = new Date
        console.log('DB connect')
        async function findvalid(rep:any)
        {
          const find =  AppDataSource.getRepository(rep)
          return await  find.findOne({
          where: { 
            user: Not(IsNull())
          }  
      });
    }
    const find =  AppDataSource.getRepository(TemperatureСontrolLog)
      if((((TemperatureСontrol.user!=null&&(await findvalid(TemperatureСontrolLog)!=null)&&TemperatureСontrol.temperature!=null&&TemperatureСontrol.vlazhn!=null&&TemperatureСontrol.warehouse!=null))))
      {
        AppDataSource.manager.save(TemperatureСontrol)
        res.write("User has been added"+JSON.stringify(TemperatureСontrol));
        res.end();
      }
      else{
        res.write("ERROR! data error in JSON");
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
        health.user = resjson.user
        health.proffesion= resjson.proffesion
        health.okz = resjson.okz
        health.anginamark = resjson.anginamark
        health.diagnos = resjson.diagnos
        health.passtowork =resjson.passtowork
        health.created = new Date
        console.log('DB connect')
        
      if((health.user!=null&&(health.okz!=null&& (typeof(health.okz)=='boolean'))&&(health.anginamark!=null&& (typeof(health.anginamark)=='boolean')))&&health.diagnos!=null&&(health.passtowork!=null&&typeof(health.passtowork)=='boolean')&&health.proffesion!=null)
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
        brack.acception= resjson.acception
        brack.dish = resjson.dish
        brack.dishmark = resjson.dishmark
        brack.timespend = resjson.timespend
        brack.userdone =resjson.userdone
        brack.created = new Date
        console.log('DB connect')
      if(brack.user!=null&&brack.acception!=null&&brack.dish!=null&&brack.dishmark!=null&&brack.timespend!=null&&brack.userdone!=null)
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
          user.created = new Date
          console.log('DB connect')
        if((user.name!=null&&user.fam!=null&&user.otch!=null&&user.role!=null))
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
    else if (url.toString()  === `/usersget`) {
      function writeend(data:string):void {
        res.write(data)
        res.end()
      }
      const userRepository =  AppDataSource.getRepository(User)
      userRepository.find().then(data =>writeend(JSON.stringify(data)))
  }

  else if (url.toString()  === `/brackget`) {  
    function writeend(data:string):void {
      res.write(data)
      res.end()
    }
    const BrackRepository =  AppDataSource.getRepository(Bracklog)
    BrackRepository.find().then(data =>writeend(JSON.stringify(data)))
}
else if (url.toString()  === `/tempcontrolget`) {  
  function writeend(data:string):void {
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
  else {
    res.write("ERROR! No API")
    res.end()
  }

}).listen(3002, function () {
    console.log("Server started at 3002 port");
})

