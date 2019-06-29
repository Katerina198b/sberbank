import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import PropTypes from 'prop-types'

import Form from '../../components/Form/index'
import FormHeader from '../../components/Form/FormHeader'
import FormName from '../../components/Form/FormName'
import FormPhone from '../../components/Form/FormPhone'
import FormEmail from '../../components/Form/FormEmail'
import FormButton from '../../components/Form/FormButton'
import FormConditions from '../../components/Form/FormConditions'

import Modal from '../../components/Modal/index'
import ModalIcon from '../../components/Modal/ModalIcon'
import ModalHeader from '../../components/Modal/ModalHeader'

import SuccessIcon from '../../components/Svg/SuccessIcon'

class FormPage extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      formIncorrect: false
    }
  }

    isCorrect = () => {
      // проверяем метод isCorrect только у required компонент
      return FormName.isCorrect(this.state.name) && FormPhone.isCorrect(this.state.phone)
    };

    onFormSubmit = (e) => {
      e.preventDefault()

      if (this.isCorrect()) {
        this.props.post({
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
        })
      } else {
        this.setState({ formIncorrect: true })
      }
    };

    render () {
      return (
            <>
            <Modal show={this.props.successModalShow}
              close={() => this.props.showSuccessModal(false)}
            >
              <ModalHeader>
                <ModalIcon>
                  <SuccessIcon/>
                </ModalIcon>
                <h1> Заявка отправлена! </h1>
                <p> Менеджер уже звонит, посмотрите на телефон.</p>
              </ModalHeader>
            </Modal>

            <Form onSubmit={this.onFormSubmit}>

              <FormHeader>
                    Заголовок формы
              </FormHeader>

              <FormName
                value={this.state.name}
                onChange={(el) => this.setState({ name: el })}
              />

              <FormPhone
                value={this.state.phone}
                onChange={(el) => this.setState({ phone: el })}
              />

              <FormEmail
                value={this.state.email}
                onChange={(el) => this.setState({ email: el })}
              />

              <FormButton disabled={!this.isCorrect()}>
                    Начать работу
              </FormButton>

              <FormConditions>
                    Нажимая кнопку &laquo;Отправить&raquo;, я даю свое согласие на обработку персональных данных.
                <a className='form__link' target='_blank' href='../../static/conditions.pdf'> Условия использования данных.</a>
              </FormConditions>

            </Form>
            </>
      )
    }
}

FormPage.propTypes = {
  successModalShow: PropTypes.bool
}

FormPage.defaultProps = {
  successModalShow: false
}

const mapStateToProps = (state) => {
  return { successModalShow: state.successModalShow }
}

export default connect(mapStateToProps, { ...actions })(FormPage)
