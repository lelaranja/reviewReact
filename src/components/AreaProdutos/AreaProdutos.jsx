import React from 'react'
import S from './AreaProdutos.module.css'
import { TextField } from '@mui/material'
import Titulo from '../Titulo/Titulo'

const AreaProdutos = () => {
    // const [name, setName] = useState('')
    return (
        <div className={S.produtos}>
            <div className={S.busca}>
                <TextField id="outlined-basic" label="Pesquise um produto pelo nome" variant="outlined" onClick={({ target }) => setName(target.value)} />
            </div>
            <div className={S.titulo}>
                <Titulo texto='Nome do produto' />
                <Titulo texto='Preço' />
                <Titulo texto='Categoria' />
                <Titulo texto='Marca' />
                <Titulo texto='Avaliação' />
                <Titulo texto='Cor' />
                <Titulo texto='Ações' />
            </div>
        </div>
    )
}

export default AreaProdutos