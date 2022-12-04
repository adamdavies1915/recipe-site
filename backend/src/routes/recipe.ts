import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models/recipe"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // get the id from the url
    const { id } = req.params
    // find the recipe
    const foundRecipe = await RecipeModel.findById(id)
    res.send(foundRecipe)
  } catch (err) {
    next(err)
  }
}
