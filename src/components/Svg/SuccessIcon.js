import React from 'react'

function successIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3FE075" />
          <stop offset="100%" stopColor="#19BB4F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="url(#a)" />
        <path fill="#FFF" fillRule="nonzero" d="M29.44 12.439l2.12 2.122-14.07 14.057-8.048-8.002 2.116-2.127 5.927 5.893z"
        />
      </g>
    </svg>
  )
}

export default successIcon
