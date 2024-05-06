import React from 'react'
import PropTypes from 'prop-types'
import { CCardTitle, CImage } from '@coreui/react'

const MerchantDetails = ({
  image,
  name,
  type,
  address,
  phone,
  email,
  details,
  registrationDate,
  category,
}) => {
  return (
    <div>
      <div className="div-modal-header p-3">
        <CImage src={image} alt="Imagem do produto" />
        <div className="div-modal-content">
          <CCardTitle className="card-title-modal">{name}</CCardTitle>
          <span className=" btn btn-primary">{type}</span>
          <p>{details}</p>
        </div>
      </div>
    </div>
  )
}

MerchantDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  registrationDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
export default MerchantDetails
