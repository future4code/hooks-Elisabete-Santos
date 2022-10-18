import {Moviedatabase} from "../data/MovieDatabase"
import { CustomError } from "../error/CustomError";
import { Duration } from "../error/Duration";
import { InvalidRequest } from "../error/InvalidRequest";
import { Release } from "../error/Release";
import { InputMovieDTO } from "../model/InputMovieDTO";
import { generateID } from "../services/generateID";


export class MovieBusiness {
  async postMovie (input: InputMovieDTO): Promise<void> {
    try {
      const { title, description, duration, release } = input;

      if (!title || !description || !duration || !release) {
        throw new InvalidRequest()
      }

      if (duration < 0) {
        throw new Duration()
      }
      if (release < 1900) {
        throw new Release()
      }

      const id = generateID()

      const movieDatabase = new Moviedatabase()
      await movieDatabase.postMovie({
        id: id,
        title: title,
        description: description,
        duration_in_minutes: duration,
        year_of_release: release
      })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }
  }
}