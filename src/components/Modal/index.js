import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Modal (props) {
  return (
    <div className={`modal ${props.show ? 'open' : 'close'}`}
      onClick={props.close}
    >
      <div className='modal__background'>
        <div className='modal__content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool
}

Modal.defaultProps = {
  show: false
}

export default Modal
