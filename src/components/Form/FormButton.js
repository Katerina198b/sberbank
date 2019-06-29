import React from 'react'

function FormButton (props) {
  return <button className='button form__button'
    disabled={props.disabled || false}
  >
    {props.children}
  </button>
}

export default FormButton
