import './index.scss'
import FormInput from './FormInput'
import React from 'react'

class FormPhone extends FormInput {
  _setCaretPosition (elem) {
    const caretPos = elem.value.length - elem.value.split('').reverse().join('').search(/\d/)
    elem.focus()
    elem.setSelectionRange(caretPos, caretPos)
  }

    static isCorrect = (str) => {
      return /\+7\(\d{3}\)-\d{2}-\d{2}/.test(str)
    };

    clickHandler = (pattern) => (e) => {
      const elem = e.target
      let tel = this._getFilterStr(pattern, elem.value)
      let iterator = 0
      if (this.props.value === '' && (tel[0] === '7' || tel[0] === '8') && tel.length === 1) {
        (async () => {
          await this.props.onChange('+7(___)-__-__')
          this._setCaretPosition(elem)
        })()
      } else {
        if (tel.length > 0) {
          tel = '+7(___)-__-__'.replace(/_/gi, () => tel[iterator++] || '_')
        }

        (async () => {
          await this.props.onChange(tel)
          this._setCaretPosition(elem)
        })()
      }
    };

    render () {
      return (
        <p className='form__item'>
          <input type="tel"
            className={`form__input ${this.props.value ? '' : 'form__input_empty '}` +
                           `${FormPhone.isCorrect(this.props.value) ? '' : 'form__input_incorrect'}`
            }
            name='tel'
            id='tel'
            onChange={this.clickHandler('(\\+7)|[^\\d]')}
            value={this.props.value}
          />
          <label className='required form__label' htmlFor='tel'>Номер телефона*</label>
        </p>
      )
    }
}

export default FormPhone
