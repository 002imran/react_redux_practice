import React from 'react'
import buyBanana from '../redux/banana/bananaActions'
import { connect } from 'react-redux'

const BananaContainer = (props) => {
    return (
        <div>
            <h2>Number of Banana - {props.numOfBanana}</h2>    
            <button onClick={props.buyBanana}> Buy--Banana** </button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfBanana: state.banana.numOfBanana
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyBanana: () => dispatch(buyBanana())
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps

)(BananaContainer)
