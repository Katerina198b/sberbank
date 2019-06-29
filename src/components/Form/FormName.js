import FormInput from './FormInput'
import React from 'react'

class FormEmail extends FormInput {
    static isCorrect = (str) => {
      return str.length > 2
    };

    render () {
      return (
        <p className='form__item'>
          <input type="text"
            className={`form__input ${this.props.value ? '' : 'form__input_empty '}` +
                       `${FormEmail.isCorrect(this.props.value) ? '' : 'form__input_incorrect'}`}
            name='name'
            id='name'
            onChange={this.clickHandler('[^а-яё ]')}
            value={this.props.value}
          />
          <label className='required form__label' htmlFor='name'>Имя*</label>
        </p>
      )
    }
}

export default FormEmail
