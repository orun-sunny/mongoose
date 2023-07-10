import app from "./app"
import mongoose from "mongoose"



// const app = express();
const port = 5000;

// app.use(cors());



//database connection
async function boot() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log(`data succesfully`);

    app.listen(port, () => {
        console.log(`server app listening on port ${port}`);
      }) ;

  }

  
  
  catch(err)
  {
    console.log(`faile to data connect`,err);
  }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  boot()



