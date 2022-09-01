import { Button } from '@mui/material'
import React from 'react'
import S from './Nav.module.css'

const Nav = () => {
    return (
        <div className={S.navigation}>
            <div>
                <h3>Produtos</h3>
                <p>Use esta página para gerenciar seus produtos, de forma rápida e fácil.</p>
            </div>
            <div>
                <Button variant='contained' color='primary'>Novo produto</Button>
            </div>
        </div>
    )
}

export default Nav