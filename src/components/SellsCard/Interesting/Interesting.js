import React from 'react'
import { ArrowIcon } from 'src/icon'
import PropTypes from 'prop-types'

export const TotalInterestingComponent = ({ totalIntersting }) => {
  return (
    <>
      <div className="d-flex gap-4">
        <ArrowIcon className="h-3 w-3" />
        <div className="d-flex flex-column">
          <h5 className="card-title">{totalIntersting}</h5>
          <span className="card-title">interesse</span>
        </div>
      </div>
    </>
  )
}

TotalInterestingComponent.propTypes = {
  totalIntersting: PropTypes.string,
}

export default TotalInterestingComponent
