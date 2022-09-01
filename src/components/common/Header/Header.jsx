import React from 'react'
import S from './Header.module.css'
import { BsBoxArrowInRight } from "react-icons/bs";

const Header = () => {
    return (
        <div className={S.header}>
            <BsBoxArrowInRight className={S.icon} />
        </div>
    )
}

export default Header