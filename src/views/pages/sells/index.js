import React from 'react'
import '../../../scss/sells.scss'
import SellsCard from '../../../components/SellsCard/SellsCard'

const Sells = () => {
  return (
    <div className="content-sells">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="header-sells">Menu de vendas</h1>
        <nav className="d-flex">
          <ul className="menu-list">
            <li className="active">
              <a href="/sells">Todas</a>
            </li>
            <li>
              <a href="/sells">Femininos</a>
            </li>
            <li>
              <a href="/sells">Masculinos</a>
            </li>
          </ul>
        </nav>
      </div>
      <SellsCard />
    </div>
  )
}

export default Sells
