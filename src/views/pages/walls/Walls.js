import React, { useEffect, useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
  CTable,
} from '@coreui/react'
import { cilCheck } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import useApi from '../../../services/api'

const Walls = () => {
  const api = useApi()
  const [list, setList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalBody, setModalBody] = useState('')
  const [modalId, setModalId] = useState('')

  const handleEditButton = (index) => {
    setModalId(list[index]['id'])
    setModalTitle(list[index]['title'])
    setModalBody(list[index]['body'])
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleModalSave = async () => {
    console.log('here', modalBody, modalTitle)
    if (modalTitle && modalBody) {
      const result = await api.updateWall(modalId, {
        title: modalTitle,
        body: modalBody,
      })
      if (result.error === '') {
        setShowModal(false)
        req()
      } else {
        alert(result.error)
      }
    } else {
      alert('Preencha os campos')
    }
  }

  useEffect(() => {
    const req = async () => {
      let json = await api.getwall()
      if (json.error === '') {
        setList(
          json.list.map((item, index) => ({
            ...item,
            actions: (
              <CButtonGroup>
                <CButton color="info" onClick={() => handleEditButton(index)}>
                  Editar
                </CButton>
                <CButton color="danger">Excluir</CButton>
              </CButtonGroup>
            ),
          })),
        )
      } else {
        alert(json.error)
      }
    }
    req()
  }, [])

  const fields = [
    { label: 'Titulo', key: 'title' },
    { label: 'Data de Criação', key: 'datecreated', _style: { width: '200px' } },
    { label: 'Ações', key: 'actions', _style: { width: '1px' } },
  ]
  return (
    <>
      <CRow>
        <CCol>
          <h2>Mural de Avisos</h2>
          <CCard>
            <CCardHeader>
              <CButton color="primary">
                <CIcon icon={cilCheck} /> Novo Aviso
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable items={list} columns={fields} striped hover bordered />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal visible={showModal} onClose={handleCloseModal}>
        <CModalHeader closeButton>Editar aviso</CModalHeader>
        <CModalBody>
          <CForm>
            <CFormLabel htmlFor="title">Titulo</CFormLabel>
            <CFormInput
              type="text"
              id="title"
              name="title"
              placeholder="Digite o titulo"
              value={modalTitle}
              onChange={(e) => setModalTitle(e.target.value)}
            />
          </CForm>
          <CForm>
            <CFormLabel htmlFor="title">Corpo do aviso</CFormLabel>
            <CFormTextarea
              id="body"
              name="title"
              placeholder="Digite o conteúdo do aviso"
              value={modalBody}
              onChange={(e) => setModalBody(e.target.value)}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={handleModalSave}>
            {' '}
            Salvar{' '}
          </CButton>
          <CButton color="secondary" onClick={handleCloseModal}>
            Cancelar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
export default Walls
