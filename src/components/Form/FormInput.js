import { Component } from 'react'
import PropTypes from 'prop-types'

class FormInput extends Component {
    _getFilterStr = (pattern, str) => {
      pattern = new RegExp(pattern, 'gi')
      return str.replace(pattern, '')
    };

    clickHandler = (pattern) => (e) => {
      const value = this._getFilterStr(pattern, e.target.value)
      this.props.onChange(value)
    };
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired
}

export default FormInput
