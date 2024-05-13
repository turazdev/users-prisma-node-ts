import { createdMovieCase } from "./createdMovieCases";
import { Request,Response } from "express";

export class CreatedMovieController{

    async handle(req:Request,res:Response){
        const { titulo,duration,release_data }=req.body;

        const createdMovCase=new createdMovieCase();

        const result= await createdMovCase.execute({titulo,duration,release_data});

        return res.status(201).json(result);
    }
}