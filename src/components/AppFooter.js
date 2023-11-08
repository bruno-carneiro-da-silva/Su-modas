import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://github.com/bruno-carneiro-da-silva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Su modas
        </a>
        <span className="ms-1">&copy; 2023 Su modas.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Criado por</span>
        <a
          href="https://github.com/bruno-carneiro-da-silva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Techne &amp; Dashboard
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
