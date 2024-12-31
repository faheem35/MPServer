const jsonServer=require("json-server")   //import json-server
const MPServer=jsonServer.create()   //create a server for media-player app

const middleware=jsonServer.defaults()  // to convert json to js 
const PORT=3000 //create a port for executing our app

const route=jsonServer.router('db.json')

MPServer.use(middleware)
MPServer.use(route)

MPServer.listen(PORT,()=>{
          console.log(`MPServer statred running at port: ${PORT} and its waiting for client request`);
          
})