import { BaseDatabase } from "./BaseDatabase";

export class Moviedatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE"
  public postMovie = async (body: {
    id: string;
    title: string;
    description: string;
    duration_in_minutes: number;
    year_of_release: number;
  }): Promise<void> => {
    try {
      await Moviedatabase.connection.insert(body).into(Moviedatabase.TABLE_NAME)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}