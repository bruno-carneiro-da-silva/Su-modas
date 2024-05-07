import React from 'react'
import PropTypes from 'prop-types'
import { CCardText, CCardTitle, CCol, CImage, CRow } from '@coreui/react'
import 'src/scss/_custom.scss'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'

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
      <div className="p-3">
        <CImage className="merchant-photo" src={image} alt="Imagem do produto" />
        <div className="div-modal-content">
          <CCardTitle className="card-title-modal">{name}</CCardTitle>
          <span className="span-merchant">{type}</span>
          <p>{details}</p>
        </div>
      </div>

      <CRow>
        <CCol
          md={6}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <CCardText>
            <span style={{ marginLeft: '3px' }}>Telefone: </span>
          </CCardText>
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              display: 'flex',
            }}
          >
            <CIcon
              icon={icon.cilPhone}
              size="xxl"
              style={{
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                color: '#fff',
                backgroundColor: '#FB7D5B',
              }}
            />
            <span style={{ marginLeft: '3px', fontWeight: 'bold' }}>+11 345 6789 0</span>
          </div>
        </CCol>
        <CCol
          md={6}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <CCardText>
            <span style={{ marginLeft: '3px' }}>Email: </span>
          </CCardText>
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              display: 'flex',
            }}
          >
            <CIcon icon={icon.cilEnvelopeClosed} size="xxl" className="icon-email" />
            <span style={{ marginLeft: '3px', fontWeight: 'bold' }}>jordan@mail.com</span>
          </div>
        </CCol>
      </CRow>
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
