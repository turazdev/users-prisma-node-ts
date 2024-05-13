import { Router } from "express";
import { CreatedMovieController } from "../modules/movie/moviesCase/createdMovie/createdMovieController";
import { CreatedMovieRentController } from "../modules/movie/moviesCase/createdMovieRent/createdMovieRentController";
import { GetMovieUserReleaseDateController } from "../modules/movie/moviesCase/getMovieByReleaseDate/getMovieUserReleaseDateController";

const createdMovieController=new CreatedMovieController();
const createdMovieRentController=new CreatedMovieRentController();
const getMovieUserReleaseDateController=new GetMovieUserReleaseDateController();

const movieRoutes=Router();

movieRoutes.post("/",createdMovieController.handle);
movieRoutes.get("/release",getMovieUserReleaseDateController.handle);
movieRoutes.post("/rent",createdMovieRentController.handle);

export {movieRoutes}