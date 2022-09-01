import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const CardProduto = ({ url, nome_abreviado, descricao, valor, categoria, marca, avaliacao, cor }) => {
    return (
        <div>
            <div>
                <img src={url}></img>
                <div>
                    <h4>{nome_abreviado}</h4>
                    <small>{descricao}</small>
                </div>
            </div>
            <div>
                <p>R${valor}</p>
            </div>
            <div>
                <p>{categoria}</p>
            </div>
            <div>
                <p>{marca}</p>
            </div>
            <div>
                <p>{avaliacao}</p>
            </div>
            <div>
                <p>{cor}</p>
            </div>
            <div>
                <AiOutlineEdit />
                <AiOutlineDelete />
            </div>
        </div>
    )
}

export default CardProduto