import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUserUserCases{
    async execute():Promise<User[]>{
        const users=await prisma.user.findMany({
            orderBy:{id:"desc"},
            include:{movie_rent:{
                select:{movie:true}
            }}
        });

        return users;
    }
}