import { Request,Response } from "express";
import { createdMovieRentCase } from "./createdMovieRentCases";

export class CreatedMovieRentController{

    async handle(req:Request,res:Response){
        const { movieId,userId }=req.body;

        const createdMovRentCase=new createdMovieRentCase();

        await createdMovRentCase.execute({movieId,userId});

        return res.status(201).send();
    }
}