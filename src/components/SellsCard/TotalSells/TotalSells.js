import React from 'react'
import { ChartIcon } from 'src/icon'
import PropTypes from 'prop-types'

export const TotalSellsComponent = ({ totalSells }) => {
  return (
    <>
      <div className="d-flex gap-4">
        <ChartIcon className="h-3 w-3" />
        <div className="d-flex flex-column">
          <h5 className="card-title font-weight-bold">{totalSells}</h5>
          <span className="card-title">total</span>
        </div>
      </div>
    </>
  )
}

TotalSellsComponent.propTypes = {
  totalSells: PropTypes.number,
}

export default TotalSellsComponent
