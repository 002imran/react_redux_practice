import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/iceCreamReducer";
import bananaReducer from "./banana/bananaReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
    banana: bananaReducer,
    user: userReducer
    
})

export default rootReducer