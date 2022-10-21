import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness"

export class MovieController {
  async postMovie(req: Request, res: Response) {
    try {
      const { title, description, duration, release } = req.body

   
      const movieBusiness = new MovieBusiness()
      await movieBusiness.postMovie({title, description, duration, release})

      res.status(201).send("Movie created successfuly")
      
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}