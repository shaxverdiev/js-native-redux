import { combineReducers } from "redux"
import {CHANGE_THEME, INCREMENT, DECREMENT} from "./types"



function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  } 
  return state
}




const initialThemeState = {
  value: 'light',
  disables: false
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:               // если type будет CHANGE_THEME            // повторить switch case
      return {...state, value: action.payload}   // возвращаем новый объект(при помощи деструктуризации) так как reducer не может мутировать
    case ENABLE_BUTTONS:  
      return {...state, disabled: false}
    case DISABLE_BUTTONS:  
      return {...state, disabled: true}
    default: return state
  }
   return state
}

export const rootReducer = combineReducers({ 
  counter: counterReducer,
  theme: themeReducer
})