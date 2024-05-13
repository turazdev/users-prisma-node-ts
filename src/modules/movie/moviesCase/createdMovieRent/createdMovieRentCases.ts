import { Movies } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/appErrors";
import { createdMovieRentDTO } from "../../dtos/createdMovieRentDTO";

export class createdMovieRentCase{
    async execute({userId,movieId}:createdMovieRentDTO):Promise<void>{
        //Verificar se o filme ja existem
        const movieExits=await prisma.movies.findUnique({
                where:{id:movieId}
        });

        if(!movieExits){
            //ERROR
            throw new AppError("Movie does not exists!");
        }

        // verifica no movie rent
        const movieAllreadyRented=await prisma.movieRent.findFirst({
                where:{movieId}
        });

        if(movieAllreadyRented){
            //ERROR
            throw new AppError("Movie already rented!");
        }

        //Verificar se o filme ja existem
        const userExits=await prisma.user.findUnique({
            where:{id:userId}
        });

        if(!userExits){
            //ERROR
            throw new AppError("User does not exists!");
        }

        //Criar o usuario
        await prisma.movieRent.create({
            data:{movieId,userId}
        });

    }
}