export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'

export const setActiveTab = (value) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_TAB,
    value
  })
}