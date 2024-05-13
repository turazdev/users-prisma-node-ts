import { createdUserUserCase } from "./createdUserUserCases";
import { Request,Response } from "express";

export class CreatedUserController{

    async handle(req:Request,res:Response){
        const { name, email }=req.body;

        const createdUserCase=new createdUserUserCase();

        const result= await createdUserCase.execute({name,email});

        return res.status(201).json(result);
    }
}