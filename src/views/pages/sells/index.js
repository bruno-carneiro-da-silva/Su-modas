import React from 'react'
import 'src/scss/sells.scss'
import SellsCard from 'src/components/SellsCard/SellsCard'

const Sells = () => {
  return (
    <div className="content-sells">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="header-sells">Menu de vendas</h1>
        <nav className="d-flex">
          <ul className="menu-list">
            <li className="active">
              <a href="/vendas">Todas</a>
            </li>
            <li>
              <a href="/vendas">Femininos</a>
            </li>
            <li>
              <a href="/vendas">Masculinos</a>
            </li>
          </ul>
        </nav>
      </div>
      <SellsCard />
    </div>
  )
}

export default Sells
