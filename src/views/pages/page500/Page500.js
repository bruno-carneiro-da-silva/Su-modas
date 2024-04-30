import React from 'react'
import { CButton, CCol, CContainer, CInputGroup, CRow } from '@coreui/react'

const Page500 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer className="bg-white rounded-5 p-5 w-60">
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="display-3 me-4 text-center">500</h1>
              <h4 className="pt-3 text-center">Assinatura em andamento..</h4>
              <p className="text-medium-emphasis text-center">
                Nós da onbeef agradecemos sua preferência, estamos validando em nosso sistema sua
                assinatura..
              </p>
            </span>
            <CInputGroup className="input-prepend">
              <CButton className="m-auto text-center" color="info w-50">
                Sair
              </CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
