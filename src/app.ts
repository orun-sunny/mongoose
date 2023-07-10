import cors from "cors";
import express,{Application,NextFunction,Request,Response} from "express";


const app:Application =express();

app.use(cors());

// parse  data

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    // res.send('Hello World!');
    // next();

//inseting test data mongodb
  })

  
  export default app;