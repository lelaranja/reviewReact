import React from 'react'
import AreaProdutos from '../../components/AreaProdutos/AreaProdutos'
import Header from '../../components/common/Header/Header'
import Nav from '../../components/Nav/Nav'

const Dashboard = () => {

    return (
        <div>
            <Header />
            <Nav />
            <AreaProdutos />
        </div>
    )
}

export default Dashboard