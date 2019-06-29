import TYPE from '../constants/actionTypes'

const formActions = {

    post (data) {
        return {
            type: TYPE.FORM.POST,
            data
        }
    },

    errorPost (error) {
        return {
            type: TYPE.FORM.ERROR_POST,
            error
        }
    },

    showSuccessModal(show) {
        return {
            type: TYPE.MODAL.SUCCESS,
            show
        }
    }
};

export default formActions
