import React, { Component } from 'react';
import { connect } from 'react-redux'; //Higher order Component used to access Redux Store
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }
 
    //This was used before redux
    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default:
    //             break;    
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput /*value={this.state.counter}*/ value = {this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDelFiveCounter}  />
                <hr />
                <button onClick={this.props.onStoreButton}>Store Results</button>
                <ul>
                {this.props.rslts.map(rslt => (
                    <li key={rslt.id} onClick={()=>this.props.onDeleteButton(rslt.id)}>{rslt.value}</li>
                ))}
                </ul>
            </div>
        );
    }
}
////Converts the above State to props to be used 
const mapStateToProps = state =>{ //Send State to reducer
    return {
        ctr: state.counter,
        rslts: state.results
    };
};

const mapDispatchToProps = dispatch => { //Send Action to reducer
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFiveCounter: () => dispatch({type: 'ADDFIVE', value: 10}),
        onDelFiveCounter: () => dispatch({type: 'DELFIVE', value: 15}),
        onStoreButton: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteButton: (id) => dispatch({type: 'DELETE_RESULT', resultID: id}) //id recieved through anonymous function
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);