import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../services/api'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const api = useApi()
  const history = useNavigate()

  useEffect(() => {
    const doLogout = async () => {
      await api.logout()
      history('/login')
    }
    doLogout()
  }, [api, history])

  return null
}
