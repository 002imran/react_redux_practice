import React from 'react'
import { connect } from 'react-redux'
import buyIcecream from '../redux/iceCream/iceCreamActions'
import buyCake from '../redux/cake/cakeActions'
const ItemContainer = (props) => {
    return (
        <div>
            <h2> Item---{props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream())

return{
    buyItem: dispatchFunction
}
}


export default connect(
    null,
    mapDispatchToProps) (ItemContainer)
