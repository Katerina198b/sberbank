import FormInput from './FormInput'
import React from 'react'

class FormEmail extends FormInput {
    static isCorrect = (str) => {
      return /\w+?@\w+?\.\w/i.test(str)
    };

    render () {
      return (
        <p className='form__item'>
          <input type="email"
            className={`form__input ${this.props.value ? '' : 'form__input_empty '}`}
            name='email'
            id='email'
            onChange={this.clickHandler('[^\\w@\.]')}
            value={this.props.value}
          />
          <label className='form__label' htmlFor='email'>Электронная почта</label>
        </p>
      )
    }
}

export default FormEmail
