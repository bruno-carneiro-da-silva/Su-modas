import React from 'react'
import PropTypes from 'prop-types'
import { CCardTitle } from '@coreui/react'
import 'src/scss/sells.scss'

const ProductMaterial = ({ title, description }) => {
  return (
    <div className="container-product-material">
      <CCardTitle className="product-material-title">{title}</CCardTitle>
      <ul>
        <li>{description}</li>
      </ul>
    </div>
  )
}

ProductMaterial.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductMaterial
