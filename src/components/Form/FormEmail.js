import FormInput from './FormInput'
import React from 'react'

class FormEmail extends FormInput {
    // лучше отсеять меньше, чем не дать человеку заполнить форму с не типичным, но существующим email
    static isCorrect = (str) => {
      return /@.+?\..+/i.test(str)
    };

    render () {
      return (
        <p className='form__item'>
          <input
            className={`form__input ${this.props.value ? '' : 'form__input_empty '}` +
                        `${FormEmail.isCorrect(this.props.value) ? '' : 'form__input_incorrect'}`}
            name='email'
            id='email'
            onChange={this.clickHandler('')}
            value={this.props.value}
          />
          <label className='form__label' htmlFor='email'>Электронная почта</label>
        </p>
      )
    }
}

export default FormEmail
