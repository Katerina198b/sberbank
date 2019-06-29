import actions from '../actions'
import TYPES from '../constants/actionTypes'

export default (store) => (next) => (action) => {
  switch (action.type) {
    case TYPES.FORM.POST: {
      (async () => {
        try {
          // тут отправить форму
          store.dispatch(actions.showSuccessModal(true))
        } catch (e) {
          store.dispatch(actions.errorPost(e.message))
        }
      })()
      break
    }
  }
  return next(action)
}
