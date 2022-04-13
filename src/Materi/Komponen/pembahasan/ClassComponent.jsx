import React from "react";
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    handleMinus = () => {
        if(this.state.value > 0)
        this.setState({value: this.state.value - 1})
    }

    render() {
        return(
            <div>
                <h1>Nama : {this.props.nama}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facere aut repellat harum omnis fugiat, pariatur sed dolores, repudiandae rerum ex nulla fugit dolore impedit ipsum accusamus optio labore libero.</p>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default ClassComponent;