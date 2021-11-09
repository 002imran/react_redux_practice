import { BUY_BANANA } from "./bananaTypes";

const initialState = {
    numOfBanana: 50
}

const bananaReducer = (state = initialState, action)=>{

    switch(action.type){
        case BUY_BANANA:
            return{
                ...state,
                numOfBanana: state.numOfBanana - 1
            }
            default: return state
    }
}

export default bananaReducer