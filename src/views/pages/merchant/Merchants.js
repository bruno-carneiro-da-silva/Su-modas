import React, { useEffect, useState } from 'react'
import * as icon from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CModal,
  CModalBody,
  CRow,
  CSpinner,
  CTooltip,
} from '@coreui/react'
import 'src/scss/_custom.scss'
import { merchants } from 'src/Mocks/merchants'
import avatar from 'src/assets/images/avatars/1.jpg'
import MerchantDetails from 'src/components/MechantDetails/MerchantDetails'

const Merchants = () => {
  const [visibleXL, setVisibleXL] = useState(false)
  const [loading, setLoading] = useState(true)

  //just testing the loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        {merchants.map((merchant) => (
          <CCol xs key={merchant.id} className="mb-4">
            <CCard className="merchant-card" onClick={() => setVisibleXL(!visibleXL)}>
              {loading ? (
                <div className="spinner-container">
                  <CSpinner
                    className="text-center d-flex justify-content-center m-auto p-4"
                    size="sm"
                    style={{ width: '3rem', height: '3rem' }}
                  />
                </div>
              ) : (
                <>
                  <CCardImage className="merchant-image" orientation="top" src={merchant.logo} />
                  <CCardBody>
                    <div className="title-header">
                      <CCardTitle>{merchant.name}</CCardTitle>
                      <CCardText>{merchant.description}</CCardText>
                    </div>
                    <div className="div-card-merchants">
                      <CTooltip content={merchant.email} placement="top">
                        <CButton shape="rounded-pill" color="primary">
                          <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                        </CButton>
                      </CTooltip>
                      <CTooltip content={merchant.phone} placement="top">
                        <CButton shape="rounded-pill" color="primary">
                          <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                        </CButton>
                      </CTooltip>
                      <CTooltip content={merchant.address} placement="top">
                        <CButton shape="rounded-pill" color="primary">
                          <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                        </CButton>
                      </CTooltip>
                    </div>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">{merchant.activity}</small>
                  </CCardFooter>
                </>
              )}
            </CCard>
          </CCol>
        ))}
      </CRow>

      {visibleXL && (
        <>
          <CModal
            size="lg"
            visible={visibleXL}
            onClose={() => setVisibleXL(false)}
            aria-labelledby="OptionalSizesExample1"
          >
            <CModalBody>
              <MerchantDetails
                image={avatar}
                name="Fulano de tal"
                type="Feminino"
                address="Rua travessa augusto borborema, 567 - Campinas, SP"
                phone="+55 11 99999-9999"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, lorem nec mollis ultricies, felis nunc tincidunt odio, vel ultricies erat leo sit amet dolor. Nullam nec nisl sit amet purus lacinia tincidunt. Sed nec nunc nec turpis ultrices lacinia. Sed nec nunc nec turpis ultrices lacinia."
              />
            </CModalBody>
          </CModal>
        </>
      )}
    </>
  )
}

export default Merchants
