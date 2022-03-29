import styled from "@emotion/styled";
import React, {FC, useEffect, useState} from "react";
import { Cocktail } from "../types";
import Ingredientes from "./Ingredientes";

const Detail: FC<{cocktails: Array<Cocktail>, id: string}> = ({cocktails, id}) => {
    const searchByID = (id:string, cocktails: Array<Cocktail>): Cocktail|undefined => {
        const c = cocktails.find(c => c.idDrink === id);
        return c;
    } 

    const [cocktail, setCocktail] = useState<Cocktail | undefined>(undefined);
    
    useEffect(() => {
        setCocktail(searchByID(id, cocktails))
    }, [cocktails])
    
    return (
        <GenDiv>
            {cocktail && <MiDiv>
                <MiDiv>{cocktail.strDrink}: <Ingredientes cocktail={cocktail}/></MiDiv>

                {cocktail !== cocktails.at(0) && 
                    <MiBoton onClick={() => {
                        const indice = cocktails.indexOf(cocktail);
                        setCocktail(cocktails.at(indice - 1))
                    }}>Anterior</MiBoton>}

                {cocktail !== cocktails.at(-1) && 
                    <MiBoton onClick={() => {
                        const indice = cocktails.indexOf(cocktail);
                        setCocktail(cocktails.at(indice + 1))
                    }}>Siguiente</MiBoton>}
            </MiDiv>}
        </GenDiv>
    )
}

const MiBoton = styled.button`
    margin: 10px;
    height: 30px;
    width: 100px;
    background-color: greenyellow;
`
const GenDiv = styled.div`
    margin: 20px;
    display: flex;
    justify-content: flex-start;
`

const MiDiv = styled.div`
    margin: 20px;
`

export default Detail;