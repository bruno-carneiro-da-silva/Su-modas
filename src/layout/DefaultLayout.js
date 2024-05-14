import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
// import { useNavigate } from 'react-router-dom'
// import useApi from '../services/api'

const DefaultLayout = () => {
  // const [loading, setLoading] = useState(true)
  // const api = useApi()
  // const history = useNavigate()

  // // useEffect(() => {
  // //   const checkLogin = async () => {
  // //     if (api.getToken()) {
  // //       const result = await api.validateToken()
  // //       if (result.error === '') {
  // //         setLoading(false)
  // //       } else {
  // //         alert(result.error)
  // //         history('/login')
  // //       }
  // //     } else {
  // //       history('/login')
  // //     }
  // //   }
  // //   checkLogin()
  // // }, [api, history])

  return (
    <div>
      {/* {!loading && ( */}
      <>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  )
}

export default DefaultLayout
