import React from 'react'
import { StarIcon } from 'src/icon'
import PropTypes from 'prop-types'

export const RatingComponent = ({ rating }) => {
  return (
    <>
      <div className="d-flex gap-4">
        <StarIcon className="h-3 w-3 bg-yellow" />
        <h5 className="card-title font-weight-bold">{rating}</h5>
      </div>
    </>
  )
}

RatingComponent.propTypes = {
  rating: PropTypes.number,
}

export default RatingComponent
