import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { recipeTableName } from "../../types";

export default async function getRecipeById(
    req: Request,
    res: Response
): Promise<void>{
    try{

        const token: string = req.headers.authorization!;

        const recipeId  = req.params.id;

        const tokenData = getTokenData(token);

        const [recipe] = await connection(recipeTableName)
            .where ({ id: recipeId });

        if(!recipe){
            res.statusCode = 404;
            throw new Error("Recipe not found");
        };

        res.send ({ 
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe. created_at
        });

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message)
        };
    };
};