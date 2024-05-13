
import { Router } from "express";
import { userRoutes } from "./user.routers";
import { movieRoutes } from "./movie.routers";

const routes=Router();

routes.use("/users",userRoutes);
routes.use("/movies",movieRoutes);

export { routes };