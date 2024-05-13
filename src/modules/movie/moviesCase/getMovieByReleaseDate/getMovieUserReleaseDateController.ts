import { Request,Response } from "express";
import { GetMovieUserReleaseDateCase } from "./getMovieUserReleaseDateCase";

export class GetMovieUserReleaseDateController{

    async handle(req:Request,res:Response){
        //const { movieId,userId }=req.body;

        const getMovieUserCase=new GetMovieUserReleaseDateCase();

        const result=await getMovieUserCase.execute();

        return res.status(201).json(result);
    }
}