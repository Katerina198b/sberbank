import TYPE from '../constants/actionTypes'

const initialState = {
  successModalShow: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE.MODAL.SUCCESS: {
      let newState = Object.assign({}, state)
      newState.successModalShow = action.show
      return newState
    }
    default: {
      return state
    }
  }
}
