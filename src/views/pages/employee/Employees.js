import React from 'react'
import { CCard, CRow, CCol, CCardImage, CCardText, CButton, CFormInput } from '@coreui/react'
import avatar from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'

const Employees = () => {
  return (
    <>
      <CCard className="mb-3" style={{ width: '100%', borderRadius: '8px' }}>
        <CRow className="g-0 p-3">
          <CCol md={2} className="g-0 p-3">
            <CCardImage
              style={{
                borderRadius: '50%',
                border: '1px solid #e4e7eb',
                padding: '10px',
                height: '160px',
                width: '160px',
              }}
              src={avatar}
            />
            <CCardText>
              <h3
                style={{
                  marginLeft: '3px',
                  color: '#303972',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Kamila silva
              </h3>
            </CCardText>
            <CCardText>
              <h6
                style={{
                  marginLeft: '3px',
                  color: '#303972',
                  display: 'flex',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Admin
              </h6>
            </CCardText>
            <div>
              <CIcon icon={icon.cilLocationPin} size="sm" />
              <span style={{ marginLeft: '3px' }}>São Paulo, Brasil</span>
            </div>
          </CCol>
          <CCol
            md={2}
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
            md={2}
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
              <CIcon
                icon={icon.cilEnvelopeClosed}
                size="xxl"
                style={{
                  border: '1px solid #fff',
                  borderRadius: '50%',
                  padding: '5px',
                  color: '#fff',
                  backgroundColor: '#FB7D5B',
                }}
              />
              <span style={{ marginLeft: '3px', fontWeight: 'bold' }}>jordan@mail.com</span>
            </div>
          </CCol>
        </CRow>
      </CCard>

      {/* contact card */}
      <CCard
        className="mb-3"
        style={{
          width: '35%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'start',
          borderRadius: '10px',
        }}
      >
        <CCol md={12}>
          <CRow className="g-0 p-4" style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
                justifyContent: 'space-between',
              }}
            >
              <CCardText>
                <h4
                  style={{
                    color: '#303972',
                    display: 'flex',
                    marginTop: '5px',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    justifyContent: 'start',
                  }}
                >
                  Contatos
                </h4>
                <span style={{ fontSize: '12px' }}>Você tem 741 contatos</span>
              </CCardText>
              <CButton
                style={{
                  borderRadius: '50%',
                  padding: '12px',
                  height: '50px',
                }}
              >
                <CIcon icon={icon.cilPlus} size="lg" />
              </CButton>
            </div>
            <CFormInput
              type="search"
              placeholder="Pesquisar"
              style={{
                padding: '10px',
                borderRadius: '20px',
                textAlign: 'start',
                margin: 'auto',
                width: '100%',
              }}
            />
          </CRow>
        </CCol>

        <CCol
          md={11}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              margin: '3px',
              display: 'flex',
              width: '100%',
            }}
          >
            <CCardImage
              style={{
                borderRadius: '50%',
                padding: '10px',
                height: '70px',
                width: '70px',
              }}
              src={avatar2}
            />
            <CCardText>
              <h6
                style={{
                  margin: '0',
                  color: '#303972',
                  display: 'flex',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Kamila silva
              </h6>
              <p style={{ margin: '0' }}>teste</p>
            </CCardText>
          </div>
          <CButton
            style={{
              borderRadius: '50%',
              backgroundColor: '#fff',
              color: '#303972',
              padding: '12px',
              height: '50px',
              border: '1px solid #303972',
              width: '50px',
            }}
          >
            <CIcon icon={icon.cilEnvelopeClosed} size="lg" />
          </CButton>
        </CCol>
        <CCol
          md={11}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              margin: '3px',
              display: 'flex',
              width: '100%',
            }}
          >
            <CCardImage
              style={{
                borderRadius: '50%',
                padding: '10px',
                height: '70px',
                width: '70px',
              }}
              src={avatar3}
            />
            <CCardText>
              <h6
                style={{
                  margin: '0',
                  color: '#303972',
                  display: 'flex',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Kamila silva
              </h6>
              <p style={{ margin: '0' }}>teste</p>
            </CCardText>
          </div>
          <CButton
            style={{
              borderRadius: '50%',
              padding: '12px',
              height: '50px',
              width: '50px',
            }}
          >
            <CIcon icon={icon.cilEnvelopeClosed} size="lg" />
          </CButton>
        </CCol>
        <CCol
          md={11}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              margin: '3px',
              display: 'flex',
              width: '100%',
            }}
          >
            <CCardImage
              style={{
                borderRadius: '50%',
                padding: '10px',
                height: '70px',
                width: '70px',
              }}
              src={avatar4}
            />
            <CCardText>
              <h6
                style={{
                  margin: '0',
                  color: '#303972',
                  display: 'flex',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Kamila silva
              </h6>
              <p style={{ margin: '0' }}>teste</p>
            </CCardText>
          </div>
          <CButton
            style={{
              borderRadius: '50%',
              backgroundColor: '#fff',
              color: '#303972',
              padding: '12px',
              height: '50px',
              border: '1px solid #303972',
              width: '50px',
            }}
          >
            <CIcon icon={icon.cilEnvelopeClosed} size="lg" />
          </CButton>
        </CCol>
        <CCol
          md={11}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'start',
              margin: '3px',
              display: 'flex',
              width: '100%',
            }}
          >
            <CCardImage
              style={{
                borderRadius: '50%',
                padding: '10px',
                height: '70px',
                width: '70px',
              }}
              src={avatar}
            />
            <CCardText>
              <h6
                style={{
                  margin: '0',
                  color: '#303972',
                  display: 'flex',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'start',
                }}
              >
                Kamila silva
              </h6>
              <p style={{ margin: '0' }}>teste</p>
            </CCardText>
          </div>
          <CButton
            style={{
              borderRadius: '50%',
              backgroundColor: '#fff',
              color: '#303972',
              padding: '12px',
              height: '50px',
              border: '1px solid #303972',
              width: '50px',
            }}
          >
            <CIcon icon={icon.cilEnvelopeClosed} size="lg" />
          </CButton>
        </CCol>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            width: '100%',
          }}
        >
          <CButton
            style={{
              borderRadius: '20px',
              padding: '10px',
              marginBottom: '25px',
              border: 'none',
              display: 'flex',
              width: '91%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5F2F9',
              color: '#303972',
            }}
          >
            Ver mais
          </CButton>
        </div>
      </CCard>
    </>
  )
}

export default Employees
