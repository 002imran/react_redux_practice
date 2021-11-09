import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyBanana from '../redux/banana/bananaActions'
const BananaHooksCounter = () => {
    const numOfBanana = useSelector(state => state.banana.numOfBanana)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Banana-- {numOfBanana}</h2>
            <button onClick={()=> dispatch(buyBanana())}>Buy Banna From here</button>
            
        </div>
    )
}

export default BananaHooksCounter
