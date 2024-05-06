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
  CRow,
  CTooltip,
} from '@coreui/react'
import React from 'react'
import logo from 'src/assets/images/react.jpg'
import '../../../scss/_custom.scss'

const Merchants = () => {
  return (
    <>
      <CRow style={{ marginBottom: '1rem' }} xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <div className="title-header">
                <CCardTitle>TLF Jeans</CCardTitle>
                <CCardText>Moda masculina.</CCardText>
              </div>
              <div className="div-card-merchants">
                <CTooltip content="beltrano@email.com" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="+55 11 99999-9999" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="Rua soldado percilio neto, 239 - Monte Mor, SP" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 33 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <div className="title-header">
                <CCardTitle>Pit Bull Jeans</CCardTitle>
                <CCardText>Calça masculina</CCardText>
              </div>
              <div className="div-card-merchants">
                <CTooltip content="beltrano@email.com" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="+55 11 99999-9999" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="Rua travessa francisco pinto, 456 - Vinhedo, SP" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 13 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <div className="title-header">
                <CCardTitle>Bivik Jeans</CCardTitle>
                <CCardText>Jeans</CCardText>
              </div>
              <div className="div-card-merchants">
                <CTooltip content="beltrano@email.com" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="+55 11 99999-9999" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip
                  content="Rua travessa augusto borborema, 567 - Campinas, SP"
                  placement="top"
                >
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 5 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <div className="title-header">
                <CCardTitle>Brytch Jeans</CCardTitle>
                <CCardText>Roupas</CCardText>
              </div>
              <div className="div-card-merchants">
                <CTooltip content="beltrano@email.com" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="+55 11 99999-9999" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="Rua padre Antônio vieira, 133 - Campinas, SP" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 3 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs className="mb-4">
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody orientation="center">
              <div className="title-header">
                <CCardTitle>Denim Zero</CCardTitle>
                <CCardText>Conjuntos</CCardText>
              </div>
              <div className="div-card-merchants">
                <CTooltip content="beltrano@email.com" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilEnvelopeClosed} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip content="+55 11 99999-9999" placement="top">
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilPhone} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
                <CTooltip
                  content="Rua travessa augusto borborema, 632 - Hortolândia, SP"
                  placement="top"
                >
                  <CButton shape="rounded-pill" color="primary">
                    <CIcon icon={icon.cilAddressBook} size="sm"></CIcon>
                  </CButton>
                </CTooltip>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 3 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Merchants
