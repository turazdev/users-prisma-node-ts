import { Router } from "express";
import { CreatedUserController } from "../modules/users/usersCase/createdUser/createdUserController";
import { GetUserController } from "../modules/users/usersCase/getUser/getUserController";

const createdUserController=new CreatedUserController();
const getUserController=new GetUserController();

const userRoutes=Router();

userRoutes.post("/",createdUserController.handle);
userRoutes.get("/",getUserController.handle);

export {userRoutes}