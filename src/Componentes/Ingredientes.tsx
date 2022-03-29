import styled from "@emotion/styled";
import React, {FC} from "react";
import { Cocktail } from "../types";

const Ingredientes: FC<{cocktail: Cocktail}> = ({cocktail}) => {
    const arrayOfIngredients = (cocktail: Cocktail) : Array<String> => {
        return Object.keys(cocktail).reduce((acc: string[],c: string) => {
            if(c.includes("Ingredient") && (cocktail as any)[c]) 
                acc.push((cocktail as any)[c]);
            return acc;
        }, [])
    }

    const Ingredients = arrayOfIngredients(cocktail);
    
    return (
        <MiDiv>
            {Ingredients.join(", ")}
        </MiDiv>
    )
}

const MiDiv = styled.div`
    margin: 20px;
`

export default Ingredientes;