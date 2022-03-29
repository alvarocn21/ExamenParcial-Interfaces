import styled from "@emotion/styled";
import React, {FC, useState} from "react";
import { Cocktail } from "../types";

const List: FC<{
    cocktails: Array<Cocktail>
    switchToDetail: (id: string) => void,
}> = ({cocktails, switchToDetail}) => {
    
    return (
        <DivLista>
            {cocktails.map(c => {
                return <DivCoc key={c.idDrink} onClick={e => {
                    switchToDetail(c.idDrink)
                }}><img src={c.strDrinkThumb} width="100" height="100"></img> <div>{c.strDrink}</div></DivCoc> 
                
            })}
        </DivLista>
    )
}

const DivLista = styled.div`
    height: 60%;
    width: 80%;

    background-color: purple;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px;

`

const DivCoc = styled.div`
    margin: 20px;
`
export default List;