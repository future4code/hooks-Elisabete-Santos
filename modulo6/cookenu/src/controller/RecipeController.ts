import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { inputCreateRecipeDTO } from "../model/inputCreateRecipeDTO";
import { InputDeleteRecipeDTO } from "../model/InputDeleteRecipeDTO";
import { InputEditRecipeDTO } from "../model/InputEditRecipeDTO";
import { InputGetRecipeDTO } from "../model/InputGetRecipeDTO";
import { ResponseGetRecipeDTO } from "../model/ResponseGetRecipeDTO";

export class RecipeController {
  recipeBusiness = new RecipeBusiness();

  public createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const { title, description } = req.body;

      const inputCreateRecipe: inputCreateRecipeDTO = {
        token,
        title,
        description,
      };

      await this.recipeBusiness.createRecipe(inputCreateRecipe);

      res.status(201).send("Recipe created.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const token = req.headers.authorization as string;

      const inputGetRecipe: InputGetRecipeDTO = {
        id,
        token,
      };

      const recipe: ResponseGetRecipeDTO = await this.recipeBusiness.getRecipe(
        inputGetRecipe
      );

      res.status(200).send(recipe);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public editRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const { id, title, description } = req.body;

      const inputEditRecipe: InputEditRecipeDTO = {
        id,
        title,
        description,
        token,
      };
      await this.recipeBusiness.editRecipe(inputEditRecipe);

      res.status(200).send("Recipe updated.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public deleteRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      const inputDeleteRecipe: InputDeleteRecipeDTO = { id, token };

      await this.recipeBusiness.deleteRecipe(inputDeleteRecipe);

      res.status(200).send("Recipe deleted.");
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}