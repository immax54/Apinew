import "reflect-metadata"
const http =  require("http");
import { DataSource } from "typeorm";
import {User} from "./entities/Client";
import { Bracklog } from "./entities/Brack";
 const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities:[User, Bracklog],
    synchronize:true
})
const userRepository = AppDataSource.getRepository(User)
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
    const json:{id:number,name:string} = {"id":1,"name": "Bob",};
    const outjson = JSON.stringify(json);

    if (url.toString() === '/json') {
    
        res.write((outjson));
        res.end(); 
    }
    else if (url.toString()  === `/user` && method === 'POST') {
        
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
      
          const responseBody = { body };
          
          let resjson = (JSON.parse(body))
          console.log(resjson.Name)
          const user = new User()
          user.name = resjson.name
          user.fam = resjson.fam
          user.otch = resjson.otch
          user.role = resjson.role
          user.additional = resjson.additional
          user.created = new Date
          console.log('DB connect', user.id)
          AppDataSource.manager.save(user)
          res.write("User has been added"+JSON.stringify(user));
          res.end();
        });
    }
    else if (url.toString()  === `/users`) {  
      function writeend(data:string):void {
        res.write(data)
        res.end()
      }
      const userRepository =  AppDataSource.getRepository(User)
      userRepository.find().then(data =>writeend(JSON.stringify(data)))
  }

}).listen(3002, function () {
    console.log("Server started at 3002 port");
})

