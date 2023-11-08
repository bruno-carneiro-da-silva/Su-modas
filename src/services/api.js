const baseURL = 'https://api.b7web.com.br/devcond/api/admin'

const request = async (params, methods, endpoint, token = null) => {
  methods = methods.toLowerCase()
  let fullURL = `${baseURL}${endpoint}`
  let body = null

  switch (methods) {
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
      throw new Error(`Invalid method: ${methods}`)
  }
  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const req = await fetch(fullURL, { methods, headers, body })
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
  }
}
