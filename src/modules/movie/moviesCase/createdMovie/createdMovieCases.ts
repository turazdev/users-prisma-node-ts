import { Movies } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { createdMovieDTO } from "../../dtos/createdMovieDTO";
import { AppError } from "../../../../errors/appErrors";

export class createdMovieCase{
    async execute({titulo,duration,release_data}:createdMovieDTO):Promise<Movies>{
        //Verificar se o filme ja existem
        const movieAllreadyExits=await prisma.movies.findUnique({
                where:{titulo}
        });

        if(movieAllreadyExits){
            //ERROR
            throw new AppError("Movie already exists!");
        }

        //Criar o usuario
        const movie = await prisma.movies.create({
            data:{titulo,duration,release_data}
        });

        return movie;
    }
}