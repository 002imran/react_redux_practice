import React from 'react'
import buyIcecream from '../redux/iceCream/iceCreamActions' 
import { connect } from 'react-redux'


const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCream}</h2>
            <button onClick={props.buyIcecream}>Buy ---Ice cream</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(IceCreamContainer)
