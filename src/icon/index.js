import React from 'react'
import PropTypes from 'prop-types'

const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fcc43e"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#fcc43e"
    className={className}
    height="1.5em"
    width="1.5em"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
)

const ChartIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#4d44b5"
    className={className}
    height="3.5em"
    width="3.5em"
  >
    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
  </svg>
)

const ArrowIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#4d44b5"
    className={className}
    height="3.5em"
    width="3.5em"
  >
    <path
      fillRule="evenodd"
      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

StarIcon.propTypes = {
  className: PropTypes.string.isRequired,
}
ChartIcon.propTypes = {
  className: PropTypes.string.isRequired,
}
ArrowIcon.propTypes = {
  className: PropTypes.string.isRequired,
}
export { StarIcon, ChartIcon, ArrowIcon }
