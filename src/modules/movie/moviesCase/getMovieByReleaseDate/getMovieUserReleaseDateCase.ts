import { Movies } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMovieUserReleaseDateCase{
    async execute():Promise<Movies[]>{
        const movies=await prisma.movies.findMany({
            orderBy:{release_data:"desc"},
            include:{movie_rent:{
                select:{
                    user:{
                        select:{
                            name:true,
                            email:true
                        }
                }}
            }}
        });

        return movies;
    }
}