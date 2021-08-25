const app = require('./app');
const connectDatabase =require('./config/database')
const dotenv = require('dotenv');



//Handle uncaught expection
process.on('uncaughtException',err=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server due to uncaught expection')
    process.exit(1)
})


dotenv.config({path:'config/config.env'})

connectDatabase();

const server = app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})




//Handled promise rejection 
process.on('unhandledRejection', err=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection ')
    server.close(()=>{
      process.exit(1);
    })
  })