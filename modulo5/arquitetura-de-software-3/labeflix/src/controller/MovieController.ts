import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness"
import { InputMovieDTO } from "../model/InputMovieDTO"

export class MovieController {
  async postMovie(req: Request, res: Response) {
    try {
      const { title, description, duration, release } = req.body

      const input: InputMovieDTO = {
        title, 
        description, 
        duration, 
        release
      }
   
      const movieBusiness = new MovieBusiness()
      await movieBusiness.postMovie(input)

      res.status(201).send("Movie created successfuly")
      
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}