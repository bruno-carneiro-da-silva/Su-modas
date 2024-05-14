import React from 'react'
import * as icon from '@coreui/icons'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar from 'src/assets/images/avatars/8.jpg'
import 'src/scss/_custom.scss'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    order: {
      id: '#123456789',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'USA', flag: cifUs },
    usage: {
      value: 'R$50,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Mastercard', icon: cibCcMastercard },
    activity: '10 segundos atrás',
    status: 'completo',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    order: {
      id: '#123456789',
      new: false,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Brazil', flag: cifBr },
    usage: {
      value: 'R$50,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'info',
    },
    payment: { name: 'Visa', icon: cibCcVisa },
    activity: '5 minutos atrás',
    status: 'pendente',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    order: { id: '#123456789', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'India', flag: cifIn },
    usage: {
      value: 'R$75,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'warning',
    },
    payment: { name: 'Stripe', icon: cibCcStripe },
    activity: '1 hora atrás',
    status: 'cancelado',
  },
  {
    avatar: { src: avatar4, status: 'secondary' },
    order: { id: '#123456789', new: true, registered: 'Jan 1, 2021' },
    country: { name: 'France', flag: cifFr },
    usage: {
      value: 'R$98,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'danger',
    },
    payment: { name: 'PayPal', icon: cibCcPaypal },
    activity: 'Mês passado',
    status: 'pendente',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    order: {
      id: '#123456789',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Spain', flag: cifEs },
    usage: {
      value: 'R$22,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'primary',
    },
    payment: { name: 'Google Wallet', icon: cibCcApplePay },
    activity: 'Última semana',
    status: 'cancelado',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    order: {
      id: '#123456789',
      new: true,
      registered: 'Jan 1, 2021',
    },
    country: { name: 'Poland', flag: cifPl },
    usage: {
      value: 'R$43,00',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Amex', icon: cibCcAmex },
    activity: 'Última semana',
    status: 'completo',
  },
]

function getStatusClass(status) {
  switch (status) {
    case 'completo':
      return 'status-complete'
    case 'pendente':
      return 'status-pending'
    case 'cancelado':
      return 'status-cancelled'
    default:
      return ''
  }
}

const Profile = () => {
  return (
    <>
      <CCard className="mb-3">
        <CRow className="g-0 p-3">
          <CCol md={12} className="g-0 p-3">
            <CCardImage className="employee-avatar" src={avatar} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CCardText className="employee-name">Kamila silva</CCardText>
              <CDropdown className="CDropdow-component" onClick={(e) => e.stopPropagation()}>
                <CDropdownToggle className="bg-white text-black border-0" caret={false}>
                  ...
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem as="button">Editar</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
            <CCardText className="p-1">Admin</CCardText>
          </CCol>
        </CRow>
        <CRow className="mb-4">
          <CCol md={3} className="user-details-column">
            <CCardText>
              <span style={{ marginLeft: '3px' }}>Telefone: </span>
            </CCardText>
            <div className="div-user-details">
              <CIcon icon={icon.cilPhone} size="xxl" className="icon-email" />
              <span style={{ marginLeft: '3px', fontWeight: 'bold' }}>+11 345 6789 0</span>
            </div>
          </CCol>
          <CCol md={3} className="user-details-column">
            <CCardText>
              <span style={{ marginLeft: '3px' }}>Email: </span>
            </CCardText>
            <div className="div-user-details">
              <CIcon icon={icon.cilNewspaper} size="xxl" className="icon-email" />
              <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>jordan@mail.com</span>
            </div>
          </CCol>
          <CCol md={3} className="user-details-column">
            <CCardText>
              <span style={{ marginLeft: '5 px' }}>Endereço: </span>
            </CCardText>
            <div className="div-user-details">
              <CIcon icon={icon.cilLocationPin} size="xxl" className="icon-email" />
              <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>São Paulo, Brasil</span>
            </div>
          </CCol>
        </CRow>
      </CCard>
      <CCard className="mb-4 p-3">
        <CCardTitle className="mb-4 employee-role">Histórico de pagamentos</CCardTitle>
        <CTable align="middle" className="mb-0" style={{ borderRadius: '8px' }} hover responsive>
          <CTableBody>
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                <CTableDataCell className="text-center">
                  <CIcon
                    icon={icon.cilArrowCircleRight}
                    style={{
                      backgroundColor: 'red',
                      color: '#fff',
                      width: '40px',
                      height: '40px',
                      borderRadius: '30px',
                      padding: '5px',
                    }}
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <strong>{item.order.id}</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-end">
                      <strong>{item.usage.value}</strong>
                    </div>
                    <small className="text-medium-emphasis">{item.usage.period}</small>
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" icon={item.usage.color} />
                </CTableDataCell>
                <CTableDataCell>
                  <small>{item.activity}</small>
                </CTableDataCell>
                <CTableDataCell>
                  <strong className={getStatusClass(item.status)}>{item.status}</strong>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>
    </>
  )
}
export default Profile
