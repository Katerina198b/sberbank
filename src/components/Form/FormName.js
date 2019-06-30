import FormInput from './FormInput'
import React from 'react'

class FormEmail extends FormInput {
  constructor (props) {
    super(props)
    this.state = {
      label: 'Имя*'
    }
  }

  // считаем что имя заполнено верно, если в нем больше 2 букв
  static isCorrect = (str) => {
    str = str.replace(/\s+/g, '')
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
          onFocus={() => this.setState({ label: 'Имя на русском языке, больше 2 букв *' })}
          onBlur={() => this.setState({ label: 'Имя*' })}
        />
        <label className='required form__label' htmlFor='name'>{this.state.label}</label>
      </p>
    )
  }
}

export default FormEmail
