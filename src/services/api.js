const baseURL = 'https://api.b7web.com.br/devcond/api/admin'

const request = async (params, method, endpoint, token = null) => {
  method = method.toLowerCase()
  let fullURL = `${baseURL}${endpoint}`
  let body = null

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString()
      fullURL += `?${queryString}`
      break
    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params)
      break
    default:
      throw new Error(`Invalid method: ${method}`)
  }
  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const req = await fetch(fullURL, { method, headers, body })
  const json = await req.json()
  return json
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return {
    getToken: () => {
      return localStorage.getItem('token')
    },
    validateToken: async () => {
      let token = localStorage.getItem('token')
      let json = await request({}, 'post', '/auth/validate', token)
      return json
    },
    login: async (email, password) => {
      let json = await request({ email, password }, 'post', '/auth/login')
      return json
    },
    logout: async (email, password) => {
      let token = localStorage.getItem('token')
      let json = await request({ email, password }, 'post', '/auth/logout', {}, token)
      localStorage.removeItem('token')
      return json
    },
    getwall: async () => {
      let token = localStorage.getItem('token')
      let json = await request({}, 'get', '/walls', token)
      return json
    },
    updateWall: async (id, data) => {
      let token = localStorage.getItem('token')
      let json = await request('put', `/walls/${id}`, data, token)
      return json
    },
  }
}
