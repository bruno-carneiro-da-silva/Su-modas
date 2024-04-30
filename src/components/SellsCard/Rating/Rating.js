import React from 'react'
import { StarIcon } from 'src/icon'

export const RatingComponent = () => {
  return (
    <React.Fragment>
      <div className="d-flex mb-5 gap-4">
        <StarIcon className="h-3 w-3 bg-yellow" />
        <h5 className="card-title">4.9</h5>
      </div>
    </React.Fragment>
  )
}

export default RatingComponent
