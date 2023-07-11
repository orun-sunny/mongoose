import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";


const app: Application = express();

app.use(cors());

// parse  data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('Hello World!');
  // next();

  //inseting test data mongodb

  /*
  step1:Interface
  step2:schema
  step3:Model
  step4:Databas query
  
  
  */
  //creating an interface

  interface IUser {
    id: string;
    role: "student",
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;

    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;

  }

  //creating schema using interface

  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,

    },
    role: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true
      },
      middleName: {
        type: String
      },
      lastName: {
        type: String,
        required: true,
      },

    },
    dateOfBirth: {
      type: String
    },

    gender: {
      type: String,
      enum: ['male', 'female']
    },
    email: {
      type: String

    },

    contactNo: {
      type: String,
      required: true
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true
    }
  });

});




export default app;