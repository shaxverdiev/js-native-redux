import {ENABLE_BUTTONS, DISABLE_BUTTONS, INCREMENT, DECREMENT, CHANGE_THEME} from "./types"


export function increment() {
  return {
    type: INCREMENT
  }
}

export function enableButton() {
  return {
    type: ENABLE_BUTTONS
  }
}
export function disableButton() {
  return {
    type: DISABLE_BUTTONS
  }
}
export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return function(dispatch) {
    setTimeout(() => { 
    dispatch(increment())
  }, 1500)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}