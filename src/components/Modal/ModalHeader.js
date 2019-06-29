import React from 'react'

function ModalHeader (props) {
  return (
    <header className=' modal__header'>
      {props.children}
    </header>
  )
}

export default ModalHeader
