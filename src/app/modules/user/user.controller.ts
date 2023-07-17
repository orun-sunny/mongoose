import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async(req: Request ,res: Response, next: NextFunction) => {
    const data =  req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status:"success",
        data:user,
    });



};
export const getUsers = async(req: Request ,res: Response, next: NextFunction) => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status:"success",
        data:user,
    });



};

export const getUserById = async(req: Request ,res: Response, next: NextFunction) => {
    const {id}= req.params;
    const user = await getUserByIdFromDB(id);

    res.status(200).json({
        status:"success",
        data:user,
    });



};

export const getAdminUsers = async(req: Request ,res: Response, next: NextFunction) => {
    const {id}= req.params;
    const user = await getAdminUsersFromDB();

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