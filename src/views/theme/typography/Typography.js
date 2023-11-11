import React from 'react'
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { logo } from 'src/assets/brand/logo'

const Typography = () => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <CCardTitle>Biotipo</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 40 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <CCardTitle>TLF Jeans</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
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
              <CCardTitle>Pit Bull Jeans</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
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
              <CCardTitle>Bivik Jeans</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
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
              <CCardTitle>Brytch Jeans</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 3 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src={logo} />
            <CCardBody>
              <CCardTitle>Denim Zero</CCardTitle>
              <CCardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CCardText>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">Última atualização a 3 min</small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </>
  )
}

export default Typography
