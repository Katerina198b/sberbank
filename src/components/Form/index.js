import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

function Form (props) {
  return (
    <form className='form form_border m-auto'
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
