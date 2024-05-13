import "express-async-errors";
import express,{Request,Response,NextFunction} from "express";
import { routes } from "./routers";
import { AppError } from "./errors/appErrors";

const app=express();

app.use(express.json());

app.use(routes);

app.use((err:Error,request:Request,response:Response,next: NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:"error",
            message:err.message
        })
    }

    //Erro interno status 500
    return response.status(500).json({
        status:"error",
        message:`Internal server error - ${err.message}`
    });
});

app.listen(process.env.PORT || 3333,
    ()=>{console.log("Server is running! in port 3333")}
)

module.exports = app;
