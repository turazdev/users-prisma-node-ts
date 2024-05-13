import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { createdUserDTO } from "../../dtos/createdUserDTO";
import { AppError } from "../../../../errors/appErrors";

export class createdUserUserCase{
    async execute({name,email}:createdUserDTO):Promise<User>{
        //Verificar se o usuario ja existem
        const useAllreadyExits=await prisma.user.findUnique({
                where:{email}
        });

        if(useAllreadyExits){
            //ERROR
            throw new AppError("User already exists!");
        }

        //Criar o usuario
        const user = await prisma.user.create({
            data:{name,email}
        });

        return user;
    }
}