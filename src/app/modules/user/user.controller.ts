import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";

export const createUser = async(req: Request ,res: Response, next: NextFunction) => {
    const user = await createUserToDB();
    res.status(200).json({
        status:"success",
        data:user,
    });



};

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


    //creating schema using interface