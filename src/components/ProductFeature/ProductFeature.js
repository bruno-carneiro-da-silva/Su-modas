import React from 'react'
import PropTypes from 'prop-types'
import { CCardTitle } from '@coreui/react'
import 'src/scss/sells.scss'

const ProductFeature = ({ title, description }) => {
  return (
    <div className="container-product-feature">
      <CCardTitle className="product-feature-title">{title}</CCardTitle>
      <ul>
        <li>{description}</li>
      </ul>
    </div>
  )
}

ProductFeature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductFeature
