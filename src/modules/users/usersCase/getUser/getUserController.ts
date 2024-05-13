import { Request,Response } from "express";
import { GetUserUserCases } from "./getUserUserCases";

export class GetUserController{

    async handle(req:Request,res:Response){
        //const { movieId,userId }=req.body;

        const getUserUserCases=new GetUserUserCases();

        const result=await getUserUserCases.execute();

        return res.status(201).json(result);
    }
}