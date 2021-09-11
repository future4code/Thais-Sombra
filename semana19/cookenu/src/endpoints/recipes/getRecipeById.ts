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
        console.log(token, recipeId)

        const tokenData = getTokenData(token);

        const [recipe] = await connection(recipeTableName)
            .where ({ id: recipeId });

        res.send ({ recipe });

    } catch (error: any) {
        console.log(error.message);

        if(res.statusCode === 200){
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message)
        };
    };
};